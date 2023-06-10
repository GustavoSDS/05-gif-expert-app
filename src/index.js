import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'animate.css';
import GifExpertApp from './components/Gif/ExpertApp'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GifExpertApp />
  </React.StrictMode>
);
