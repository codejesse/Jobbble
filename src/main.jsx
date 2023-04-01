import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Application from './components/Application';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="Application" element={<Application />} />
      {/* <Route path="Job" element={<JobDetails />} /> */}
    </Routes>
  </BrowserRouter>
)
