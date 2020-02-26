import React from "react";

const Newsbar = props => {
  return (
    <div className="wrapper">
      <img src={props.img} alt="" />
      <div className="headline">
        <h4>{props.headline}</h4>
      </div>
    </div>
  );
};

export default Newsbar;
