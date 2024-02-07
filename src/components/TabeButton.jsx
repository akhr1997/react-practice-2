import React from "react";

const TabeButton = ({ children, onClick }) => {
  return (
    <li>
      <button onClick={onClick}>{children}</button>
    </li>
  );
};

export default TabeButton;
