import React from "react";

function Sidebar() {
  return (
      <>
      <div className='bg-white rounded border mb-3'>
      <div className="h-24 rounded-t-lg bg-gradient-to-r from-green-500 to-blue-500 w-full "></div>
      <div className="p-3 border-b -mt-12 flex items-center flex-col justify-center">
        <img
          className="rounded-full w-20 h-20 border-2 border-white"
          src="https://media-exp1.licdn.com/dms/image/C4E03AQF7ZY2psichZA/profile-displayphoto-shrink_100_100/0/1626602550395?e=1637798400&v=beta&t=KMRkEzcsqt3CwF4kggIWLe-TdCO0javPA-vlmdz2HfM"
          alt=""
        />
        <h2 className="font-semibold text-gray-800 text-lg">
          Hailemichael Adefrs
        </h2>
        <h4 className="text-xs text-gray-500 font-semibold">
          Web Developer at Excellerent Solutions
        </h4>
      </div>
      <div className="p-3">
        <div className="flex items-center justify-between mb-2">
          <h4 className="text-xs text-gray-500 font-semibold">Who Viewed you</h4>
          <a className="text-blue-600 font-semibold text-xs ">2,543</a>
        </div>
        <div className="flex items-center justify-between">
          <h4 className="text-xs text-gray-500 font-semibold">Views on post</h4>
          <a className="text-blue-600 font-semibold text-xs ">2,446</a>
        </div>
      </div>
    </div>
    <div className='rounded bg-white border p-3'>
    <h2 className="font-semibold text-gray-700 text-base">
         Recent
        </h2>
        <ul className='mx-3 font-semibold text-gray-500 text-xs'>
            <li>reactJS</li>
            <li>reactJS</li>
            <li>reactJS</li>
            <li>reactJS</li>
        </ul>
    </div>
      </>
    
    
  );
}

export default Sidebar;
