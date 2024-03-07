import React from "react";

function Navbar() {
  return (
    <div className="bg-primary text-primary p-2 flex justify-between">
      <h1 className="font-extrabold p-2">v-apps</h1>
      <button className="bg-primary hover:bg-secondary duration-300 p-2 rounded">
        Change Theme
      </button>
    </div>
  );
}

export default Navbar;
