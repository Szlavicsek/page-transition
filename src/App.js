import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Router from "./router/Router"


function App() {
    if(navigator.userAgent.toLowerCase().indexOf('firefox') > -1) {
        document.querySelector("#root").classList.add("scroller")
    }
  return (
      <>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </>
  );
}

export default App;
