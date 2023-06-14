import { StarIcon } from "@heroicons/react/20/solid";
import Comment from "./Comment";
import { useState } from "react";
import useSWR, { mutate } from "swr";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function CommentBlock({ contentId }) {
  const { data: comments, error } = useSWR(
    `/api/comments/${contentId}`,
    fetcher
  );
  const [newComment, setNewComment] = useState("");

  console.log("comment error & data ", error, comments);
  if (error) return <div>Error loading comments.</div>;
  if (!comments) return <div>Loading comments...</div>;

  const handleNewCommentChange = (e) => {
    setNewComment(e.target.value);
  };
  const handleNewCommentSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(`/api/comments/${contentId}`, {
      method: "POST",
      body: JSON.stringify({ contentId, text: newComment }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      setNewComment(""); // Clear the input field
      mutate(`/api/comments/${contentId}`); // Re-fetch the comments
    }
  };

  return (
    <div className="flex flex-col justify-center gap-y-6 py-4 pt-6 md:pt-10">
      <h2 className="text-2xl font-bold leading-10 tracking-tight text-gray-900 dark:text-white">
        comments
      </h2>
      {/* comment box */}
      <div className="flex items-start space-x-4">
        <div className="flex-shrink-0">
          <img
            className="inline-block h-10 w-10 rounded-full"
            src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt=""
          />
        </div>
        <div className="min-w-0 flex-1">
          <form onSubmit={handleNewCommentSubmit} className="relative">
            <div className="overflow-hidden rounded-lg shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-indigo-600">
              <label htmlFor="comment" className="sr-only">
                Add your comment
              </label>
              <textarea
                rows={3}
                name="comment"
                id="comment"
                className="block w-full resize-none border-0 bg-transparent py-1.5 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                placeholder="Add your comment..."
                value={newComment}
                onChange={handleNewCommentChange}
              />

              {/* Spacer element to match the height of the toolbar */}
              <div className="py-2" aria-hidden="true">
                {/* Matches height of button in toolbar (1px border + 36px content height) */}
                <div className="py-px">
                  <div className="h-9" />
                </div>
              </div>
            </div>

            <div className="absolute inset-x-0 bottom-0 flex justify-between py-2 pl-3 pr-2">
              <div className="flex-shrink-0">
                <button
                  type="submit"
                  className="inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Post
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      {/* comment section */}
      <div className="bg-white">
        <div>
          <h2 id="comments-heading" className="sr-only">
            comments
          </h2>

          <div className="space-y-10">
            {comments.map((comment) => (
              <div key={comment.id} className="flex flex-col sm:flex-row">
                <div className="order-2 mt-6 sm:ml-16 sm:mt-0">
                  <p className="sr-only">{comment.rating} out of 5 stars</p>

                  <div
                    className="mt-3 space-y-6 text-sm text-gray-600"
                    dangerouslySetInnerHTML={{ __html: comment.content }}
                  />
                </div>

                <div className="order-1 flex items-center sm:flex-col sm:items-start">
                  <img
                    src={comment.avatarSrc}
                    alt={`${comment.author}.`}
                    className="h-12 w-12 rounded-full"
                  />

                  <div className="ml-4 sm:ml-0 sm:mt-4">
                    <p className="text-sm font-medium text-gray-900">
                      {comment.author}
                    </p>
                    <div className="mt-2 flex items-center">
                      {[0, 1, 2, 3, 4].map((rating) => (
                        <StarIcon
                          key={rating}
                          className={classNames(
                            comment.rating > rating
                              ? "text-gray-900"
                              : "text-gray-200",
                            "h-5 w-5 flex-shrink-0 opacity-0"
                          )}
                          aria-hidden="true"
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
