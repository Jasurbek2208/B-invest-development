import React from 'react';
import Home from "./pages/Home";

import { GlobalStyle } from './assets/style/Global';

function App() {
  return (
    <div style={{ backgroundColor: "#F5F5F7" }}>
      <GlobalStyle />
      <Home />
    </div>
  );
}

export default App;
