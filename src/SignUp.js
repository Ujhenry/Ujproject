import React from 'react'
import { Link } from 'react-router-dom'
import logo2 from "./images/logo2.png";
import './SignUp.css';

function SignUp() {
    return (
        <div className='SignUp'>
            <Link to='/'>
              <img className="header_logo" src={logo2} alt="" />
                 
            </Link>
            <div className='login__container'>
                <h1>Sign-in</h1>

                <form>
                    <h5>E-mail</h5>
                    <input type='text' value=""/>

                    <h5>Password</h5>
                    <input type='password' value=""/>
                    
                    <button type='submit' className='login__signInButton'>Sign In</button>
                </form>

                <p>
                    By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use & Sale. Please
                    see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
                </p>
                <Link to ="/Register">
                <button className='login__registerButton'>Register Here</button>


                </Link>
                
                    
                    
            </div>
        
        

            
        </div>
            
        
    )
}

export default SignUp
