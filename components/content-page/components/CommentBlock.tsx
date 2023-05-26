import Comment from "./Comment";
export default function CommentBlock() {
  return (
    <div className="flex flex-col justify-center gap-y-6 py-4">
      <h2 className="text-2xl font-bold leading-10 tracking-tight text-gray-900 dark:text-white">
        comments
      </h2>
      <Comment />
      <Comment />
      <Comment />
    </div>
  );
}
