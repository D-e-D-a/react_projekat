import React from "react";
import Location from "../components/iconComponents/mapIcon";

export default function Card(props) {
  return (
    <div className="main">
      <img className="main--img" src={props.img} alt="Mt Fuji" />
      <div className="main--info">
        <div className="main--info__location">
          <Location />
          <h4 className="place">{props.place}</h4>
          <a href={props.map}>View it on google maps</a>
        </div>
        <h1>{props.name}</h1>
        <h3>{props.date}</h3>
        <p>{props.info}</p>
      </div>
    </div>
  );
}
