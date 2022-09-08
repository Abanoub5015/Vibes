import { Button } from '@mui/material'
import React from 'react'
import './Login.css'
import { provider } from "./firebase";
import { useStateValue } from './StateProvider';
import { actionTypes } from './reducer';

import { getAuth, signInWithPopup} from "firebase/auth";

function Login() {

    const [state, dispatch]= useStateValue(); 

    const signIn = () => {

        //sign in func here.............😌
        const auth = getAuth();
        signInWithPopup(auth,provider)
        .then(result => {

            dispatch({
                type: actionTypes.SET_USER,
                user: result.user   // push it into the data layer
            })
            console.log(result.user , state)

        })
        .catch(error => alert(error.message));
    }

    return (
        <div className='login'>

            <div className="login__logo">
                <img src='https://i.ibb.co/bQ2PGP0/vibes-pic.png' alt='' />
                <img src='https://i.ibb.co/3pnVR8H/vibes-logo.crop.png' alt='' />
            </div>

            <Button type="submit" onClick={signIn} > Sign In </Button>

        </div>
    )
}

export default Login
