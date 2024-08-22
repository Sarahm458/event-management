import React from 'react';
import { useParams } from 'react-router-dom';

const EventDetail = () => {
  const { id } = useParams();
  const events = JSON.parse(localStorage.getItem('events')) || [];
  const event = events[id];

  return (
    <div className="flex flex-col md:flex-row items-center px-6 pb-6 pt-2 bg-gradient-to-r from-green-400 to-green-600 rounded-lg shadow-lg mx-4 my-8 md:mx-[6rem] md:my-8 lg:mx-[15rem] lg:mb-8 mt-8">
      {event.image && (
        <div className="w-full md:w-1/2 overflow-hidden">
          <img
            src={event.image}
            alt={event.eventName}
            className="w-full h-full object-cover mt-4 rounded mb-4 mx-auto"
          />
        </div>
      )}
      <div className="w-full md:w-1/2 p-4">
        <h1 className="text-white text-2xl mb-4">{event.eventName}</h1>
        <p className="text-white mb-2"><strong>Date:</strong> {event.date}</p>
        <p className="text-white mb-2"><strong>Time:</strong> {event.time}</p>
        <p className="text-white mb-2"><strong>Location:</strong> {event.location}</p>
        <p className="text-white"><strong>Description:</strong> {event.description}</p>
        <button className="text-green-600 bg-white px-4 py-2 rounded mt-4">Register</button>
      </div>
    </div>
  );
};

export default EventDetail;
