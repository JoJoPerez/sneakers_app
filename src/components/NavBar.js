import React from 'react';
import { Link } from 'react-router';
import sneakers from '../data/sneakers';

export default class NavBar extends React.Component {
    render() {
        return (
            <nav className="sneakers-menu">
                {sneakers.map(menuData => {
                    return <Link key={menuData.id} to={`/sneaker/${menuData.id}`} activeClassName="active">
                        {menuData.name}
                    </Link>;
                })}
            </nav>
        );
    }
}