import React from "react";
import styled from "styled-components";

// Google Map
import Map from "./Map";

export default function MapLocation() {
  return (
    <StyledMapLocation>
      <h1 className="head-title">Наши дома на карте</h1>
      <div className="map-location__wrapper">
        <Map />
      </div>
    </StyledMapLocation>
  );
}

const StyledMapLocation = styled.div`
  h1 {
    margin: 120px 0px 30px;
  }

  .map-location__wrapper {
    padding: 60px;
    width: 100%;
    height: auto;
    border-radius: 40px;
    background: #fff;
  }

  @media (max-width: 700px) {
    .map-location__wrapper {
      padding: 30px;
    }
  }

  @media (max-width: 700px) {
    .map-location__wrapper {
      padding: 0px;
    }
  }
`;
