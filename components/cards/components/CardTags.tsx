const data = [
  { id: "valorant", text: "valorant" },
  { id: "dog", text: "dog" },
  { id: "dog", text: "dog" },
  { id: "dog", text: "dog" },
];

export default function CardTags({ overlap = false, tags = data }) {
  return (
    <>
      <div>
        {tags.map((tag, index) => (
          <span
            key={"tag" + index}
            className="inline-block mx-1 px-2 py-1 mb-1 text-xs font-semibold text-blue-800 bg-blue-100 rounded dark:text-blue-300 dark:bg-blue-900"
          >
            {tag.text}
          </span>
        ))}
      </div>
    </>
  );
}
