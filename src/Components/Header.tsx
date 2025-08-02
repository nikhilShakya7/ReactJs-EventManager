import { CalendarClockIcon } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      {" "}
      <header className="bg-white shadow-md py-4 px-12 fixed w-full top-0 ">
        <Link to="/">
          <h1 className="text-3xl md:text-4xl font-bold   flex items-center justify-center sm:justify-start">
            <CalendarClockIcon className="w-8 h-8 mr-3 text-blue-600" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-800 hover:from-blue-600 hover:to-blue-950">
              Event Manager
            </span>
          </h1>
        </Link>
      </header>
    </div>
  );
};

export default Header;
