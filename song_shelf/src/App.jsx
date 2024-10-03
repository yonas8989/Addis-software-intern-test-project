import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import AddSong from "./pages/AddSong";
import EditSong from "./pages/EditSong";
import SongList from "./pages/SongList";
import Footer from "./components/Footer";

const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">


        {/* Main content area */}
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/add-song" element={<AddSong />} />
            <Route path="/song-list" element={<SongList />} />
            <Route path="/edit-song" element={<EditSong />} />
          </Routes>
        </div>

        {/* Footer component - Sticky at the bottom */}
        <Footer />

      </div>
    </Router>
  );
};

export default App;






