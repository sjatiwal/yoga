import React from "react";
import InputCheck from "./inputCheck";
import {
  levelsData,
  sessionData,
  healthData,
  styleData,
  priceData,
  sortData,
} from "../assets/data/data";
import { ReactComponent as Close } from "../assets/image/close.svg";

const FilterSection = ({
  setShowInputCategory,
  selectedFilters,
  setSelectedFilters,
}) => {
  const handleFilterChange = (category, filters, isChecked) => {
    setSelectedFilters((prevFilters) => {
      console.log(prevFilters, "p");
      if (isChecked) {
        return {
          ...prevFilters,
          [category]: [...prevFilters[category], filters],
        };
      } else {
        return {
          ...prevFilters,
          [category]: prevFilters[category].filter((f) => f !== filters),
        };
      }
    });
  };

  const handleSearch = () => {
    setShowInputCategory(false);
  };
  return (
    <>
      <div className="hidden md:block my-3">
        <div
          className="flex justify-end cursor-pointer"
          onClick={() => setShowInputCategory(false)}
        >
          <Close />
        </div>
        <div className="flex my-2 justify-between w-11/12">
          <div>
            <InputCheck
              heading={"Levels"}
              data={levelsData}
              onFilterChange={(filters, isChecked) =>
                handleFilterChange("levels", filters, isChecked)
              }
              filterCheck={selectedFilters.levels}
            />
          </div>
          <div>
            <InputCheck
              heading={"Time"}
              data={sessionData}
              onFilterChange={(filters, isChecked) =>
                handleFilterChange("session", filters, isChecked)
              }
              filterCheck={selectedFilters.session}
            />
          </div>
          <div>
            <InputCheck
              heading={"Health Conditions"}
              data={healthData}
              onFilterChange={(filters, isChecked) =>
                handleFilterChange("health", filters, isChecked)
              }
              filterCheck={selectedFilters.health}
            />
          </div>
          <div>
            <InputCheck
              heading={"Style"}
              data={styleData}
              onFilterChange={(filters, isChecked) =>
                handleFilterChange("style", filters, isChecked)
              }
              filterCheck={selectedFilters.style}
            />
          </div>
          <div>
            <InputCheck
              heading={"Price"}
              data={priceData}
              onFilterChange={(filters, isChecked) =>
                handleFilterChange("price", filters, isChecked)
              }
              filterCheck={selectedFilters.price}
            />
          </div>
          <div>
            <InputCheck
              heading={"Time"}
              data={sortData}
              onFilterChange={(filters, isChecked) =>
                handleFilterChange("sort", filters, isChecked)
              }
              filterCheck={selectedFilters.sort}
            />
          </div>
        </div>
      </div>
      <div>
        <button
          className="bg-explorebgcolor py-3  px-8 rounded shadow-md font-semibold text-white text-sm cursor-pointer"
          onClick={handleSearch}
        >
          Search
        </button>
        <button
          className="text-[#E56F2C] bg-white ml-10 py-3 px-8 rounded shadow-md font-semibold text-sm cursor-pointer"
          onClick={() => setShowInputCategory(false)}
        >
          Close
        </button>
      </div>
    </>
  );
};

export default FilterSection;
