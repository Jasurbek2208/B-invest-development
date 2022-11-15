import React from "react";
import styled from "styled-components";

// Google Map
// import Map from "./Map";

export default function MapLocation() {
  return (
    <StyledMapLocation>
      <h1 className="head-title">Наши дома на карте</h1>
      <div className="map-location__wrapper">
        {/* <Map /> */}
      </div>
    </StyledMapLocation>
  );
}

const StyledMapLocation = styled.div`
  h1 {
    margin-top: 120px;
  }

  .map-location__wrapper {
    padding: 60px;
    width: 100%;
    height: auto;
    border-radius: 40px;
    background: #fff;
  }
`;
