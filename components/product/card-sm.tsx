export default function CardSm({ product }) {
  const date = new Date(product.createdAt);
  const formattedData = new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "2-digit",
    hour: "2-digit",
    timeZoneName: "short",
  }).format(date);

  const productUrl = `/product/${product.id}`;
  const sellerUrl = `/user/${product.seller.id}`;
  return (
    <article
      key={product.id}
      className="flex max-w-xl flex-col items-start justify-between w-72"
    >
      <div className="flex items-center gap-x-4 text-xs ">
        <time dateTime={product.createdAt} className="text-gray-500">
          {formattedData}
        </time>
        <a
          href={productUrl}
          className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
        >
          {product.title}
        </a>
      </div>
      <div className="group relative">
        <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
          <a href={productUrl}>
            <span className="absolute inset-0" />
            {product.title}
          </a>
        </h3>
        <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
          {product.description}
        </p>
      </div>
      <div className="relative mt-8 flex items-center gap-x-4">
        <img
          src={product.seller.image}
          alt={`Avatar of ${product.seller.name}`}
          className="h-10 w-10 rounded-full bg-gray-50"
        />
        <div className="text-sm leading-6">
          <p className="font-semibold text-gray-900">
            <a href={sellerUrl}>
              <span className="absolute inset-0" />
              {product.seller.name}
            </a>
          </p>
          {/* <p className="text-gray-600">{product.author.role}</p> */}
        </div>
      </div>
    </article>
  );
}
