import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './App.css';
import Creedy from './pages/creedy/Creedy';
import Form from "./components/form/Form";

function App() {
  return (
    <Router>
      <div className="wrapper">
        <Routes>
          <Route exact path="/" element={<Creedy />} />
          <Route path="signin" element={<Form />} />
          <Route path="signup" element={<Form />} />
          <Route path="form" element={<Form />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
