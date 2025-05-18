import React, { useState } from 'react';
import Dashboardsidebar from '../../Layout/Dashboardsidebar';
import { GiHamburgerMenu } from 'react-icons/gi';

const Dashboard = () => {
  const [SidebarOpen, setSidebarOpen] = useState(false);

  const togglesidehamburger = () => {
    setSidebarOpen(!SidebarOpen);
  };

  return (
    <>
      <div className='h-screen w-screen bg-[#f5f7fb]'>

        {/* Hamburger - only visible on mobile */}
        <div className="md:hidden p-4 ">
          <button onClick={togglesidehamburger}>
            <GiHamburgerMenu className="text-2xl text-gray-700" />
          </button>
        </div>

        {/* Main Content Layout */}
        <div className="flex">
          {/* Sidebar */}
          <Dashboardsidebar SidebarOpen={SidebarOpen} togglesidehamburger={togglesidehamburger} />

          {/* Main Body */}
          <div className="flex flex-col">
            <div className='flex gap-3'> 
            <button> + Create Test</button>
            <button className=' mt-4 h-6 w-6 bg-slate-700 rouded-[50%]'></button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
