import UserMedia from "./components/UserMedia";

export default function VideoMain({ mainContent, basicContent, sampleOrMain }) {
  if (!mainContent || !basicContent) {
    return <div>Loading...</div>;
  }
  const src =
    sampleOrMain == "sample"
      ? basicContent.sample.files[0]
      : mainContent.mainFile.files[0];

  const description =
    sampleOrMain == "sample"
      ? basicContent.sample.description
      : mainContent.mainFile.description;

  return (
    <div className="mx-auto max-w-7xl px-6 lg:px-8 py-6 lg:py-8">
      <div className="mx-auto  grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none ">
        <article
          key={basicContent.id}
          className="flex flex-col items-start justify-between"
        >
          <div className="relative w-full">
            <audio
              className="w-full p-2 mt-2"
              src={src}
              controls
              preload="metadata"
            />
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
            <div className="group relative">
              <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                <a href="#">
                  <span className="absolute inset-0" />
                  {basicContent.title}
                </a>
              </h3>
              <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                {description}
              </p>
            </div>
            {/* user media */}
            <UserMedia user={basicContent.creator} />
          </div>
        </article>
      </div>
    </div>
  );
}
