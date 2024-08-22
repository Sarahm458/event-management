import React from 'react';
import { Routes, Route } from 'react-router-dom';
import EventForm from "./Pages/EventForm";
import EventList from "./Pages/EventList";
import EventDetails from "./Pages/EventDetails";
import "./App.css";
import NavBar from './Components/NavBar';
import Footer from './Components/Footer';

const App = () => {
  return (
    <>
      <div className="background min-h-screen flex flex-col">
        <NavBar />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<EventList />} />
            <Route path="/create" element={<EventForm />} />
            <Route path="/event/:id" element={<EventDetails />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default App;
