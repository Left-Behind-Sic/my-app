import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';




export let rerenderEntireTree = (events) => {

  ReactDOM.render(
    <React.StrictMode>
      <App events={events} />
    </React.StrictMode>,
    document.getElementById('root')
  );
}