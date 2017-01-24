import React from 'react';
import { Link } from 'react-router';

export default class Sneakerspreview extends React.Component {
    render() {
        return (
            <Link to={`/sneaker/${this.props.id}`}>
                <div className="sneaker-preview">
                    <h2 className="name">{this.props.name}</h2>
                </div>
            </Link>
        );
    }
  }