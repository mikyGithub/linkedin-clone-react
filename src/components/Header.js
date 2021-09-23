import React from 'react'
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import HeaderOption from './HeaderOption';
import BusinessCenter  from '@material-ui/icons/BusinessCenter';
import ChatIcon  from '@material-ui/icons/Chat';
import NotificationsIcon  from '@material-ui/icons/Notifications';

function Header() {
    return (
        <div className="header">
               <div className="header_left">
                   <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt=""/>
                   <div className="header_search">
                       {/* SearchIcon */}
                       <SearchIcon/>
                       <input type="text"/>
                   </div>

               </div>
                <div className="header_right">
                    <HeaderOption Icon={HomeIcon} title='Home'/>
                    <HeaderOption Icon={SupervisorAccountIcon} title='My Network'/>
                    <HeaderOption Icon={BusinessCenter} title='Jobs'/>
                    <HeaderOption Icon={ChatIcon} title='Messaging'/>
                    <HeaderOption Icon={NotificationsIcon} title='Notifications'/>
                    <HeaderOption avatar='https://media-exp1.licdn.com/dms/image/C4E03AQF7ZY2psichZA/profile-displayphoto-shrink_100_100/0/1626602550395?e=1637798400&v=beta&t=KMRkEzcsqt3CwF4kggIWLe-TdCO0javPA-vlmdz2HfM' title='Me'/>
               </div>
        </div>
    )
}

export default Header
