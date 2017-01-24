'use strict';

import React from 'react';
import { Link } from 'react-router';
import NavBar from './NavBar';
import sneakers from '../data/sneakers';

export default class SneakerPage extends React.Component {
  render() {
    const id = this.props.params.id;
    const sneaker = sneakers.filter((sneaker) => sneaker.id === id)[0];
    if (!sneaker) {
      return;
    }
    const headerStyle = { backgroundImage: `url(/img/${sneaker.cover})` };
    return (
      <div className="sneaker-full">
        <NavBar/>
        <div className="sneaker">
          <header style={headerStyle}/>
          <div className="picture-container">
            <img src={`/img/${sneaker.image}`}/>
            <h2 className="name">{sneaker.name}</h2>
            <p>{sneaker.year}</p>
            <ul className="colors-available">
              {sneaker.colorways}

            </ul>

          </div>
          
          
        </div>
        <div className="navigateBack">
          <Link to="/">Back to the index</Link>
        </div>
      </div>
    );
  }
}