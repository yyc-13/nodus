import { useRouter } from "next/router";
import { GetStaticProps, GetStaticPaths } from "next";
import ProductWithImage from "@/components/product/card-lg";
import prisma from "@/lib/prismaClient";

export const getStaticPaths: GetStaticPaths = async () => {
  // Fetch all product IDs
  const res = await fetch(`/api/product/get-all-productid`, { method: "GET" });
  const productIds = await res.json();
  console.log("productIds", productIds);

  // Map product IDs to paths
  const paths = productIds.map((id) => ({
    params: { productId: id },
  }));

  return { paths, fallback: true };
};

// revalidate to do ISR
export const getStaticProps: GetStaticProps = async ({ params }) => {
  // Fetch product data by ID

  const product = await prisma.product.findUnique({
    where: {
      id: params.productId,
    },
  });

  if (!product) {
    return { notFound: true };
  }
  console.log("Product", product);
  // Return product as props
  return {
    props: {
      product,
    },
    revalidate: 60 * 5,
  };
};

// for real time data
export async function getServerSideProps({ params }) {
  return { props: {} };
}

export default function ProductPage({ product }) {
  const router = useRouter();
  const { productId } = router.query;

  return (
    <>
      <ProductWithImage product={product} />
      <h1>Product Page</h1>
      <div>Product ID: {productId}</div>
    </>
  );
}
