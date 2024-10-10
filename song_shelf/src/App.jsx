import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
// import AddSong from "./pages/AddSong";
// import EditSong from "./pages/EditSong";
// import SongList from "./pages/SongList";
import Footer from "./components/Footer";
import Header from "./components/Header"
import AddSong from "./pages/AddSong";
import EditSong from "./pages/EditSong";
import SongList from "./components/SongList";

const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header/>

        {/* Main content area */}
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/add-song" element={<AddSong/>} />
            <Route path="/song-list" element={<SongList />} />
            <Route path="/edit-song/:id" element={<EditSong />} /> Dynamic Route
          </Routes>
        </div>

        {/* Footer component - Sticky at the bottom */}
        <Footer />
      </div>
    </Router>
  );
};

export default App;
