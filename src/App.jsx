import { BrowserRouter, Routes, Route } from "react-router-dom";

import Doctors from "./Doctors";
import SingleDoctor from "./SingleDoctor";
import Contact from "./Contact";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Doctors />} />

        <Route path="/doctors" element={<Doctors />} />
        <Route path="/doctors/:id" element={<SingleDoctor />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;