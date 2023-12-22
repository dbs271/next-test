"use client";
import { Slider } from "@mui/material";
import React, { useState } from "react";

const Home = () => {
  const [slider, setSlider] = useState(20);

  const handleSliderChange = (event, newValue) => {
    setSlider(newValue);
  };
  console.log(slider);

  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <div>
        {slider}
        <Slider
          style={{ width: "300px", alignSelf: "center" }}
          value={slider}
          aria-label="Default"
          valueLabelDisplay="auto"
          onChange={handleSliderChange}
        />
      </div>
    </div>
  );
};

export default Home;
