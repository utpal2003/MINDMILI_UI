import React from 'react';
import { IoMdClose } from 'react-icons/io';
import { Link } from 'react-router-dom';
import { FaHome, FaCog, FaBookOpen, FaTrophy, FaEnvelope } from 'react-icons/fa';
import { MdDashboard } from 'react-icons/md';

const Dashboardsidebar = ({ SidebarOpen, togglesidehamburger }) => {
  return (
    <div
      className={`fixed top-0 left-0 h-screen w-64 bg-white shadow-lg z-50 transition-transform duration-300
        ${SidebarOpen ? 'translate-x-0' : '-translate-x-full'} 
        md:translate-x-0 md:static md:block`}
    >
      {/* Close button - only for mobile */}
      <div className="absolute right-0 top-2 md:hidden flex justify-end p-4">
        <button onClick={togglesidehamburger}>
          <IoMdClose className="text-2xl text-gray-500 hover:text-red-500" />
        </button>
      </div>

      {/* Sidebar Content */}
      <div className="flex flex-col p-6 space-y-8">
        {/* Header */}
        <div className="flex items-center space-x-2">
          <MdDashboard className="text-2xl text-blue-600" />
          <h2 className="text-xl font-bold text-blue-600">Dashboard</h2>
        </div>

        {/* Account Links */}
        <div>
          <h3 className="text-sm font-semibold text-gray-500 mb-3">ACCOUNT</h3>

          <div className="flex flex-col space-y-6 pl-4 font-bold text-md  md:text-xl mt-4  ">
            <Link to="/" className="flex items-center space-x-2 text-gray-500 hover:text-blue-600">
              <FaHome />
              <span>Home</span>
            </Link>
            <Link to="/test" className="flex items-center space-x-2 text-gray-500 hover:text-blue-600">
              <FaBookOpen />
              <span>Test</span>
            </Link>
            <Link to="/leaderboard" className="flex items-center space-x-2 text-gray-500 hover:text-blue-600">
              <FaTrophy />
              <span>Leaderboard</span>
            </Link>
          </div>
        </div>

        {/* Support Links */}
        <div>
          <h3 className="text-sm font-semibold text-gray-500 mb-3 pt-6">SUPPORT</h3>

          <div className="flex flex-col space-y-6 pl-4 font-bold text-md  md:text-xl mt-4">
            <Link to="/settings" className="flex items-center space-x-2 text-gray-500 hover:text-blue-600">
              <FaCog />
              <span>Settings</span>
            </Link>
            <Link to="/contact" className="flex items-center space-x-2 text-gray-500 hover:text-blue-600">
              <FaEnvelope />
              <span>Contact Us</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboardsidebar;
