import React, { useState } from "react";
import { ReactComponent as SideArrow } from "../assets/image/sideArrow.svg";
import {
  exploreData,
  healthData,
  levelsData,
  priceData,
  sessionData,
  styleData,
} from "../assets/data/data";

const Categories = ({ setShowCategory }) => {
  const [showSubCategories, setShowSubCategories] = useState(1);

  return (
    <div
      className="absolute top-0 w-full flex justify-center items-center bg-slate-50/70 z-10  min-h-screen"
      onClick={(e) => [setShowCategory(false), e.stopPropagation()]}
    >
      <div
        className="bg-white flex  md:w-2/4 p-5 px-8 h-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="w-48">
          {exploreData.map((item, index) => {
            return (
              <div
                key={item.name}
                className="flex items-center justify-between px-5 pb-4 mb-4 shadow-md hover:bg-[#D4D4D4] rounded"
                onMouseEnter={() => setShowSubCategories(index + 1)}
              >
                <div className="pt-3 pr-5">{item.name}</div>
                <SideArrow className="rotate-[-90deg]" />
              </div>
            );
          })}
        </div>
        <div className="ml-10 w-full">
          {showSubCategories === 1 &&
            levelsData.map((item) => {
              return (
                <div
                  key={item.name}
                  className="flex items-center justify-between px-5 mb-4 pb-4 rounded shadow-md hover:bg-[#D4D4D4]"
                >
                  <div className="pt-3 pr-5"> {item.name}</div>
                </div>
              );
            })}
          {showSubCategories === 2 &&
            priceData.map((item) => {
              return (
                <div
                  key={item.name}
                  className="flex items-center justify-between px-5 mb-4 pb-4 rounded shadow-md hover:bg-[#D4D4D4]"
                >
                  <div className="pt-3 pr-5"> {item.name}</div>
                </div>
              );
            })}
          {showSubCategories === 3 &&
            healthData.map((item) => {
              return (
                <div
                  key={item.name}
                  className="flex items-center justify-between px-5 mb-4 pb-4 rounded shadow-md hover:bg-[#D4D4D4]"
                >
                  <div className="pt-3 pr-5"> {item.name}</div>
                </div>
              );
            })}
          {showSubCategories === 4 &&
            styleData.map((item) => {
              return (
                <div
                  key={item.name}
                  className="flex items-center justify-between px-5 mb-4 pb-4 rounded shadow-md hover:bg-[#D4D4D4]"
                >
                  <div className="pt-3 pr-5"> {item.name}</div>
                </div>
              );
            })}
          {showSubCategories === 5 &&
            sessionData.map((item) => {
              return (
                <div
                  key={item.name}
                  className="flex items-center justify-between px-5 mb-4 pb-4 rounded shadow-md hover:bg-[#D4D4D4]"
                >
                  <div className="pt-3 pr-5"> {item.name}</div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Categories;
