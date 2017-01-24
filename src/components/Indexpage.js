import React from 'react';
import Sneakerspreview from './Sneakerspreview';
import sneakers from '../data/sneakers';

export default class IndexPage extends React.Component {
  render() {
    return (
      <div className="home">
        <div className="sneakers-selector">
          {sneakers.map(sneakerData => <Sneakerspreview key={sneakerData.id} {...sneakerData} />)}
        </div>
      </div>
    );
  }
}
