import React, { createContext, useContext, useState } from "react";

type EventData = {
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
};

type EventContextType = {
  events: EventData[];
  addEvent: (event: EventData) => void;
};

const EventContext = createContext<EventContextType | undefined>(undefined);

export const EventProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [events, setEvents] = useState<EventData[]>([]);

  const addEvent = (event: EventData) => {
    setEvents((prev) => [...prev, event]);
  };

  return (
    <EventContext.Provider value={{ events, addEvent }}>
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
