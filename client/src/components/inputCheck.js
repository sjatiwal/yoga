import React from "react";

const InputCheck = ({ heading, data, onFilterChange, filterCheck }) => {
  const handleCheckboxChange = (event) => {
    const { value, checked } = event.target;
    onFilterChange(value, checked);
  };
  return (
    <div>
      <div className="flex justify-between font-semibold text-gray-800 pb-3 cursor-pointer">
        {heading}
      </div>
      {data.map((item) => {
        return (
          <div key={item.name} className="flex items-center mb-5">
            <input
              type="checkbox"
              value={item.value}
              onChange={handleCheckboxChange}
              checked={filterCheck.includes(item.value)}
              className="px-2 py-1 w-5 h-5 cursor-pointer rounded-sm border border-gray-600 ticked checked:border-transparent checked:bg-[#FB7125]"
            />
            <div className="text-[#787878] text-sm ml-2">{item.name}</div>
          </div>
        );
      })}
    </div>
  );
};

export default InputCheck;
