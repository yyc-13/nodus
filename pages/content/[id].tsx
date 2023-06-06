import { useRouter } from "next/router";
import { GetStaticProps, GetStaticPaths } from "next";
import prisma from "@/lib/prismaClient";
import ProductInfo from "@/components/product/info";
import ProductFAQ from "@/components/product/faq";
import ProductReview from "@/components/product/review";

const dataFormatter = new Intl.DateTimeFormat("en-US", {
  year: "numeric",
  month: "2-digit",
  day: "2-digit",
  hour: "2-digit",
  // minute: "2-digit",
  // second: "2-digit",
  timeZone: "UTC",
});

export const getStaticPaths: GetStaticPaths = async () => {
  // Fetch all product IDs

  const res = await fetch(`${process.env.BASE_URL}/api/product/get-all-id`, {
    method: "GET",
  });
  const productIds = await res.json();

  // Map product IDs to paths
  const paths = productIds.map((id) => ({
    params: { productId: id },
  }));

  return { paths, fallback: true };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  // Fetch product data by ID

  const product = await prisma.product
    .findUnique({
      where: {
        id: params.productId,
      },
      include: {
        seller: {
          include: {
            userInfo: {
              select: {
                id: true,
                nickname: true,
                introduction: true,
              },
            },
          },
        },
        prodUrls: true,
        previewUrls: true,
      },
    })
    .catch((err) => console.log(err));
  // If the product doesn't exist, return notFound: true to indicate a 404 status

  if (!product) {
    return { notFound: true };
  }

  product.createdAt = dataFormatter.format(new Date(product.createdAt));
  product.updatedAt = dataFormatter.format(new Date(product.updatedAt));

  // review data
  let reviewStatic = {};
  const avgRating = await prisma.review.aggregate({
    _avg: {
      rating: true,
    },
    where: {
      productId: params.productId,
    },
  });
  const productRating = Math.round(avgRating._avg.rating * 100) / 100;
  reviewStatic.avgRating = productRating;
  product.rating = productRating;
  const reviewCount = await prisma.review.count({
    where: {
      productId: params.productId,
    },
  });
  reviewStatic.reviewCount = reviewCount;
  const ratingCounts = await prisma.review.groupBy({
    by: ["rating"],
    _count: {
      rating: true,
    },
    where: {
      productId: params.productId,
    },
  });

  reviewStatic.ratingCounts = ratingCounts.map(({ rating, _count }) => ({
    rating,
    count: _count.rating,
  }));

  let faqStatic = {};
  // faq data
  const faqCount = await prisma.question.count({
    where: {
      productId: params.productId,
    },
  });
  faqStatic.faqCount = faqCount;

  // const totalRatings = product.reviews.reduce(
  //   (sum, review) => sum + review.rating,
  //   0
  // );

  // Return product as props

  return {
    props: {
      product: product,
      reviewStatic: reviewStatic,
      faqStatic: faqStatic,
    },
    // ISR revalidate every 5 minutes
    revalidate: 60 * 5,
  };
};

// revalidate to do ISR

export default function ProductPage({ product, reviewStatic, faqStatic }) {
  const router = useRouter();
  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <ProductInfo product={product} />
      <ProductFAQ productId={product.id} faqStatic={faqStatic} />
      <ProductReview reviewStatic={reviewStatic} productId={product.id} />
    </>
  );
}
