import React, { useState } from "react";
import { ReactComponent as Filter } from "../assets/image/filter.svg";
import FilterSection from "../components/filterSection";
import { ReactComponent as ExploreSearch } from "../assets/image/exploreSearch.svg";

const Explore = () => {
  const [showInputCategory, setShowInputCategory] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState({
    levels: [],
    session: [],
    health: [],
    style: [],
    price: [],
    sort: [],
  });

  return (
    <div>
      <div className="flex w-4/5 justify-between items-center mt-10">
        <div className="relative w-4/5 mt-10 mb-4">
          <input
            className="pl-10 w-full border-2 border-gray-300 h-12 px-5 pr-16 rounded-full text-sm"
            placeholder="Find Your yoga practice"
          />
          <div className="absolute top-1 left-1 mt-2 ml-2">
            <ExploreSearch />
          </div>
        </div>
        <div
          className="flex items-center mt-5"
          onClick={() => setShowInputCategory(!showInputCategory)}
        >
          <div>
            <Filter />
          </div>
          <div className="pl-2 font-semibold text-gray-600"> Filter</div>
        </div>
      </div>
      <div className="mb-4">
        {showInputCategory && (
          <FilterSection
            setShowInputCategory={setShowInputCategory}
            selectedFilters={selectedFilters}
            setSelectedFilters={setSelectedFilters}
          />
        )}
      </div>
      <div className="flex">
        {selectedFilters.levels.map((item) => {
          return <div key={item}>"{item}",</div>;
        })}
        {selectedFilters.session.map((item) => {
          return <div key={item}>"{item}",</div>;
        })}
        {selectedFilters.health.map((item) => {
          return <div key={item}>"{item}",</div>;
        })}
        {selectedFilters.style.map((item) => {
          return <div key={item}>"{item}",</div>;
        })}
        {selectedFilters.price.map((item) => {
          return <div key={item}>"{item}",</div>;
        })}
      </div>
      <div>
        <button className="w-44 py-3 bg-explorebgcolor whitespace-nowrap my-2 px-8 rounded shadow-md text-center font-semibold text-white text-sm cursor-pointer">
          Get link to share
        </button>
      </div>
    </div>
  );
};

export default Explore;
