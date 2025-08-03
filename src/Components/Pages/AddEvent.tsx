import React, { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { useEvents } from "../../Context/EventContext";
import { v4 as uuidv4 } from "uuid";
import toast, { Toaster } from "react-hot-toast";

type EventData = {
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  isCompleted?: boolean;
};

const AddEvent: React.FC = () => {
  const navigate = useNavigate();
  const { addEvent } = useEvents();
  const [events, setEvents] = useState<EventData[]>([]);
  console.log(events);

  const [eventData, setEventData] = useState<EventData>({
    title: "",
    date: "",
    time: "",
    location: "",
    description: "",
    isCompleted: false,
  });

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name, value } = e.target;
      setEventData((prev) => ({ ...prev, [name]: value }));
    },
    []
  );

  const handleSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      const eventWithId = { ...eventData, id: uuidv4(), isCompleted: false };
      addEvent(eventWithId);
      setEvents((prev) => [...prev, eventWithId]);
      console.log("Event submitted:", eventWithId);
      navigate("/ViewEvent");
      toast.success("Event added successfully!", { position: "top-right" });
    },
    [eventData, addEvent, navigate]
  );

  return (
    <section className="max-w-2xl mx-auto mt-10 p-6 bg-white shadow-xl rounded-2xl">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Add New Event</h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {[
            { id: "title", label: "Event Title", type: "text" },
            {
              id: "date",
              label: "Date",
              type: "date",
              min: new Date().toISOString().split("T")[0],
            },
            { id: "time", label: "Time", type: "time" },
            { id: "location", label: "Location", type: "text" },
          ].map(({ id, label, type, min }) => (
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
                value={String(eventData[id as keyof EventData])}
                onChange={handleChange}
                required
                min={min}
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
            value={eventData.description}
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
            Create Event
          </button>
        </div>
      </form>
    </section>
  );
};

export default AddEvent;
