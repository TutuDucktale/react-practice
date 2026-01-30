import React from "react";
import Card from "./Cards";
import Sdata from "./Sdata";



const App = () => (
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
  </>
);

export default App;
