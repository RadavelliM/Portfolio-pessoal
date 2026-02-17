import React from 'react'

import './navbar.css'
import Actions from '../../common/actions/actions'


export default function Navbar() {
    return (
        <nav id='home' className='navbar'>
            <div className="brand">
                <h1> {`< Radavelli />`} </h1>
            </div>

            <Actions isNav={true} />
        </nav>
    )
};
