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
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">Events</h2>
        <div className="flex items-center gap-3 w-full sm:w-auto">
          <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full whitespace-nowrap">
            {events.length} {events.length === 1 ? "Event" : "Events"}
          </span>
          <Link to="/AddEvent" className="w-full sm:w-auto">
            <button className="flex items-center justify-center gap-2 px-3 py-1.5 text-sm font-semibold text-white bg-blue-500 hover:bg-blue-600 rounded-md shadow-md w-full sm:w-auto">
              <CalendarPlus className="w-4 h-4" />
              <span>Add Event</span>
            </button>
          </Link>
        </div>
      </div>

      {events.length === 0 ? (
        <div className="text-center py-12">
          <div className="mx-auto w-20 h-20 sm:w-24 sm:h-24 bg-gray-100 rounded-full flex items-center justify-center mb-4">
            <CalendarCheck2 className="text-green-600 h-10 w-10 sm:h-12 sm:w-12" />
          </div>
          <h3 className="text-lg sm:text-xl font-medium text-gray-700 mb-2">
            No events scheduled
          </h3>
          <p className="text-gray-500 max-w-md mx-auto text-sm sm:text-base">
            Get started by adding your first event
          </p>
          <Link to="/AddEvent" className="inline-block mt-6">
            <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-md text-sm sm:text-base">
              Add Events
            </button>
          </Link>
        </div>
      ) : (
        <div className="space-y-4">
          {events.map((event) => (
            <div
              key={event.id}
              className={`bg-white rounded-lg shadow-sm overflow-hidden border-l-4 ${
                event.isCompleted ? "border-green-500" : "border-red-500"
              }`}
            >
              <div className="p-4 sm:p-6">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-4">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-800 line-clamp-2">
                    {event.title}
                  </h3>
                  <div className="flex flex-wrap gap-2 sm:flex-nowrap">
                    <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2 py-1 rounded-full flex items-center ">
                      <CalendarClock className="mr-1 w-3 h-3" />
                      {new Date(event.date).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                      })}
                    </span>
                    <span className="bg-green-100 text-green-800 text-xs font-medium px-2 py-1 rounded-full whitespace-nowrap">
                      {event.time}
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="text-gray-600 h-5 w-5 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-xs sm:text-sm text-gray-500">
                        Location
                      </p>
                      <p className="text-sm sm:text-base font-medium text-gray-700">
                        {event.location}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CalendarClock className="text-gray-600 h-5 w-5 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-xs sm:text-sm text-gray-500">
                        Date & Time
                      </p>
                      <p className="text-sm sm:text-base font-medium text-gray-700">
                        {new Date(event.date).toLocaleDateString()} at{" "}
                        {event.time}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Info className="h-5 w-5 text-gray-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-xs sm:text-sm text-gray-500">Status</p>
                      <p
                        className={`text-sm sm:text-base font-medium ${
                          event.isCompleted ? "text-green-600" : "text-gray-800"
                        }`}
                      >
                        {event.isCompleted ? "Completed" : "Upcoming"}
                      </p>
                    </div>
                  </div>
                </div>

                {event.description && (
                  <div className="mt-4 pt-4 border-t border-gray-100">
                    <div className="flex items-start gap-3 mb-4">
                      <Info className="h-5 w-5 text-gray-500 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-xs sm:text-sm text-gray-500 mb-1">
                          Description
                        </p>
                        <p className="text-sm sm:text-base text-gray-700 line-clamp-3">
                          {event.description}
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row justify-end gap-3">
                      <button
                        onClick={() => toggleEventCompletion(event.id)}
                        className={`px-3 py-2 text-xs sm:text-sm font-medium rounded-md 
                           ${
                             event.isCompleted
                               ? "bg-green-100 text-green-800 hover:bg-green-200"
                               : "bg-yellow-100 text-yellow-800 hover:bg-yellow-200"
                           }`}
                      >
                        {event.isCompleted
                          ? "Mark Incomplete"
                          : "Mark Complete"}
                      </button>

                      <Link
                        to={`/UpdateEventForm/${event.id}`}
                        className="w-full sm:w-auto"
                      >
                        <button className="w-full px-4 py-2 text-xs sm:text-sm font-medium text-white bg-green-500 hover:bg-green-600 rounded-md shadow-sm">
                          Update
                        </button>
                      </Link>

                      <button
                        onClick={() => handleDelete(event.id)}
                        className="flex items-center justify-center gap-2 px-4 py-2 text-xs sm:text-sm font-medium text-white bg-red-500 hover:bg-red-600 rounded-md shadow-sm"
                      >
                        <Trash className="w-3 h-3 sm:w-4 sm:h-4" />
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
