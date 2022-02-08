import React from 'react';
import './style.css';
import Buttons from './Buttons.js';
import store from './store/store';
import { Provider } from 'react-redux';
import Rating from './Rating';

export default function App() {
  return (
    <Provider store={store}>
      <div className="betterview">
        <h1>Rating using Redux</h1>
        <Buttons></Buttons>
        <Rating></Rating>
      </div>
    </Provider>
  );
}
