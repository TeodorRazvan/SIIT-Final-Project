import React, { useEffect, useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";

import Packages from "./components/Pages/Packages/Packages";
import Contact from "./components/Pages/Contact/contact";
import User from "./components/Pages/User/User";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Home from "./components/Pages/Home/home";

function App() {
  const [searchDetails, setSearchDetails] = useState();
  const [destinations, setDestinations] = useState([]);

  const handleChangeSearchDetails = (fieldChange) => {
    setSearchDetails(fieldChange);
  };

  useEffect(() => {
    fetch("http://localhost:3000/destinations")
      .then((response) => response.json())
      .then((destinations) => setDestinations(destinations));
  }, []);

  function handleFavoriteDestination(updatedDestination) {
    const updatedDestinationArray = destinations.map((destination) => {
      if (destination.id === updatedDestination.id) {
        return updatedDestination;
      } else {
        return destination;
      }
    });
    setDestinations(updatedDestinationArray);
  }

  return (
    <>
      <Navbar></Navbar>
      <Routes>
        <Route
          path="/packages"
          element={
            <Packages
              onChangeSearch={handleChangeSearchDetails}
              searchDetails={searchDetails}
            />
          }
        />
        <Route path="/contact" element={<Contact />} />
        <Route path="/user" element={<User />} />
        <Route path="/" element={<Home />} />
      </Routes>

      <Footer></Footer>
    </>
  );
}

export default App;
