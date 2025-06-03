import React, { useState } from "react"
import { MdOutlineCancel } from "react-icons/md";
const Createquiz = ({ showModal, setShowModal }) => {



  const [keywords, setKeywords] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && inputValue.trim() !== "") {
      e.preventDefault();
      if (!keywords.includes(inputValue.trim())) {
        // console.log(inputValue.trim())
        setKeywords([...keywords, inputValue.trim()]);
      }
      setInputValue("");
    }
  };

  const removeKeyword = (keywordToRemove) => {
    setKeywords(keywords.filter((kw) => kw !== keywordToRemove));
  };



  if (!showModal) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-[#f8f9fe] w-[95%] max-w-3xl h-[95%] rounded-lg shadow-lg relative flex flex-col overflow-hidden">

        {/* Close Button */}
        <button
          onClick={() => setShowModal(false)}
          className="absolute top-6 right-5 text-gray-500 hover:text-black text-3xl font-bold z-40"
        >
          {/* &times; */}
          <MdOutlineCancel />
        </button>

        {/* Fixed Header */}
        <div className="pt-8 border-b border-gray-300 bg-white z-30  top-0 ">
          <h2 className="text-2xl pb-2 mb-4 ml-6 font-semibold ">
            Create a New Test
          </h2>
        </div>

        {/* Scrollable Body */}
        <div className="flex-1 overflow-y-scroll m-4 p-2 md:m-8 md:p-4 bg-white rounded-lg">
          <div className="space-y-4 md:px-2">
            {/* Test Label */}
            <div>
              <label className=" mb-1 block font-medium ">Test Label</label>
              <input
                type="text"
                placeholder="E.g., 'Advanced JS Quiz V1'"
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 bg-[#f8f9fe]"
              />
            </div>

            {/* Description */}
            <div>
              <label className=" mb-1 block font-medium ">Description (Public)</label>
              <textarea
                placeholder="Enter a brief description visible to participants"
                className="w-full px-4 py-2 border border-gray-300 rounded h-20 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-[#f8f9fe]"
              />
            </div>

            {/* Visibility */}
            <div>
              <label className="block font-medium mb-1">Visibility</label>
              <div className="flex items-center gap-4">
                <label className="flex items-center gap-2">
                  <input type="radio" name="visibility" defaultChecked />
                  <span>Public</span>
                </label>
                <label className="flex items-center gap-2">
                  <input type="radio" name="visibility" />
                  <span>Private</span>
                </label>
              </div>
            </div>

            {/* Start Time */}
            <div>
              <label className="block font-medium mb-1">Start Time</label>
              <input
                type="datetime-local"
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 bg-[#f8f9fe]"
              />
              <p className="text-sm text-gray-500 mt-1">Participants can only join after this time.</p>
            </div>

            {/* End Time */}
            <div>
              <label className="block font-medium mb-1">End Time</label>
              <input
                type="datetime-local"
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 bg-[#f8f9fe]"
              />
            </div>

            {/* Time Limit */}
            <div>
              <label className="block font-medium mb-1">Time Limit</label>
              <div className="flex gap-2">
                <input
                  type="number"
                  placeholder="Optional"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md  focus:outline-none focus:ring-2 focus:ring-blue-500 bg-[#f8f9fe]"
                />
                <select
                  className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-[#f8f9fe]"
                  defaultValue="Minutes"
                >
                  <option>Minutes</option>
                  <option>Hours</option>
                </select>
              </div>
              <p className=" mt-1 text-sm text-gray-500 ">
                Duration once started. Applies if no fixed End Time is set, or limits duration within Start/End window.
              </p>
            </div>



            {/* Expiry Date */}
            <div>
              <label className="block font-medium mb-1">Expiry Date</label>
              <input
                type="datetime-local"
                placeholder="dd-mm-yyyy --:--"
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 bg-[#f8f9fe]"
              />
              <p className="text-sm text-gray-500 mt-1">
                Alternative to End Time; test becomes unavailable after this.
              </p>
            </div>


            {/* Keywords (Topics) */}


            <div>
              <label className="block font-medium mb-2">Keywords (Topics)</label>
              <div className="w-full px-2 py-2 border border-gray-200 rounded bg-[#f8f9fe] flex flex-col gap-2">

                {/* Tags Row - Show above */}
                <div className="flex flex-wrap items-center gap-3 ">
                  {keywords.map((keyword, index) => (
                    <span key={index} className="px-2 py-1 bg-gray-300 rounded-full text-sm flex items-center gap-1">{keyword} 
                    
                    <button type="button" onClick={()=>removeKeyword(keyword)} className="mt-[3.5px] ml-1 text-red-500 hover:text-red-800"><MdOutlineCancel /></button>
                    
                    </span>
                  ))}

                </div>

                {/* Input Row - Show below */}
                <input
                  type="text"
                  placeholder="Add keywords & press Enter"
                  className="w-full px-2 py-1 bg-transparent outline-none"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyDown={handleKeyDown}
                />
              </div>
            </div>




            {/* Buttons */}
            <div className="flex justify-between items-center mt-8">
              <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-4 py-2 rounded">
                + Add Question
              </button>
              <div className="flex gap-4">
                <button className="bg-gray-300 text-gray-700 px-4 py-2 rounded cursor-not-allowed" disabled>
                  Preview Test
                </button>
                <button className="bg-blue-500 text-white px-4 py-2 rounded cursor-not-allowed" disabled>
                  Publish Test
                </button>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Createquiz;
