import React from "react";
import LinkedInLogo from "../icons/LinkedInLogo";
import HomeLogo from "../icons/HomeLogo";
import MessageLogo from "../icons/MessageLogo";
import JobsLogo from "../icons/JobsLogo";
import NotificationLogo from "../icons/NotificationLogo";
import NetworkLogo from "../icons/NetworkLogo";
import SearchLogo from "../icons/SearchLogo";
import HeaderOption from "./HeaderOption";

function Header() {
  return (
   
   
    
    <div className="border-b  w-full">
   <div className='mx-auto container  flex justify-between items-center'>

      <div className="w-1/3 flex items-center">
      <LinkedInLogo/>
      
      <div className="flex items-center   bg-blue-100 rounded px-3 ">
      <SearchLogo className="mr-3"/>
        <input
          type="text"
          className="w-64 py-1 px-3 focus:outline-none bg-blue-100 outline-none border-0 "
        />
      </div>

      </div>
      <div className="flex-1">
      <div className="flex items-center justify-end border-r">

        <HeaderOption title="Home" icon={<HomeLogo/>} />
        <HeaderOption title="My Network" icon={<NetworkLogo/>} />
        <HeaderOption title="Jobs" icon={<JobsLogo/>} />
        <HeaderOption title="Message" icon={<MessageLogo/>} />
        <HeaderOption title="Notification" icon={<NotificationLogo/>} />
      </div>
      <div className="flex items-center justify-end border-r">

        
      </div>
      </div>
   </div>
    </div>

  );
}

export default Header;
