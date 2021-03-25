import React from 'react'
import {Link} from '@reach/router'
import trans from './trans.jpg'
const Homepage = () => {
    return (
        <div className='Homepage'>
            <div className='board'>
                <div className='board1'>
                    <div><h1>Get a stressfree ride</h1>
                    <Link to='/user'><button className='boardButton'>Join Us</button></Link>
                    </div>
                </div>  
                <div className='board2'>
                    <h1>Your Satisfaction is our top most Priority</h1>
                </div>
            </div>
            
        
        </div>
    )
}

export default Homepage
