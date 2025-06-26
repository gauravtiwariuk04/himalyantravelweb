// src/routes/AppRoute.js
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from '../page/Home';
import AboutPage from '../page/abouts';
import Task from '../page/Task';
import Settings from '../page/setting';
import Contact from '../page/contact';
import AllPackage from '../page/package';
import Gallery from '../page/gallery';
import Userhome from '../page/Userhome';
import BookingForm from '../page/details';
import BookNow from '../page/BookNow'; // Fixed import name (PascalCase)

function AppRoute() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/abouts" element={<AboutPage />} />
        <Route path="/task" element={<Task />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/package" element={<AllPackage />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/userhome" element={<Userhome />} />
        <Route path="/details" element={<BookingForm />} />
        <Route path="/details/:id" element={<BookingForm />} />
        <Route path="/booknow" element={<BookNow />} /> {/* Fixed: Removed extra slash and closing tag */}
         <Route path="/booknow/:id" element={<BookNow />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoute;