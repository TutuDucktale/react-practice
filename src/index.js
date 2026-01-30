import React from "react";
import ReactDOM from "react-dom/client";
import Card from "./Cards";
import "./App.css";
import Sdata from "./Sdata";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <>
    <h1 className="heading_style">List Of My Top 5 Netflix Series </h1>
    {Sdata.map((val) => {
      return (
        <Card
          imgsrc={val.imgsrc}
          title={val.title}
          seriesname={val.seriesname}
          link={val.link}
        />
      );
    })}
  </>,
);
