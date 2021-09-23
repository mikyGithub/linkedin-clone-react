import React from "react";
import LinkedInLogo from "../icons/LinkedInLogo";

function Header() {
  return (
   
   
    
    <div className="border-b  w-full flex justify-between items-center">
   
      <div className="w-1/3 flex items-center">
      <LinkedInLogo/>
      
        <input
          type="text"
          className="focus:outline-none outline-none border-0 px-3 py-2  bg-blue-100 rounded"
        />
      </div>
      <div className="flex-1">ddd</div>
    </div>

  );
}

export default Header;
