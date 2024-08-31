import { useState } from "react";
import React from "react";

import Destinations from "./Destinations/Destinations";
import Reviews from "./Reviews/Reviews";

import FilterCards from "./FilterCards/FilterCards";

import City from "./City.mp4";
import "./Packages.css";

function Packages({ searchDetails }) {
  const [filtered, setDestinationFiltered] = useState([]);
  return (
    <section className="sectionPackages">
      <div className="heroVideoContainer">
        <video className="heroVideo" autoPlay loop muted>
          <source src={City} type="video/mp4" />
        </video>
      </div>

      <div className="containerPackagesPageMain">
        <FilterCards
          setDestinationFiltered={setDestinationFiltered}
        ></FilterCards>

        <Destinations
          searchDetails={searchDetails}
          setDestinationFiltered={setDestinationFiltered}
          filtered={filtered}
        ></Destinations>
        <Reviews></Reviews>
      </div>
    </section>
  );
}

export default Packages;
