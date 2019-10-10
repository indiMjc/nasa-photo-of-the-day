import React, { useState } from "react";
import Dates from "./Dates";

const Menu = props => {
  const [vis, setVis] = useState("not-visible");

  return (
    <>
      <button
        onClick={() => setVis("visible")}
        className={{ vis } === "visible" ? "not-visible" : "visible"}
        id="menu"
      >
        Menu
      </button>
      <button
        onClick={() => setVis("not-visible")}
        className={vis}
        id="hidden-button"
      >
        Close
      </button>
      {/* <DropDown visiblity={vis} /> */}
      <div className={vis} id="drop-down">
        <Dates states={props.states} />
      </div>
    </>
  );
};

export default Menu;
