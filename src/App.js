import React from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Feed from "./components/Feed";

function App() {
  return (
    <div className="flex items-center flex-col">
      {/* Header */}
      <Header />
      {/* App Body */}
      <div className=" bg-gray-100 w-full ">
        <div className="flex mx-auto container pt-8">
          <div className="w-3/12 ">
            {/* Sidebar */}
            <Sidebar />
          </div>
          <div className="w-6/12  mx-3">
            {/* Main Content */}
            {/* Feeds */}
            <div className="h-full">
              <Feed />
            </div>
          </div>

          <div className="w-3/12 rounded-lg border p-3 bg-white">
            <div>Feeds</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
