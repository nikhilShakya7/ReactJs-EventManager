import React from "react";
import { useEvents } from "../../Context/EventContext";
import {
  CalendarCheck2,
  CalendarClock,
  CalendarPlus,
  Info,
  MapPin,
  Trash,
} from "lucide-react";
import { Link } from "react-router-dom";

const ViewEvents: React.FC = () => {
  const { events, deleteEvent, toggleEventCompletion } = useEvents();
  const handleDelete = (id: string) => {
    if (confirm("Are you sure you want to delete this event?")) {
      deleteEvent(id);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-4 sm:p-6">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800"> Events</h2>
        <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
          {events.length} {events.length === 1 ? "Event" : "Events"}
        </span>
        <Link to="/AddEvent">
          <button className="flex items-center gap-2 px-3 py-1.5 text-sm font-semibold text-white bg-blue-500 hover:bg-blue-600 cursor-pointer rounded-md shadow-md">
            <CalendarPlus />
            Add More
          </button>
        </Link>
      </div>

      {events.length === 0 ? (
        <div className="text-center py-12">
          <div className="mx-auto w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mb-4">
            <CalendarCheck2 className="text-green-600 h-30 w-30" />
          </div>
          <h3 className="text-xl font-medium text-gray-700 mb-2">
            No events scheduled
          </h3>
          <p className="text-gray-500 max-w-md mx-auto">
            Get started by adding your first event
          </p>
          <Link to="/AddEvent">
            <button className="px-2 py-2 mt-6 bg-blue-600 hover:bg-blue-700 cursor-pointer text-white font-semibold rounded-lg shadow-md transition duration-300">
              Add Events
            </button>
          </Link>
        </div>
      ) : (
        <div className="space-y-4">
          {events.map((event) => (
            <div
              key={event.id}
              className={`bg-white rounded-l-lg shadow-sm overflow-hidden border-l-6 ${
                event.isCompleted
                  ? "border-green-600 bg-green-600"
                  : "border-red-400 bg-red-400"
              }`}
            >
              <div className="p-6">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4">
                  <h3 className="text-xl font-bold text-gray-800">
                    {event.title}
                  </h3>
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => toggleEventCompletion(event.id)}
                      className={`px-3 py-1 text-xs font-medium rounded-full ${
                        event.isCompleted
                          ? "bg-green-100 text-green-800"
                          : "bg-yellow-100 text-yellow-800"
                      }`}
                    >
                      {event.isCompleted ? "Completed" : "Mark Complete"}
                    </button>
                    <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                      {new Date(event.date).toLocaleDateString("en-US", {
                        weekday: "short",
                        month: "short",
                        day: "numeric",
                      })}
                    </span>
                    <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                      {event.time}
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                  <div className="flex items-start space-x-2">
                    <MapPin className="text-gray-600 h-5 w-5" />
                    <div>
                      <p className="text-sm text-gray-500">Location</p>
                      <p className="font-medium text-gray-700">
                        {event.location}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-2">
                    <CalendarClock className="text-gray-600 h-5 w-5" />{" "}
                    <div>
                      <p className="text-sm text-gray-500">Date & Time</p>
                      <p className="font-medium text-gray-700 text-center">
                        {new Date(event.date).toLocaleDateString()} at{" "}
                        {event.time}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-2">
                    <Info className="h-5 w-5 text-gray-500" />

                    <p
                      className={`font-medium ${
                        event.isCompleted ? "text-green-600" : "text-black"
                      }`}
                    >
                      {event.isCompleted ? "Completed" : "Upcoming"}
                    </p>
                  </div>
                </div>

                {event.description && (
                  <div className="mt-4 pt-4 border-t border-gray-100">
                    <p className="text-sm text-gray-500 mb-2">Description</p>
                    <p className="text-gray-700">{event.description}</p>
                    <div className="flex justify-end gap-4">
                      <Link to={`/UpdateEventForm/${event.id}`}>
                        <button className="px-4 py-2 text-sm font-semibold text-white bg-green-500 hover:bg-green-600 cursor-pointer rounded-md ">
                          Update
                        </button>
                      </Link>

                      <button
                        onClick={() => handleDelete(event.id)}
                        className="flex items-center gap-2 px-4 py-2 text-sm font-semibold text-white bg-red-500 hover:bg-red-600 cursor-pointer rounded-md shadow-md"
                      >
                        <Trash className="w-4 h-4" />
                        Delete
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ViewEvents;
