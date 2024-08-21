import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const EventList = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const storedEvents = JSON.parse(localStorage.getItem('events')) || [];
    setEvents(storedEvents);
  }, []);

  return (
    <div className="p-6 bg-gradient-to-r from-green-400 to-green-600 rounded-lg shadow-lg mx-4 my-4 md:mx-[6rem] md:mt-8 lg:mx-[14rem]">
      <h1 className="text-white text-2xl mb-4">Event List</h1>
      <ul className="space-y-2">
        {events.map((event, index) => (
          <li key={index} className="bg-white p-4 rounded shadow">
            <Link to={`/event/${index}`} className="text-green-700 hover:underline">{event.eventName}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EventList;
