import './App.css'
import Navbar from "./components/Navbar"
import HomePage from "./pages/HomePage"
import GuestList from './pages/GuestList'
import EventList from './pages/EventList'
import CreateGuest from './pages/CreateGuest'
import CreateEvent from './pages/CreateEvent'
import { Route, Routes } from 'react-router-dom';

function App() {

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={ <HomePage /> } />
        <Route path="/guests" element={ <GuestList /> } />
        <Route path="/guests/:guestId" element={ <CreateGuest /> } />
        <Route path="/events" element={ <EventList /> } />
        <Route path="/events/create" element={ <CreateEvent /> } />

      </Routes>


    </ div>
  )
}

export default App
