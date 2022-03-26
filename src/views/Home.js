import React from 'react';
import { useAuth } from '../contexts/AuthProvider';


 
export const Home = () => {

  const { signInWithGoogle } = useAuth()

  return (
    <>
    <div id='intro' >
      <h1>Welcome to Bet On It!</h1>
      <h5>The premier place to get all your up-to-date sports betting odds.</h5>
      
    
    <div className='buttons'>
        <button className ='btn1' onClick={ signInWithGoogle }> Google Sign In </button>
    </div>
      </div>
    </>
  )
}
     
     
     
     
     
     
     
     
     
     
     
     
  
 
 
 
