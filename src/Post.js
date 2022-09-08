import { Avatar } from '@mui/material'
import React from 'react'
import "./Post.css"
import ThumbUpAltRoundedIcon from '@mui/icons-material/ThumbUpAltRounded';
import ChatBubbleRoundedIcon from '@mui/icons-material/ChatBubbleRounded';
import NearMeRoundedIcon from '@mui/icons-material/NearMeRounded';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import ExpandMoreRoundedIcon from '@mui/icons-material/ExpandMoreRounded';

function Post({ profilePic, username, timestamp, message, image }) {
    return (
        <div className='post'>
            <div className="post__top">

                <Avatar src={profilePic} className="post__avatar" />

                <div className="post__topInfo">
                    <h3>{username}</h3>
                    <p>{new Date(timestamp?.toDate()).toLocaleString()}</p> 
                </div>
            </div>

            <div className="post__bottom">
                <p>{message}</p>
            </div>

            <div className="post__image">
                <img src={image} alt="" />
            </div>

            <div className="post__options">
                <div className="post__option">
                    <ThumbUpAltRoundedIcon />
                    <p>Like</p>
                </div>
                <div className="post__option">
                    <ChatBubbleRoundedIcon />
                    <p>Comment</p>
                </div>
                <div className="post__option">
                    <NearMeRoundedIcon />
                    <p>Share</p>
                </div>
                <div className="post__option">
                    <AccountCircleRoundedIcon />
                    <ExpandMoreRoundedIcon />
                </div>
            </div>

        </div>
    )
}

export default Post