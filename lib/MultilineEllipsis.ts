// const MultilineEllipsis = {
//   overflow: "hidden",
//   display: "-webkit-box",
//   WebkitBoxOrient: "vertical",
//   WebkitLineClamp: 8,
// };

export const createMultilineEllipsisStyle = (lineClamp: number) => ({
  overflow: "hidden",
  display: "-webkit-box",
  WebkitBoxOrient: "vertical",
  WebkitLineClamp: lineClamp,
});
