import useSWRInfinite from "swr/infinite";
import AudioCard from "../content-page/AudioCard";
import ImageCard from "../content-page/ImageCard";
import VideoCard from "../content-page/VideoCard";
import TextCard from "../content-page/TextCard";

const fetcher = async (url) => {
  const res = await fetch(url);
  if (!res.ok) throw new Error(res.statusText);
  return res.json();
};

export default function Basic() {
  const { data, error, mutate, size, setSize, isValidating } = useSWRInfinite(
    (index) => `/api/content/content?page=${index + 1}`,
    fetcher
  );

  const isEndOfData = data && data[data.length - 1].length < 6; // page size;

  // Concatenate all the loaded 'contents' arrays to a big one
  const contents = data ? [].concat(...data) : [];

  console.log("data from index", data);

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Nodus
          </h2>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {contents.map((content, index) => {
            switch (content.card.fileType) {
              case "AUDIO":
                // Return an audio player for audio files
                return (
                  <AudioCard basicContent={content} key={`card_${index}`} />
                );
              case "VIDEO":
                // Return a video player for video files
                return (
                  <VideoCard basicContent={content} key={`card_${index}`} />
                );
              case "IMAGE":
                // Return an image tag for image files
                return (
                  <ImageCard basicContent={content} key={`card_${index}`} />
                );
              case "TEXT":
                return (
                  <TextCard basicContent={content} key={`card_${index}`} />
                );
              default:
                // If the fileType is none of the above, return null
                return null;
            }
          })}
        </div>
        {!isEndOfData && (
          <div className="flex justify-center">
            <button onClick={() => setSize(size + 1)} disabled={isValidating}>
              Load More
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
