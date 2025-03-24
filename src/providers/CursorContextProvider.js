import { CursorContext } from "../contexts/cursorContext";
import { useState, useEffect } from "react";
import default_cursor from '../assets/cursors/default.png'
import pointer_cursor from "../assets/cursors/pointer.png";
export const CursorProvider = ({ children }) => {
  const [cursorType, setCursorType] = useState("default");

  // Attach event listeners to update cursor globally
  useEffect(() => {
    const handleMouseOver = (event) => {
      console.log(event.target || "No data-cursor attribute found");
      if (event.target.hasAttribute("data-cursor")) {
        setCursorType(event.target.getAttribute("data-cursor"));
      } else {
        setCursorType("default"); // Reset when not hovering over a target element
      }
    };

    document.addEventListener("mouseover", handleMouseOver);
    return () => document.removeEventListener("mouseover", handleMouseOver);
  });

return (
  <CursorContext.Provider value={{ cursorType, setCursorType }}>
    <div
      style={{
        cursor: `url(${
          cursorType === "pointer" ? pointer_cursor : default_cursor
        }) 8 8, auto`,
      }}
    >
      {children}
    </div>
  </CursorContext.Provider>
);
};
