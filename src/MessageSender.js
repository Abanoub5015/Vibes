import { Avatar } from '@mui/material'
import React, { useState } from 'react'
import "./MessageSender.css"
import { useStateValue } from './StateProvider';
import VideocamRoundedIcon from '@mui/icons-material/VideocamRounded';
import PhotoLibraryRoundedIcon from '@mui/icons-material/PhotoLibraryRounded';
import InsertEmoticonRoundedIcon from '@mui/icons-material/InsertEmoticonRounded';
import { db } from "./firebase";
import { serverTimestamp, collection, addDoc } from "firebase/firestore";

function MessageSender() {

    const [{ user }] = useStateValue(); // to dispatch data to my web-app

    const [input, setInput] = useState("");
    const [imageUrl, setImageUrl] = useState(''); // react hook [Returns a stateful value, and a function to update it.]


    const handleSubmit = (e) => {
        e.preventDefault(); /* e.preventDefault() = do not refresh [React hate] */

        //push data to firebase db
        //const postsRef = collection(db, "posts");
        //const postsRef = 

        addDoc(collection(db, "posts"), {
            message: input,
            timestamp: serverTimestamp(),
            profilePic: user.photoURL,
            username: user.displayName,
            image: imageUrl
        })

        //console.log("Document written with ID: ", postsRef.id);

        //after send.. and hitting enter ..  reset placeholders
        setInput("");
        setImageUrl('');

    };


    return (
        <div className='messageSender'>
            <div className="messageSender__top">
                <Avatar src={user.photoURL} />
                <form>
                    <input value={input} onChange={(e) => setInput(e.target.value)} className='messageSender__input' placeholder={`what's on your mind, ${user.displayName}?`} />
                    <input value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} placeholder={`image URL (Optional)`} />
                    <button onClick={handleSubmit} type="submit"> Hidden submit </button>
                </form>
            </div>

            <div className="messageSender__bottom">

                <div className="messageSender__option">
                    <VideocamRoundedIcon style={{ color: "red" }} />
                    <h3> Live Video </h3>
                </div>

                <div className="messageSender__option">
                    <PhotoLibraryRoundedIcon style={{ color: "green" }} />
                    <h3> Photo/Video </h3>
                </div>

                <div className="messageSender__option">
                    <InsertEmoticonRoundedIcon style={{ color: "orange" }} />
                    <h3> Feeling/Activity </h3>
                </div>

            </div>


        </div>
    )
}

export default MessageSender