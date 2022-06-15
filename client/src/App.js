import React from 'react';
import './App.scss';
import {BrowserRouter, Route} from "react-router-dom";
import Events from "./pages/EventList/Events";

function App() {
    return (
        <BrowserRouter>
          <Route path="/" component={Events}/>
        </BrowserRouter>
    );
}

export default App;
