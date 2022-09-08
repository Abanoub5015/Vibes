import React from 'react'
import "./Sidebar.css"
import SidebarRow from './SidebarRow'
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import EmojiFlagsIcon from '@mui/icons-material/EmojiFlags';
import PeopleIcon from '@mui/icons-material/People';
import MessageIcon from '@mui/icons-material/Message';
import StorefrontIcon from '@mui/icons-material/Storefront';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useStateValue } from './StateProvider';

function Sidebar() {

  const [{user}] = useStateValue(); // to dispatch data to my web-app

  return (
    <div className="sidebar">
        {/* <SidebarRow title={user.displayName} src={user.photoURL}/> */}
        <SidebarRow title={user.displayName} src={user.photoURL}/>
        
        <SidebarRow title='COVID-19 Info Center' Icon={LocalHospitalIcon}/>
        <SidebarRow title='Pages' Icon={EmojiFlagsIcon}/>
        <SidebarRow title='Friends' Icon={PeopleIcon}/>
        <SidebarRow title='Messenger' Icon={MessageIcon}/>
        <SidebarRow title='Marketplace' Icon={StorefrontIcon}/>
        <SidebarRow title='Videos' Icon={EmojiFlagsIcon}/>
        <SidebarRow title='More' Icon={ExpandMoreIcon}/>

    </div>
  )
}

export default Sidebar