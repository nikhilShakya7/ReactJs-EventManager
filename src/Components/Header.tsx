import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      {" "}
      <header className="bg-white shadow-md py-4 px-12">
        <Link to="/">
          <h1 className="text-2xl font-bold text-black hover:text-gray-700">
            Event Manager
          </h1>
        </Link>
      </header>
    </div>
  );
};

export default Header;
