import UserMedia from "./components/UserMedia";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function ImageCard({ basicContent }) {
  if (!basicContent) {
    return <div>Loading...</div>;
  }

  return (
    <article
      key={basicContent.id}
      className="flex flex-col items-start justify-between"
    >
      <div className="relative w-full">
        <img
          src={basicContent.card.file}
          alt=""
          className="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
        />
        <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
      </div>
      <div className="max-w-xl">
        <div className="mt-8 flex items-center gap-x-4 text-xs">
          <time dateTime={basicContent.createdAt} className="text-gray-500">
            {basicContent.createdAt}
          </time>

          {basicContent.tags.length > 0 &&
            basicContent.tags.map((tag, index) => (
              <a
                key={`tag-${index}`}
                href="#"
                className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
              >
                {tag}
              </a>
            ))}
        </div>
      </div>
      <div className="group relative">
        <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
          <a href="#">
            <span className="absolute inset-0" />
            {basicContent.title}
          </a>
        </h3>
        <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
          {basicContent.card.description}
        </p>
      </div>
      {/* user media */}
      <UserMedia user={basicContent.creator} />
    </article>
  );
}
