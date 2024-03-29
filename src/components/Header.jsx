import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <nav className='deep-purple lighten-2'>
            <div className='nav-wrapper'>
                <Link
                    to='/'
                    className='brand-logo deep-purple-text text-lighten-5'
                >
                    React Food SPA
                </Link>
                <ul id='nav-mobile' className='right hide-on-med-and-down'>
                    <li>
                        <Link to='/about'>About</Link>
                    </li>
                    <li>
                        <Link to='/contacts'>Contacts</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export { Header };
