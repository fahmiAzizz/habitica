import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Intro from './components/Intro';
import Dashboard from './components/Dashboard';
import Profile from './components/Profile';
import Habits from './components/Habits';
import './index.css';
import Home from './components/Home';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Home />
      <Routes>
        <Route path='/' element={<Intro />} />
        <Route path='/Dashboard' element={<Dashboard />} />
        <Route path='/Profile' element={<Profile />} />
        <Route path='/Habits' element={<Habits />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
