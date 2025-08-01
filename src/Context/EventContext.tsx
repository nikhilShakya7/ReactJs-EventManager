import React, { createContext, useContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";

type EventData = {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
};

type EventInput = Omit<EventData, "id">;

type EventContextType = {
  events: EventData[];
  addEvent: (event: EventInput) => void;
  deleteEvent: (id: string) => void;
};

const EventContext = createContext<EventContextType | undefined>(undefined);

export const EventProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [events, setEvents] = useState<EventData[]>([]);

  const addEvent = (event: EventInput) => {
    const newEvent: EventData = { ...event, id: uuidv4() };
    setEvents((prev) => [...prev, newEvent]);
  };

  const deleteEvent = (id: string) => {
    setEvents((prev) => prev.filter((event) => event.id !== id));
  };

  return (
    <EventContext.Provider value={{ events, addEvent, deleteEvent }}>
      {children}
    </EventContext.Provider>
  );
};

export const useEvents = () => {
  const context = useContext(EventContext);
  if (!context)
    throw new Error("useEvents must be used within an EventProvider");
  return context;
};
