const review = {
  id: 1,
  rating: 5,
  content: `
        <p>This icon pack is just what I need for my latest project. There's an icon for just about anything I could ever need. Love the playful look!</p>
      `,
  date: "July 16, 2021",
  datetime: "2021-07-16",
  author: "Emily Selman",
  avatarSrc:
    "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80",
};

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Comment() {
  return (
    <div key={review.id} className="flex space-x-4 text-sm text-gray-500">
      <div className="flex-none ">
        <img
          src={review.avatarSrc}
          alt=""
          className="h-10 w-10 rounded-full bg-gray-100"
        />
      </div>
      <div className={classNames(0 === 0 ? "" : "border-t border-gray-200")}>
        <h3 className="font-medium text-gray-900">{review.author}</h3>
        <p>
          <time dateTime={review.datetime}>{review.date}</time>
        </p>

        <div
          className="prose prose-sm mt-2 max-w-none text-gray-500"
          dangerouslySetInnerHTML={{ __html: review.content }}
        />
      </div>
    </div>
  );
}
