import React from "react";
import { ReactComponent as Clock } from "../assets/image/clock.svg";
const Yogacard = ({ yogaCourses }) => {
  return (
    <div className="flex">
      {yogaCourses.map((item) => {
        return (
          <div
            key={item.heading}
            className="bg-white p-4 rounded-md cursor-pointer w-[384px] h-auto mr-4 "
          >
            <div className="flex justify-between">
              <div>
                <div className="h-[50px] font-[420]">{item.heading}</div>
                <div className="h-[20px] text-gray-500 text-xs">
                  for {item.level}
                </div>
                <div className="h-[20px] text-gray-500 text-xs">
                  by {item.teacher}
                </div>
                <div className="h-[20px] text-gray-500 text-xs">
                  {item.date}
                </div>
              </div>
              <div>
                <img alt="uploading soon" />
                <div className="h-[20px] text-gray-500 text-xs">
                  {item.ratings}
                </div>
                <div className="h-[20px] text-gray-500 text-xs">
                  {item.streams}
                </div>
              </div>
            </div>
            <div className="flex justify-between">
              <div>
                <div className="flex justify-between items-center">
                  <div className="text-green-500">{item.time}</div>
                  <div>
                    <Clock />
                  </div>
                  <div className="text-gray-500 text-xs">{item.duration}</div>
                </div>

                <div className="py-2">{item.fee}</div>
              </div>
              <div className="w-[96px]">
                <button className="py-3 px-8 rounded shadow-md font-semibold text-white text-sm cursor-pointer bg-explorebgcolor">
                  join
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Yogacard;
