export default function Card({ product, className }) {
  console.log("product", product);

  const date = new Date(product.createdAt);
  const formattedData = new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "2-digit",
    hour: "2-digit",
    timeZoneName: "short",
  }).format(date);

  const productUrl = `/products/${product.id}`;
  const sellerUrl = `/user/${product.seller.id}`;
  return (
    <article
      key={product.id}
      className="flex max-w-xl flex-col items-start justify-between border-theme-browner rounded-lg shadow-lg overflow-hidden px-6 py-4"
    >
      <div className="flex flex-col ">
        <div className="mb-2 text-xs ">
          <time dateTime={product.createdAt} className="text-gray-500">
            {formattedData}
          </time>
        </div>

        <h3 className=" text-lg font-semibold text-gray-900 group-hover:text-gray-600">
          <a href={productUrl}>
            <span className="py-4" />
            {product.title}
          </a>
        </h3>
        <p className="mt-2 line-clamp-3 text-sm leading-6 text-gray-600">
          {product.description}
        </p>
      </div>
      {/* user info */}
      <div className="relative mt-8 flex items-center  w-full  justify-between">
        <div className="flex items-center justify-around gap-x-4">
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
        <div
          className=" rounded-lg bg-slate-100 text-xs font-semibold leading-6 text-slate-700
             "
        >
          {product.type}
        </div>
      </div>
    </article>
  );
}
