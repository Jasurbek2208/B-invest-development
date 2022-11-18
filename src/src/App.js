import React from 'react';
import { BrowserRouter } from "react-router-dom"
import Router from './router/Router';
import { GlobalStyle } from './assets/style/Global';

function App() {
  return (
    <BrowserRouter>
      <div style={{ backgroundColor: "#F5F5F7" }}>
        <GlobalStyle />
        <Router />
      </div>
    </BrowserRouter>
  );
}

export default App;
