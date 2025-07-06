import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Appointments from './pages/Appointments';
import DetailAppointment from './pages/DetailAppointment';
import NotFound from './pages/NotFound';
import Navbar from './components/Navbar.jsx';
import './style/App.css';
function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/appointments" element={<Appointments />} />
        <Route path="/appointment/:id" element={<DetailAppointment />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;