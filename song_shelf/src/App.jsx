import React from "react";
import Home from "./pages/Home";
import EditSong from "./pages/EditSong";
import AddSong from "./pages/AddSong";

function App() {
  return (
    <div>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <button class="bg-cyan-500 hover:bg-cyan-600 ...">Subscribe</button>
      <Home/>
      <EditSong/>
      <AddSong/>
    </div>
  );
}

export default App;
