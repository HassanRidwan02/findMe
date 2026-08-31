import { useRef } from "react";

import Navbar from "../Homepage/Navbar"
import HeroSection from "../Homepage/HeroSection";
import FilterSection from "../Homepage/FilterSection";

export default function Home({ items }) {
  const filterRef = useRef(null);

  function scrollToItems() {
    filterRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }

  return (
    <>


         <Navbar />
        <HeroSection onBrowseItems={scrollToItems} />

        <div ref={filterRef}>
            <FilterSection items={items} />
        </div>
        </>
  );
}