import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useEvents } from "../../Context/EventContext";

const UpdateEvent = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { events, updateEvent } = useEvents();
  const eventToEdit = events.find((event) => event.id === id);

  const [eventData, setEventData] = useState(
    eventToEdit || {
      id: "",
      title: "",
      date: "",
      time: "",
      location: "",
      description: "",
    }
  );

  useEffect(() => {
    if (eventToEdit) {
      setEventData(eventToEdit);
    }
  }, [eventToEdit]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setEventData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!eventData.id) return; // Add validation

    updateEvent(eventData);
    alert("Event updated successfully!");
    navigate("/ViewEvent"); // Fixed typo in path (was "/VeweEvent")
  };

  if (!eventToEdit) {
    return (
      <div className="max-w-2xl mx-auto p-6 text-center">
        <p className="text-xl text-gray-700">Event not found</p>
        <button
          onClick={() => navigate(-1)}
          className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
        >
          Go Back
        </button>
      </div>
    );
  }

  return (
    <section className="max-w-2xl mx-auto mt-10 p-6 bg-white shadow-xl rounded-2xl">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Update Event</h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {[
            { id: "title", label: "Event Title", type: "text" },
            { id: "date", label: "Date", type: "date" },
            { id: "time", label: "Time", type: "time" },
            { id: "location", label: "Location", type: "text" },
          ].map(({ id, label, type }) => (
            <div key={id}>
              <label
                htmlFor={id}
                className="block text-sm font-medium text-gray-700"
              >
                {label}
              </label>
              <input
                type={type}
                id={id}
                name={id}
                value={eventData[id as keyof typeof eventData] || ""}
                onChange={handleChange}
                required
                className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2"
              />
            </div>
          ))}
        </div>

        <div>
          <label
            htmlFor="description"
            className="block text-sm font-medium text-gray-700"
          >
            Description
          </label>
          <textarea
            id="description"
            name="description"
            rows={4}
            value={eventData.description || ""}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2"
          />
        </div>

        <div className="flex justify-end gap-3">
          <button
            type="button"
            onClick={() => navigate(-1)}
            className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-100"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-4 py-2 text-sm font-medium text-white bg-blue-600 border border-transparent rounded-md shadow-sm hover:bg-blue-700"
          >
            Update Event
          </button>
        </div>
      </form>
    </section>
  );
};

export default UpdateEvent;
