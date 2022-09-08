import React from 'react'
import './Header.css';
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import FlagIcon from '@mui/icons-material/Flag';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle';
import { Avatar, IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import ForumRoundedIcon from '@mui/icons-material/ForumRounded';
import CircleNotificationsRoundedIcon from '@mui/icons-material/CircleNotificationsRounded';
import ExpandMoreRoundedIcon from '@mui/icons-material/ExpandMoreRounded';
import { useStateValue } from './StateProvider';


function Header() {

  const [{user}] = useStateValue(); // to dispatch data to my web-app

  return (
    <div className="header">

        <div className="header__left"> 
        <img 
            src="https://www.ultimatemoney.com.au/wp-content/uploads/2018/07/VeChain-review.png"
            alt=""/>
            <dev className="header__input">
                <SearchIcon />
                <input placeholder='Search Vibes' type="text"/>
            </dev>
        </div>
       

        <dev className="header__center">
          <dev className="header__option 
          header__option__active">
            <HomeIcon fontSize="large" />
          </dev>
          <dev className="header__option">
            <FlagIcon fontSize="large" />
          </dev>
          <dev className="header__option">
            <SubscriptionsIcon fontSize="large" />
          </dev>
          <dev className="header__option">
            <LocalMallIcon fontSize="large" />
          </dev>
          <dev className="header__option">
            <SupervisedUserCircleIcon fontSize="large" />
          </dev>
        </dev>

        <dev className="header__right">
          <dev className="header__info">
            <Avatar src = {user.photoURL}/>
            <h4>{user.displayName}</h4>
          </dev>

          <IconButton>
            <AddIcon />
          </IconButton>
          <IconButton>
            <ForumRoundedIcon />
          </IconButton>
          <IconButton>
            <CircleNotificationsRoundedIcon />
          </IconButton>
          <IconButton>
            <ExpandMoreRoundedIcon />
          </IconButton>
        </dev>
    </div>
  )
}

export default Header