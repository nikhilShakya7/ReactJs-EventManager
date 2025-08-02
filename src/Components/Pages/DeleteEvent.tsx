import React from "react";
import { useEvents } from "../../Context/EventContext";
import {
  CalendarCheck2,
  CalendarClock,
  Info,
  MapPin,
  Trash,
  CheckCircle,
} from "lucide-react";
import { Link } from "react-router-dom";

const DeleteEvent: React.FC = () => {
  const { events, deleteEvent } = useEvents();

  const handleDelete = (id: string) => {
    if (confirm("Are you sure you want to delete this event?")) {
      deleteEvent(id);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-4 sm:p-6">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800">Events</h2>
        <div className="flex items-center gap-4">
          <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
            {events.length} {events.length === 1 ? "Event" : "Events"}
          </span>
        </div>
      </div>

      {events.length === 0 ? (
        <div className="text-center py-12">
          <div className="mx-auto w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mb-4">
            <CalendarCheck2 className="text-green-600 h-12 w-12" />
          </div>
          <h3 className="text-xl font-medium text-gray-700 mb-2">
            No events scheduled
          </h3>
          <p className="text-gray-500 max-w-md mx-auto">
            Get started by adding your first event
          </p>
          <Link to="/AddEvent">
            <button className="px-4 py-2 mt-6 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-md transition duration-300">
              Add New Event
            </button>
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12">
          {events.map((event) => (
            <div
              key={event.id}
              className={`bg-white rounded-xl shadow-sm hover:shadow-md overflow-hidden border-l-4 ${
                event.isCompleted
                  ? "border-green-500 bg-green-50"
                  : "border-red-500"
              } transition-all duration-200`}
            >
              <div className="p-5">
                <div className="flex flex-col gap-3 mb-4">
                  <div className="flex justify-between items-start gap-2">
                    <h3
                      className={`text-lg font-bold ${
                        event.isCompleted ? "text-gray-600" : "text-gray-800"
                      } line-clamp-2`}
                    >
                      {event.title}
                      {event.isCompleted && (
                        <span className="ml-2 text-green-600 text-xs font-normal flex items-center">
                          <CheckCircle className="w-3 h-3 mr-1" /> Completed
                        </span>
                      )}
                    </h3>
                    <button
                      onClick={() => handleDelete(event.id)}
                      className="p-2 text-gray-500 hover:text-red-500 transition-colors"
                      aria-label="Delete event"
                    >
                      <Trash className="w-5 h-5" />
                    </button>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full flex items-center">
                      <CalendarClock className="mr-1 w-3 h-3" />
                      {new Date(event.date).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </span>
                    <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                      {event.time}
                    </span>
                    <span
                      className={`text-xs font-medium px-2.5 py-0.5 rounded-l-full ${
                        event.isCompleted
                          ? "bg-green-100 text-green-800"
                          : "bg-purple-100 text-purple-800"
                      }`}
                    >
                      {event.isCompleted ? "Completed" : "Upcoming"}
                    </span>
                  </div>
                </div>

                <div className="space-y-3 mb-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="text-gray-500 h-5 w-5 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-xs text-gray-500">Location</p>
                      <p className="text-sm font-medium text-gray-700">
                        {event.location}
                      </p>
                    </div>
                  </div>

                  {event.description && (
                    <div className="flex items-start gap-3">
                      <Info className="text-gray-500 h-5 w-5 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-xs text-gray-500">Description</p>
                        <p className="text-sm text-gray-700 line-clamp-3">
                          {event.description}
                        </p>
                      </div>
                    </div>
                  )}

                  <div className="flex justify-end gap-4 mt-6">
                    <button
                      onClick={() => handleDelete(event.id)}
                      className="flex items-center justify-center gap-2 px-4 py-2 text-sm font-semibold text-white bg-red-500 hover:bg-red-600 rounded-md shadow-md"
                    >
                      <Trash className="w-4 h-4" />
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default DeleteEvent;
