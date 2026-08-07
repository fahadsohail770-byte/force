import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Army from "./pages/Army";
import Navy from "./pages/Navy";
import AirForce from "./pages/AirForce";
import ISSB from "./pages/ISSB";
import InitialTest from "./pages/InitialTest";
import PastPapers from "./pages/PastPapers";
import Announcements from "./pages/Announcements";
import AdminPanel from "./components/AdminPanel";


function NotFound() {
  return (
    <div className="max-w-2xl mx-auto px-5 py-24 text-center">
      <h1 className="font-display uppercase text-3xl font-bold text-forest">Page Not Found</h1>
      <p className="mt-3 text-ink/70">This dossier entry doesn't exist. Use the navigation above to find your way.</p>
    </div>
  );
}

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/army" element={<Army />} />
          <Route path="/navy" element={<Navy />} />
          <Route path="/air-force" element={<AirForce />} />
          <Route path="/issb" element={<ISSB />} />
          <Route path="/initial-test" element={<InitialTest />} />
          <Route path="/past-papers" element={<PastPapers />} />
          <Route path="/announcements" element={<Announcements />} />
          <Route path="/Adminpanel" element={<AdminPanel />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
