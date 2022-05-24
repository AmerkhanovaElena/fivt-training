import React from 'react';
import './App.css';
import {BrowserRouter, Route} from "react-router-dom";
import Events from "./pages/Events";

function App() {
    return (
        <BrowserRouter>
          <Route path="/" component={Events}/>
        </BrowserRouter>
    );
}

export default App;
