import React from 'react';

const Navbar = () => {
    const navbar = ['Home', 'Service', 'About', 'Contact', 'Blog']
    return ( 
        <div>
            <ul className='navUl'>{navbar.map(item =>(
                <li key={item} className='navLink'>{item}</li>
                ))}</ul>
        </div>
     );
}
 
export default Navbar;