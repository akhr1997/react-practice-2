import React from "react";

const TabeButton = (props) => {
  return (
    <li>
      <button>{props.children}</button>
    </li>
  );
};

export default TabeButton;
