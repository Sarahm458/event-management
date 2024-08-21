import React from 'react';
import { useParams } from 'react-router-dom';

const EventDetail = () => {
  const { id } = useParams();
  const events = JSON.parse(localStorage.getItem('events')) || [];
  const event = events[id];

  return (
    <div className="flex items-center justify-center p-6 bg-gradient-to-r from-green-400 to-green-600 rounded-lg shadow-lg mx-4 my-4 md:mx-[6rem] md:my-8 lg:mx-[14rem] lg:mb-8">
      <div >
        {event.image && <img src={event.image} alt={event.eventName} className="w-full h-auto mt-4 rounded mb-4 mx-auto" />}
        <h1 className="text-white text-2xl mb-4">{event.eventName}</h1>
        <p className="text-white mb-2"><strong>Date:</strong> {event.date}</p>
        <p className="text-white mb-2"><strong>Location:</strong> {event.location}</p>
        <p className="text-white"><strong>Description:</strong> {event.description}</p>
        <button className="text-green-600 bg-white px-4 py-2 rounded mt-4">Register</button>
      </div>
    </div>
  );
};

export default EventDetail;
