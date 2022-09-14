import React from 'react';
import SearchIcon from "@material-ui/icons/Search"
import HeaderIcons from './HeaderIcons';
import HomeIcon from '@material-ui/icons/Home'
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount"
import BusinessCenterIcon from "@material-ui/icons/BusinessCenter"
import ChatIcon from "@material-ui/icons/Chat"
import NotificationsIcon from "@material-ui/icons/Notifications"
import ProfileIcon from './ProfileIcon';
import {getAuth} from 'firebase/auth'
const Header = () => {
    const auth = getAuth();
    const user = auth.currentUser
    return ( 
        <header className='header'>
            <div className="header_left">
                <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png"/>
                <div className='header_search'>
                    {/* SearchIcon */}
                    <SearchIcon/>
                    <input placeholder='Search' type="text"/>
                </div>
            </div>
            <div className='header_right'>
                <HeaderIcons title="Home" Icon={HomeIcon} />
                <HeaderIcons title="Networks" Icon={SupervisorAccountIcon} />
                <HeaderIcons title="Jobs" Icon={BusinessCenterIcon}/>
                <HeaderIcons title="Chat" Icon={ChatIcon}/>
                <HeaderIcons title="Notifications" Icon={NotificationsIcon}/>
                {user?(<ProfileIcon/>):(<p></p>)}
                
             </div>
        </header>
     );
}
 
export default Header;
