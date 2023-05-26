import AudioCard from "../cards/AudioCard";
import VideoCard from "../cards/VideoCard";
import TextCard from "../cards/TextCard";
import ImageCard from "../cards/ImageCard";
import ExpandMoreBtn from "../utils/ExpandMoreBtn";
import { useState, useEffect } from "react";
import React from "react";

export default function BasicContentLayout() {
  const [showMore, setShowMore] = useState(1);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/api/data");
      const jsonData = await res.json();
      setData(jsonData);
    };

    fetchData();
  }, []);

  const expand = () => {
    setShowMore(showMore + 1);
  };
  const cards = [];
  for (let i = 0; i < showMore; i++) {
    cards.push(
      <React.Fragment key={i}>
        <AudioCard />
        <VideoCard />
        <ImageCard />
        <TextCard />
      </React.Fragment>
    );
  }

  return (
    <div className="mt-16 space-y-20 lg:mt-20 lg:space-y-20">
      {cards}
      <div className="flex items-center justify-center ">
        <ExpandMoreBtn expand={expand} />
      </div>
    </div>
  );
}
