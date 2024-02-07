import React from "react";

const ConceptCard = (props) => {
  return (
    <div>
      <li>
        <img src={props.img} />
        <h1>{props.title}</h1>
        <p>{props.description}</p>
      </li>
    </div>
  );
};

export default ConceptCard;
