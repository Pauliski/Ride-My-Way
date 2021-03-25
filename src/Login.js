import React, {useState} from 'react'
import {Link} from '@reach/router'

const Login = () => {
    const [login, setLogin] = useState(false)

   return ( login ? 
         
            <div className='loginPage'>
            <form action="" className='loginForm'>
                
                    <label htmlFor="login" className='loginLabel'>User Login</label>
                    
                    
                    <input type="text" placeholder='Username or Email'/>
                    <input type="password" placeholder='Password'/>
                    <span className='loginSpan'>
                        <button className='loginButton'>Login</button>
                        New Users<span className='linkToSignup' onClick={()=>setLogin(false)}>  Sign up</span>
                    </span>
                    
            </form>
        </div>
    :   <div>
        <div className='loginPage'>
            <form action="" className='loginForm signupForm'>
        
            <label htmlFor="signup" className='signupLabel'>New User Signup</label>
            
            
            <input type="text" placeholder='Username'/>
            <input type="text" placeholder='Email Adress'/>
            <input type="text" inputmode="numeric" placeholder='Mobile Number'/> 
            <input type="text" placeholder='Home Adress'/>
            <input type="password" placeholder='Password'/>
            <input type="password" placeholder='Confirm Password'/>
            <span className='loginSpan'>
                <button className='loginButton'>Sign Up</button>
                Existing Users<span to='/signup' className='linkToSignup' onClick={()=>setLogin(true)}> Sign In</span>
            </span>
            
    </form>
        </div>
    
</div>
   )
    
}

export default Login
