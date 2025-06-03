import React, { useState } from 'react';
import Dashboardsidebar from '../../Layout/Dashboardsidebar';
import { GiHamburgerMenu } from 'react-icons/gi';
import { FaPlus } from 'react-icons/fa';
import { CgProfile } from 'react-icons/cg';
import Createquiz from '../../Layout/Createquiz';
import { Link } from 'react-router-dom';

import PerformenceGraph from './PerformenceGraph';

const dashboardStats = [
  { label: 'Total Attempted Tests', value: 20, color: 'bg-blue-100', icon: '📅' },
  { label: 'Total Questions Attempted', value: 122, color: 'bg-cyan-100', icon: '✏️' },
  { label: 'Total Unattempted Questions', value: 223, color: 'bg-yellow-100', icon: '⚠️' },
  { label: 'Total Correct Answer', value: 42, color: 'bg-green-100', icon: '✅' },
  { label: 'Total Wrong Answer', value: 80, color: 'bg-red-100', icon: '❌' },
  { label: 'Accuracy', value: '33.2%', color: 'bg-purple-100', icon: '📈' },
];

const Dashboard = () => {
  const [SidebarOpen, setSidebarOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const togglesidehamburger = () => {
    setSidebarOpen(!SidebarOpen);
  };

  return (
    <div className="h-screen w-screen bg-[#f5f7fb] overflow-hidden">
      <div className="flex flex-col md:flex-row h-full">

        {/* Sidebar */}
        <Dashboardsidebar SidebarOpen={SidebarOpen} togglesidehamburger={togglesidehamburger} />
        {SidebarOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
            onClick={togglesidehamburger}
          />
        )}

        {/* Main Section */}
        <div className="flex-1 overflow-y-auto p-4">

          {/* Mobile Top Bar */}
          <div className="flex justify-between items-center md:hidden mb-4">
            <button onClick={togglesidehamburger} className="p-2">
              <GiHamburgerMenu className="text-2xl text-gray-700" />
            </button>
            {/* create test on top in mobile */}
            <div className="flex gap-4 items-center">
              <button
                onClick={() => setShowModal(true)}
                className="flex items-center gap-2 bg-[#4261ed] hover:opacity-80 text-white px-3 py-2 rounded-md"
              >
                <FaPlus /> <span className="text-sm">Create Test</span>
              </button>
              <Link><CgProfile className="w-8 h-8"/></Link>
            </div>
          </div>

          {/* Desktop Top Bar */}
          <div className="hidden md:flex justify-end items-center gap-4 mb-4">
            <button
              onClick={() => setShowModal(true)}
              className="flex items-center gap-2 bg-[#4261ed] hover:opacity-80 text-white px-4 py-2 rounded-md"
            >
              <FaPlus /> <span>Create Test</span>
            </button>
            <Link><CgProfile className="w-8 h-8" /></Link>
          </div>



          {/*User Details */}
          <h1 className="text-2xl font-semibold mb-4 text-gray-600">Hi, User</h1>

          {/* User Status*/}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6 bg-white p-5 rounded-lg">
            {dashboardStats.map((stat, idx) => (
              <div key={idx} className={`rounded-md ${stat.color} p-4 flex items-center gap-4`}>
                <div className="text-3xl ">{stat.icon}</div>
                <div>
                  <p className="text-sm text-gray-700 font-medium">{stat.label}</p>
                  <p className="text-xl font-semibold">{stat.value}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Chart Section */}
          <div className="bg-white rounded-md p-4 shadow">
            <h2 className="font-semibold mb-2">Accuracy Growth (%)</h2>
            <PerformenceGraph/>
          </div>

        </div>
      </div>

      {/* Create Test Modal */}
      <Createquiz showModal={showModal} setShowModal={setShowModal} />
    </div>
  );
};

export default Dashboard;
