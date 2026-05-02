import React from 'react'
import { SignIn, SignUp } from '@clerk/clerk-react'
import { useState } from 'react'

const Login = () => {
    const [isSignUp, setIsSignUp] = useState(false)

    return (
        <div className='flex items-center justify-center min-h-[80vh]'>
            {isSignUp ? (
                <div className='flex flex-col items-center'>
                    <SignUp routing="hash" />
                    <p className='mt-4'>Already have an account? <span className='text-primary underline cursor-pointer' onClick={() => setIsSignUp(false)}>Login here</span></p>
                </div>
            ) : (
                <div className='flex flex-col items-center'>
                    <SignIn routing="hash" />
                    <p className='mt-4'>Don't have an account? <span className='text-primary underline cursor-pointer' onClick={() => setIsSignUp(true)}>Sign up here</span></p>
                </div>
            )}
        </div>
    )
}

export default Login
