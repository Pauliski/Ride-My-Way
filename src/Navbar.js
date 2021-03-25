import React from 'react';
import {Link} from '@reach/router'

const Navbar = () => {
    const navbar = ['Home', 'Service', 'About', 'Contact', 'Blog']
    return ( 
        <div>
            <ul className='navUl'>{navbar.map(item =>(
                <li key={item}  className='navLink'><Link to={`/${item.toLowerCase()}`} >{item}</Link></li>
                ))}</ul>
        </div>
     );
}
 
export default Navbar;