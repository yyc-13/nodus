import Tag from "../../utils/Tag";
export default function TagsBlock() {
  return (
    <>
      <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex items-center flex-wrap gap-2">
        <h2 className="text-2xl font-extrabold tracking-tight text-slate-900 w-full dark:text-zinc-100">
          Tags for you.
        </h2>
        <Tag />
        <Tag />
        <Tag />
        <Tag />
      </div>
    </>
  );
}
