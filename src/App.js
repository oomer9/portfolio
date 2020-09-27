import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import Home from './home/home.tsx'
import { BrowserRouter as Router,Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Route  path="/" component={Home}/> 
      </Router>
    </div>
  );
}

export default App;
