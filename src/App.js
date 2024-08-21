import React from 'react';
import { Routes, Route} from 'react-router-dom';
import EventForm from "./Pages/EventForm";
import EventList from "./Pages/EventList";
import EventDetails from "./Pages/EventDetails";
import "./App.css"
import NavBar from './Components/NavBar';

const App = () => {
  return (
    <div className="background">
        <Routes>
           <Route path='/' element={<NavBar/>}>
           <Route path="/" element={<EventList />} />
           <Route path="/create" element={<EventForm />} />
           <Route path="/event/:id" element={<EventDetails />} />
          </Route>
        </Routes>
    </div>
  );
};

export default App;

