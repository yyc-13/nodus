import { useState, useRef } from "react";
import TopNav from "./TopNav";
import Sidebar from "./Sidebar";
import useOutsideClick from "../../lib/sidebarControl";

export default function Layout({ children = "No content provided." }) {
  const [sidebar, setSidebar] = useState(false);
  const sidebarRef = useRef();

  useOutsideClick(sidebarRef, () => {
    if (sidebar) {
      setSidebar(false);
    }
  });

  return (
    <>
      <TopNav sidebar={sidebar} setSidebar={setSidebar} />
      <div className="dark:bg-gray-900">
        <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-8">
          <Sidebar
            sidebar={sidebar}
            setSidebar={setSidebar}
            sidebarRef={sidebarRef}
          />
          <div>{children}</div>
        </div>
      </div>
    </>
  );
}
