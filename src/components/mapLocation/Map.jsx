import React from "react";
import styled from "styled-components";

export default function Map({ mobile }) {
  return (
    <StyledMapp className={mobile ? "mobile" : ""}>
      <div className="gmap_canvas">
        <iframe
          className="gmap_iframe"
          frameBorder="0"
          scrolling="no"
          marginHeight="0"
          marginWidth="0"
          src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=O'zbekiston davlat tabiat muzeyi&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        ></iframe>
      </div>
    </StyledMapp>
  );
}
const StyledMapp = styled.div`
  position: relative;
  text-align: right;
  width: 100%;
  height: 540px;

  .gmap_canvas {
    overflow: hidden;
    background: none !important;
    width: 100%;
    height: 540px;

    .gmap_iframe {
      width: 100% !important;
      height: 540px !important;
      border-radius: 40px;
    }
  }

  &.mobile {
    height: 100vh !important;

    .gmap_canvas {
      height: 100vh !important;

      .gmap_iframe {
        height: 100vh !important;
      }
    }
  }

  @media (max-width: 500px) {
    .gmap_canvas {
      .gmap_iframe {
        border-radius: 0px;
      }
    }
  }
`;
