import React, { useState, useRef, useEffect } from "react";
import { ReactComponent as Search } from "../assets/image/search.svg";
import { ReactComponent as Girl } from "../assets/image/animation1.svg";
import { ReactComponent as Updown } from "../assets/image/animation2.svg";

import { RxCaretLeft, RxCaretRight } from "react-icons/rx";
import { timeData } from "../assets/data/data";
import { Link } from "react-router-dom";
import FilterSection from "../components/filterSection";
import axios from "axios";
const Home = () => {
  const [showInputCategory, setShowInputCategory] = useState(false);
  const timeBoxContainerRef = useRef(null);
  const timeBoxRef = useRef(null);

  const [clientWidth, setClientWidth] = useState("");
  const [scrollLeft, setScrollLeft] = useState("");

  const handleScroll = (direction) => {
    if (timeBoxContainerRef.current) {
      setClientWidth(timeBoxContainerRef.current.clientWidth);
      setScrollLeft(timeBoxContainerRef.current.scrollLeft);

      const scrollTo =
        direction === "left"
          ? scrollLeft - clientWidth
          : scrollLeft + clientWidth;
      timeBoxContainerRef.current.scrollTo({
        left: scrollTo,
        behavior: "smooth",
      });
    }
  };
  return (
    <>
      <div className="flex justify-between pt-5 mb-3 items-end sm:w-4/5">
        <div className="sm:w-2/4">
          <div className="text-lg text-[#E56F2C] font-bold">
            Do Yoga. Be Healthy.
          </div>
          <div className="text-base pt-1 text-black text-[14px] font-bold">
            100+ online yoga classes.
          </div>
          <div className="text-base pt-1 text-black text-[14px] font-bold">
            Book a trial class at just Rs.50
          </div>

          <div className="relative mt-8 hidden md:block">
            <input
              placeholder="Explore all of yoga"
              className="border-2 border-[#E56F2C] rounded-full pl-10 pr-16 px-5 h-12 w-full"
              autoComplete="off"
              onClick={() => setShowInputCategory(true)}
            />
            <Link to="/explore">
              <button type="submit" className="absolute top-1 mt-2 left-3">
                <Search />
              </button>
            </Link>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <Girl />
          <Updown />
        </div>
      </div>
      <div className="w-full mb-5">
        {showInputCategory && (
          <FilterSection setShowInputCategory={setShowInputCategory} />
        )}
      </div>
      <div>
        <div className="text-[#E56F2C] text-lg pt-3 font-bold mb-3">
          What time do you want to do yoga?
        </div>
        <div className="flex w-full">
          <div
            className="bg-[#E56F2C] px-1 rounded-full"
            onClick={() => handleScroll("left")}
          >
            <RxCaretLeft className="text-white mt-1" />
          </div>
          <div className="flex overflow-hidden mx-1" ref={timeBoxContainerRef}>
            {timeData.map((item) => {
              return (
                <div
                  key={item.time}
                  className="px-4 text-nowrap text-[#FB7125]"
                  ref={timeBoxRef}
                >
                  {item.time}
                </div>
              );
            })}
          </div>
          <div
            className="bg-[#E56F2C] px-1 rounded-full"
            onClick={() => handleScroll("right")}
          >
            <RxCaretRight className="text-white mt-1" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
