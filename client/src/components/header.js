import React, { useState } from "react";
import { ReactComponent as Logo } from "../assets/image/logo.svg";
import { ReactComponent as DownArrow } from "../assets/image/downArrow.svg";
import { ReactComponent as Search } from "../assets/image/search.svg";
import Categories from "../views/categories";
import Login from "../views/login";

const Header = () => {
  const [showCategory, setShowCategory] = useState(false);
  const [showLoginSignUp, setShowLoginSignUp] = useState(false);

  return (
    <div className="flex flex-row items-center justify-between">
      <div className="md:hidden">
        <Search />
      </div>
      <div className="flex flex-row items-center ">
        <div>
          <Logo />
        </div>
        <div className="hidden md:block">
          <button
            onClick={() => setShowCategory(true)}
            className="flex flex-row items-center ml-4 px-4 justify-between rounded shadow-md bg-explorebgcolor text-white text-sm font-semibold cursor-pointer"
          >
            <div>Explore</div>
            <div className="pt-3 pl-3">
              <DownArrow />
            </div>
          </button>
        </div>
      </div>
      <button
        className="hover:underline font-semibold cursor-pointer text-[#E56F2C]"
        onClick={() => setShowLoginSignUp(true)}
      >
        Login
      </button>
      {showCategory && <Categories setShowCategory={setShowCategory} />}
      {showLoginSignUp && <Login setShowLoginSignUp={setShowLoginSignUp} />}
    </div>
  );
};

export default Header;
