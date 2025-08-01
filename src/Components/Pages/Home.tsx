import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-90 grid place-items-center p-4 ">
      <section className="w-full max-w-2xl">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8 text-center">
          Manage Your Events
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Link
            to="/AddEvent"
            className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-all duration-200 border border-gray-100 hover:border-blue-100"
          >
            <h2 className="text-xl font-semibold text-gray-700 mb-2">
              Add Event
            </h2>
            <p className="text-gray-500">Create and schedule new events</p>
            <div className="mt-4 text-blue-500 font-medium">Get started →</div>
          </Link>

          <Link
            to="/ViewEvent"
            className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-all duration-200 border border-gray-100 hover:border-green-100"
          >
            <h2 className="text-xl font-semibold text-gray-700 mb-2">
              View Events
            </h2>
            <p className="text-gray-500">Browse and manage existing events</p>
            <div className="mt-4 text-green-500 font-medium">View all →</div>
          </Link>
          <Link
            to="/ViewEvent"
            className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-all duration-200 border border-gray-100 hover:border-green-100"
          >
            <h2 className="text-xl font-semibold text-gray-700 mb-2">
              Update Events
            </h2>
            <p className="text-gray-500">Update and manage existing events</p>
            <div className="mt-4 text-purple-500 font-medium">View all →</div>
          </Link>
          <Link
            to="/events"
            className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-all duration-200 border border-gray-100 hover:border-green-100"
          >
            <h2 className="text-xl font-semibold text-gray-700 mb-2">
              Delete Events
            </h2>
            <p className="text-gray-500">Delete existing events</p>
            <div className="mt-4 text-red-500 font-medium">View all →</div>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
