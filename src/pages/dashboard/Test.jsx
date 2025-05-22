import { useState } from "react";

export default function Test() {
  const [activeTab, setActiveTab] = useState("Created Tests");
  const [isLoading, setIsLoading] = useState(false);
  
  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  };
  
  const tabs = [
    { id: "Created Tests", label: "Created Tests", count: null },
    { id: "Participated Tests", label: "Participated Tests", count: null },
    { id: "Public Tests", label: "Public Tests", count: 4 },
    { id: "Recommended Tests", label: "Recommended Tests", count: 4 }
  ];
  
  const testCards = {
    "Created Tests": [
      {
        id: 1,
        name: "JavaScript Basics",
        keywords: ["Programming", "Frontend", "Web"],
        createdBy: "Santu",
        startTime: "2025-05-25 09:00",
        endTime: "2025-05-25 11:00"
      },
      {
        id: 2,
        name: "React Fundamentals",
        keywords: ["React", "JSX", "Hooks"],
        createdBy: "Utpal",
        startTime: "2025-05-27 14:00",
        endTime: "2025-05-27 16:00"
      },
      {
        id: 3,
        name: "CSS Advanced Layouts",
        keywords: ["CSS", "Grid", "Flexbox"],
        createdBy: "Biswajit",
        startTime: "2025-05-29 10:00",
        endTime: "2025-05-29 12:00"
      },
      {
        id: 4,
        name: "Web Accessibility",
        keywords: ["A", "B", "System Design"],
        createdBy: "Jurier",
        startTime: "2025-06-01 13:00",
        endTime: "2025-06-01 15:00"
      }
    ],
    "Participated Tests": [
       {
        id: 1,
        name: "JavaScript Basics",
        keywords: ["Programming", "Frontend", "Web"],
        createdBy: "Santu",
        startTime: "2025-05-25 09:00",
        endTime: "2025-05-25 11:00"
      },
      {
        id: 2,
        name: "React Fundamentals",
        keywords: ["React", "JSX", "Hooks"],
        createdBy: "Utpal",
        startTime: "2025-05-27 14:00",
        endTime: "2025-05-27 16:00"
      },
      {
        id: 3,
        name: "CSS Advanced Layouts",
        keywords: ["CSS", "Grid", "Flexbox"],
        createdBy: "Biswajit",
        startTime: "2025-05-29 10:00",
        endTime: "2025-05-29 12:00"
      },
      {
        id: 4,
        name: "Web Accessibility",
        keywords: ["A", "B", "System Design"],
        createdBy: "Jurier",
        startTime: "2025-06-01 13:00",
        endTime: "2025-06-01 15:00"
      }
    ],
    "Public Tests": [
      {
        id: 1,
        name: "JavaScript Basics",
        keywords: ["Programming", "Frontend", "Web"],
        createdBy: "Santu",
        startTime: "2025-05-25 09:00",
        endTime: "2025-05-25 11:00"
      },
      {
        id: 2,
        name: "React Fundamentals",
        keywords: ["React", "JSX", "Hooks"],
        createdBy: "Utpal",
        startTime: "2025-05-27 14:00",
        endTime: "2025-05-27 16:00"
      },
      {
        id: 3,
        name: "CSS Advanced Layouts",
        keywords: ["CSS", "Grid", "Flexbox"],
        createdBy: "Biswajit",
        startTime: "2025-05-29 10:00",
        endTime: "2025-05-29 12:00"
      },
      {
        id: 4,
        name: "Web Accessibility",
         keywords: ["A", "B", "System Design"],
        createdBy: "Jurier",
        startTime: "2025-06-01 13:00",
        endTime: "2025-06-01 15:00"
      }
    ],
    "Recommended Tests": [
       {
        id: 1,
        name: "JavaScript Basics",
        keywords: ["Programming", "Frontend", "Web"],
        createdBy: "Santu",
        startTime: "2025-05-25 09:00",
        endTime: "2025-05-25 11:00"
      },
      {
        id: 2,
        name: "React Fundamentals",
        keywords: ["React", "JSX", "Hooks"],
        createdBy: "Utpal",
        startTime: "2025-05-27 14:00",
        endTime: "2025-05-27 16:00"
      },
      {
        id: 3,
        name: "CSS Advanced Layouts",
        keywords: ["CSS", "Grid", "Flexbox"],
        createdBy: "Biswajit",
        startTime: "2025-05-29 10:00",
        endTime: "2025-05-29 12:00"
      },
      {
        id: 4,
        name: "Web Accessibility",
         keywords: ["A", "B", "System Design"],
        createdBy: "Jurier",
        startTime: "2025-06-01 13:00",
        endTime: "2025-06-01 15:00"
      }
    ]
  };
  
  const TestCard = ({ test }) => (
    <div className="bg-white rounded-lg shadow-md mt-4 overflow-hidden border border-gray-100 cursor-pointer hover:scale-105 transition transform hover:shadow-lg">
      <div className="bg-blue-50 px-4 py-3 border-b border-gray-200">
        <h3 className="text-lg font-semibold text-blue-800 text-center">{test.name}</h3>
      </div>
      <div className="p-4">
        <div className="flex flex-wrap gap-2 mb-3">
          {test.keywords.map((keyword, idx) => (
            <span key={idx} className="bg-gray-100 text-gray-600 text-xs px-3 py-1 rounded-full">
              {keyword}
            </span>
          ))}
        </div>
        <div className="grid grid-cols-2 gap-2 text-sm">
          <div className="col-span-2 flex items-center space-x-2 mb-2">
            <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
            </svg>
            <span className="text-gray-700">{test.createdBy}</span>
          </div>
          <div className="flex items-center space-x-2">
            <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
            </svg>
            <span className="text-gray-700">Start:</span>
          </div>
          <div className="text-gray-700">{test.startTime}</div>
          <div className="flex items-center space-x-2">
            <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            <span className="text-gray-700">End:</span>
          </div>
          <div className="text-gray-700">{test.endTime}</div>
        </div>
      </div>
    </div>
  );
  
  return (
  <div className="w-full min-h-screen p-2 sm:p-4 bg-gray-50">
    <div className="flex justify-start sm:justify-center mt-6 overflow-x-auto">
      <div className="flex space-x-1 sm:space-x-3 min-w-max px-2 sm:px-0">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => handleTabClick(tab.id)}
            className={`px-2 sm:px-4 md:px-6 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-medium transition-colors duration-200 flex items-center whitespace-nowrap flex-shrink-0
              ${activeTab === tab.id
                 ? "bg-blue-400 text-white"
                 : "bg-white text-gray-700 hover:bg-blue-50 border border-gray-200"
              }`}
          >
            <span className="truncate max-w-12 sm:max-w-none">
              {tab.label}
            </span>
            {tab.count && (
              <span className={`ml-1 sm:ml-2 px-1 sm:px-2 py-0.5 rounded-full text-xs flex-shrink-0 ${
                activeTab === tab.id
                   ? "bg-white text-blue-600"
                   : "bg-blue-100 text-blue-600"
              }`}>
                {tab.count}
              </span>
            )}
          </button>
        ))}
      </div>
    </div>
           
    <div className="mt-6">
      {isLoading ? (
        <div className="h-64 flex items-center justify-center">
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin"></div>
            <p className="mt-4 text-gray-600 font-medium">Loading...</p>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testCards[activeTab]?.map(test => (
            <TestCard key={test.id} test={test} />
          ))}
        </div>
      )}
    </div>
  </div>
);

}