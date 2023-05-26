import { useState, useEffect, useRef } from "react";
import { Switch } from "@headlessui/react";
import SideNav from "@/components/flowbite/Sidebar";
import TopNav from "@/components/flowbite/TopNav";
import Carousel from "@/components/flowbite/carousel";
import Banner from "@/components/banner";
import NavButtons from "@/components/flowbite/navButtons";
import VideoCard from "@/components/flowbite/videoCard";
import RelatedArticles from "@/components/flowbite/relatedArticles";
/* eslint-disable @next/next/no-img-element */
export default function Test() {
  const [sidebar, setSidebar] = useState(false);
  const drawerRef = useRef();

  const handleClickOutside = (event) => {
    if (drawerRef.current && !drawerRef.current.contains(event.target)) {
      setSidebar(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div>
      {/* Top nav */}

      <TopNav setSidebar={setSidebar} sidebar={sidebar} />
      <SideNav
        sidebar={sidebar}
        setSidebar={setSidebar}
        drawerRef={drawerRef}
      />
      <Banner />
      <div className="sm:grid  sm:grid-cols-2 lg:grid-cols-3 sm:gap-4 mx-8 my-2">
        <div>
          <Carousel />
        </div>
        <div className="hidden sm:block">
          <Carousel />
        </div>
        <div className="hidden lg:block">
          <Carousel />
        </div>
      </div>

      <NavButtons />

      <RelatedArticles />
    </div>
  );
}
