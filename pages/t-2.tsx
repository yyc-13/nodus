import { useInView } from "react-intersection-observer";
import React, { useState, useEffect } from "react";
import useSWRInfinite from "swr/infinite";

const fetcher = (url) => fetch(url).then((res) => res.json());
const PAGE_SIZE = 6;

export default function App() {
  const [repo, setRepo] = useState("reactjs/react-a11y");
  const [val, setVal] = useState(repo);
  const [hasMore, setHasMore] = useState(true);
  const { ref, inView } = useInView({ threshold: 1 });

  const { data, mutate, size, setSize, isValidating, isLoading } =
    useSWRInfinite(
      (index, previousPageData) => {
        console.log("previousPageData", previousPageData);
        return `https://api.github.com/repos/${repo}/issues?per_page=${PAGE_SIZE}&page=${
          index + 1
        }`;
      },
      fetcher,
      { initialSize: 4 }
    );

  console.log("data in t-2", data);
  const issues = data ? [].concat(...data) : [];
  const isLoadingMore =
    isLoading || (size > 0 && data && typeof data[size - 1] === "undefined");
  const isEmpty = data?.[0]?.length === 0;
  const isReachingEnd =
    isEmpty || (data && data[data.length - 1]?.length < PAGE_SIZE);
  const isRefreshing = isValidating && data && data.length === size;
  console.log("data from useSWRInfinite", data);

  useEffect(() => {
    if (inView) {
      setSize(size + 1);
    }
  }, [inView]);

  return (
    <div style={{ fontFamily: "sans-serif" }}>
      <input
        value={val}
        onChange={(e) => setVal(e.target.value)}
        placeholder="reactjs/react-a11y"
      />
      <button
        onClick={() => {
          setRepo(val);
          setSize(1);
        }}
      >
        load issues
      </button>
      <p>
        showing {size} page(s) of {isLoadingMore ? "..." : issues.length}{" "}
        issue(s){" "}
        <button
          disabled={isLoadingMore || isReachingEnd}
          onClick={() => setSize(size + 1)}
        >
          {isLoadingMore
            ? "loading..."
            : isReachingEnd
            ? "no more issues"
            : "load more"}
        </button>
        <button disabled={isRefreshing} onClick={() => mutate()}>
          {isRefreshing ? "refreshing..." : "refresh"}
        </button>
        <button disabled={!size} onClick={() => setSize(0)}>
          clear
        </button>
      </p>
      {isEmpty ? <p>Yay, no issues found.</p> : null}
      {issues.map((issue) => {
        return (
          <p key={issue.id} style={{ margin: "6px 0" }}>
            - {issue.title}
          </p>
        );
      })}
      {!isReachingEnd && (
        <div ref={ref} style={{ display: "inline-block", width: "10px" }}>
          東踏取密
        </div>
      )}
    </div>
  );
}
