

// Createquiz.jsx
// import React, { useState } from "react";
// import { MdOutlineCancel } from "react-icons/md";
// import QuestionSection from "./QuestionSection";
// import { FaPlus } from "react-icons/fa";
// import { IoEyeOutline } from "react-icons/io5";
// import { BsFillSendFill } from "react-icons/bs";

// const Createquiz = ({ showModal, setShowModal }) => {
//   const [keywords, setKeywords] = useState([]);
//   const [inputValue, setInputValue] = useState("");
//   const [questions, setQuestions] = useState([]); // Start with an empty array

//   // Handle Keywords
//   const handleKeyDown = (e) => {
//     if (e.key === "Enter" && inputValue.trim() !== "") {
//       e.preventDefault();
//       if (!keywords.includes(inputValue.trim())) {
//         setKeywords([...keywords, inputValue.trim()]);
//       }
//       setInputValue("");
//     }
//   };

//   const removeKeyword = (keywordToRemove) => {
//     setKeywords(keywords.filter((kw) => kw !== keywordToRemove));
//   };

//   // Handle Questions
//   const handleAddQuestion = () => {
//     const isAnyQuestionEditing = questions.some((q) => q.isEditing);
//     if (!isAnyQuestionEditing) {
//       setQuestions((prevQuestions) => [
//         ...prevQuestions,
//         {
//           id: Date.now(), // Unique ID for key
//           isEditing: true, // New question starts in editing mode
//           questionText: "",
//           options: ["", ""], // Initialize with two empty options
//           correctAnswers: [],
//         },
//       ]);
//     }
//   };

//   const handleSaveQuestion = (id, questionData) => {
//     setQuestions((prevQuestions) =>
//       prevQuestions.map((q) =>
//         q.id === id ? { ...questionData, id, isEditing: false } : q
//       )
//     );
//     console.log("Saved Question:", questionData); 
//   };

//   const handleDeleteQuestion = (id) => {
//     setQuestions((prevQuestions) => prevQuestions.filter((q) => q.id !== id));
//   };

//   const handleEditQuestion = (id) => {
//     // Set the specific question to editing mode
//     setQuestions((prevQuestions) =>
//       prevQuestions.map((q) => (q.id === id ? { ...q, isEditing: true } : q))
//     );
//   };

//   const handleCancelQuestion = (id) => {
//     setQuestions((prevQuestions) =>
//       prevQuestions.filter((q) => q.id !== id || (q.id === id && !q.isEditing))
//     );
//   };

//   // Check if any question is currently in an editing state
//   const isAddingOrEditingQuestion = questions.some((q) => q.isEditing);

//   if (!showModal) return null;

//   return (
//     <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
//       <div className="bg-[#f8f9fe] w-[93%] max-w-5xl h-[95%] rounded-lg shadow-lg relative flex flex-col overflow-hidden">
//         {/* Fixed Header */}
//         <div className="pt-8 border-b border-gray-300 bg-white z-30 top-0">
//           <h2 className="text-2xl pb-2 mb-4 ml-6 font-semibold">Create a New Test</h2>
//           <button
//             onClick={() => setShowModal(false)}
//             className="absolute top-6 right-5 text-gray-500 hover:text-black text-3xl font-bold z-40"
//           >
//             <MdOutlineCancel />
//           </button>
//         </div>

//         {/* Scrollable Body */}
//         <div className="flex flex-col overflow-y-scroll px-4 md:px-6">
//           {/* Test Details */}
//           <div className="m-4 px-5 py-4 md:m-6 md:p-4 bg-white rounded-2xl shadow-2xl">
//             <div className="space-y-4 md:px-2">
//               <div>
//                 <label className="mb-1 block font-medium">Test Label</label>
//                 <input type="text" placeholder="E.g., 'Advanced JS Quiz V1'" className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 bg-[#f8f9fe]" />
//               </div>
//               <div>
//                 <label className="mb-1 block font-medium">Description (Public)</label>
//                 <textarea placeholder="Enter a brief description visible to participants" className="w-full px-4 py-2 border border-gray-300 rounded h-20 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-[#f8f9fe]" />
//               </div>
//               <div>
//                 <label className="block font-medium mb-1">Visibility</label>
//                 <div className="flex items-center gap-4">
//                   <label className="flex items-center gap-2">
//                     <input type="radio" name="visibility" defaultChecked />
//                     <span>Public</span>
//                   </label>
//                   <label className="flex items-center gap-2">
//                     <input type="radio" name="visibility" />
//                     <span>Private</span>
//                   </label>
//                 </div>
//               </div>
//               <div>
//                 <label className="block font-medium mb-1">Start Time</label>
//                 <input type="datetime-local" className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 bg-[#f8f9fe]" />
//               </div>
//               <div>
//                 <label className="block font-medium mb-1">End Time</label>
//                 <input type="datetime-local" className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 bg-[#f8f9fe]" />
//               </div>
//               <div>
//                 <label className="block font-medium mb-1">Time Limit</label>
//                 <div className="flex gap-2">
//                   <input type="number" placeholder="Optional" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-[#f8f9fe]" />
//                   <select className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-[#f8f9fe]" defaultValue="Minutes">
//                     <option>Minutes</option>
//                     <option>Hours</option>
//                   </select>
//                 </div>
//               </div>
//               <div>
//                 <label className="block font-medium mb-1">Expiry Date</label>
//                 <input type="datetime-local" className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 bg-[#f8f9fe]" />
//               </div>
//               <div>
//                 <label className="block font-medium mb-2">Keywords (Topics)</label>
//                 <div className="w-full px-2 py-2 border border-gray-200 rounded bg-[#f8f9fe] flex flex-col gap-2">
//                   <div className="flex flex-wrap items-center gap-3">
//                     {keywords.map((keyword, index) => (
//                       <span key={index} className="px-2 py-1 bg-gray-300 rounded-full text-sm flex items-center gap-1">
//                         {keyword}
//                         <button type="button" onClick={() => removeKeyword(keyword)} className="mt-[3.5px] ml-1 text-red-500 hover:text-red-800"><MdOutlineCancel /></button>
//                       </span>
//                     ))}
//                   </div>
//                   <input
//                     type="text"
//                     placeholder="Add keywords & press Enter"
//                     className="w-full px-2 py-1 bg-transparent outline-none"
//                     value={inputValue}
//                     onChange={(e) => setInputValue(e.target.value)}
//                     onKeyDown={handleKeyDown}
//                   />
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Total Questions count */}
//           <div className="mx-4 my-2 px-5 py-4 md:mx-6 md:p-4 bg-white rounded-2xl shadow-2xl">
//             <h2 className="text-xl h-16 pt-2">Total Questions ({questions.filter(q => !q.isEditing).length})</h2>
//           </div>

//           {/* Questions list */}
//           {questions.map((q, index) => (
//             <QuestionSection
//               key={q.id}
//               questionIndex={index}
//               questionData={q}
//               onSave={handleSaveQuestion}
//               onDelete={handleDeleteQuestion} // Pass delete handler
//               onEdit={handleEditQuestion} // Pass edit handler
//               onCancel={handleCancelQuestion}
//             />
//           ))}
//         </div>

//         {/* Fixed Footer */}
//         <div className="mt-4 bg-white bottom-0 w-full border-t-2">
//           <div className="flex justify-end items-center p-5 gap-3">
//             <button
//               onClick={handleAddQuestion}
//               disabled={isAddingOrEditingQuestion}
//               className={`px-4 py-2 rounded-md flex justify-center items-center gap-2 text-white ${
//                 isAddingOrEditingQuestion ? "bg-gray-400 cursor-not-allowed" : "bg-[#038C4C] hover:bg-[#02733E]"
//               }`}
//             >
//               <FaPlus className="pt-[2px]" /><span>Add Question</span>
//             </button>


//             <button className="bg-[#DFE9F2] hover:bg-[#CAC9C7] px-4 py-2 rounded-md flex justify-center items-center gap-2 text-gray">
//               <IoEyeOutline className="pt-[1px]" /><span>Preview Test</span>
//             </button>


//             <button className="bg-[#EBF2B3] hover:bg-[#F2CB05] px-4 py-2  flex justify-center items-center gap-2 hover:text-black">
//               <BsFillSendFill className="pt-[2px]" /><span>Publish Test</span>
//             </button>


//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Createquiz;





// Createquiz.jsx
import React, { useState } from "react";
import { MdOutlineCancel } from "react-icons/md";
import QuestionSection from "./QuestionSection";
import { FaPlus } from "react-icons/fa";
import { IoEyeOutline } from "react-icons/io5";
import { BsFillSendFill } from "react-icons/bs";
import PreviewQuiz from "./PreviewQuiz"; // Import the new component

const Createquiz = ({ showModal, setShowModal }) => {
  const [keywords, setKeywords] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [questions, setQuestions] = useState([]);
  const [showPreview, setShowPreview] = useState(false); // State to manage preview modal visibility

  // Handle Keywords
  const handleKeyDown = (e) => {
    if (e.key === "Enter" && inputValue.trim() !== "") {
      e.preventDefault();
      if (!keywords.includes(inputValue.trim())) {
        setKeywords([...keywords, inputValue.trim()]);
      }
      setInputValue("");
    }
  };

  const removeKeyword = (keywordToRemove) => {
    setKeywords(keywords.filter((kw) => kw !== keywordToRemove));
  };

  // Handle Questions
  const handleAddQuestion = () => {
    const isAnyQuestionEditing = questions.some((q) => q.isEditing);
    if (!isAnyQuestionEditing) {
      setQuestions((prevQuestions) => [
        ...prevQuestions,
        {
          id: Date.now(), // Unique ID for key
          isEditing: true, // New question starts in editing mode
          questionText: "",
          options: ["", ""],
          correctAnswers: [],
        },
      ]);
    }
  };

  const handleSaveQuestion = (id, questionData) => {
    setQuestions((prevQuestions) =>
      prevQuestions.map((q) =>
        q.id === id ? { ...questionData, id, isEditing: false } : q
      )
    );
    console.log("Saved Question:", questionData);
  };

  const handleDeleteQuestion = (id) => {
    setQuestions((prevQuestions) => prevQuestions.filter((q) => q.id !== id));
  };

  const handleEditQuestion = (id) => {
    // Set the specific question to editing mode
    setQuestions((prevQuestions) =>
      prevQuestions.map((q) => (q.id === id ? { ...q, isEditing: true } : q))
    );
  };

  const handleCancelQuestion = (id) => {
    setQuestions((prevQuestions) =>
      prevQuestions.filter((q) => q.id !== id || (q.id === id && !q.isEditing))
    );
  };

  // Check if any question is currently in an editing state
  const isAddingOrEditingQuestion = questions.some((q) => q.isEditing);

  // Filter out questions that are still in editing mode for the "Total Questions" count
  const savedQuestionsCount = questions.filter(q => !q.isEditing).length;

  if (!showModal) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-[#f8f9fe] w-[93%] max-w-5xl h-[95%] rounded-lg shadow-lg relative flex flex-col overflow-hidden">
        {/* Fixed Header */}
        <div className="pt-8 border-b border-gray-300 bg-white z-30 top-0">
          <h2 className="text-2xl pb-2 mb-4 ml-6 font-semibold">Create a New Test</h2>
          <button
            onClick={() => setShowModal(false)}
            className="absolute top-6 right-5 text-gray-500 hover:text-black text-3xl font-bold z-40"
          >
            <MdOutlineCancel />
          </button>
        </div>

        {/* Scrollable Body */}
        <div className="flex flex-col overflow-y-scroll px-4 md:px-6">
          {/* Test Details */}
          <div className="m-4 px-5 py-4 md:m-6 md:p-4 bg-white rounded-2xl shadow-2xl">
            <div className="space-y-4 md:px-2">
              <div>
                <label className="mb-1 block font-medium">Test Label</label>
                <input type="text" placeholder="E.g., 'Advanced JS Quiz V1'" className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 bg-[#f8f9fe]" />
              </div>
              <div>
                <label className="mb-1 block font-medium">Description (Public)</label>
                <textarea placeholder="Enter a brief description visible to participants" className="w-full px-4 py-2 border border-gray-300 rounded h-20 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-[#f8f9fe]" />
              </div>
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
              <div>
                <label className="block font-medium mb-1">Start Time</label>
                <input type="datetime-local" className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 bg-[#f8f9fe]" />
              </div>
              <div>
                <label className="block font-medium mb-1">End Time</label>
                <input type="datetime-local" className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 bg-[#f8f9fe]" />
              </div>
              <div>
                <label className="block font-medium mb-1">Time Limit</label>
                <div className="flex gap-2">
                  <input type="number" placeholder="Optional" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-[#f8f9fe]" />
                  <select className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-[#f8f9fe]" defaultValue="Minutes">
                    <option>Minutes</option>
                    <option>Hours</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block font-medium mb-1">Expiry Date</label>
                <input type="datetime-local" className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 bg-[#f8f9fe]" />
              </div>
              <div>
                <label className="block font-medium mb-2">Keywords (Topics)</label>
                <div className="w-full px-2 py-2 border border-gray-200 rounded bg-[#f8f9fe] flex flex-col gap-2">
                  <div className="flex flex-wrap items-center gap-3">
                    {keywords.map((keyword, index) => (
                      <span key={index} className="px-2 py-1 bg-gray-300 rounded-full text-sm flex items-center gap-1">
                        {keyword}
                        <button type="button" onClick={() => removeKeyword(keyword)} className="mt-[3.5px] ml-1 text-red-500 hover:text-red-800"><MdOutlineCancel /></button>
                      </span>
                    ))}
                  </div>
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
            </div>
          </div>

          {/* Total Questions count */}
          <div className="mx-4 my-2 px-5 py-4 md:mx-6 md:p-4 bg-white rounded-2xl shadow-2xl">
            <h2 className="text-xl h-16 pt-2">Total Questions ({savedQuestionsCount})</h2>
          </div>

          {/* Questions list */}
          {questions.map((q, index) => (
            <QuestionSection
              key={q.id}
              questionIndex={index}
              questionData={q}
              onSave={handleSaveQuestion}
              onDelete={handleDeleteQuestion}
              onEdit={handleEditQuestion}
              onCancel={handleCancelQuestion}
            />
          ))}
        </div>

        {/* Fixed Footer */}
        <div className="mt-4 bg-white bottom-0 w-full border-t-2">
          <div className="flex justify-end items-center p-5 gap-3">
            <button
              onClick={handleAddQuestion}
              disabled={isAddingOrEditingQuestion}
              className={`px-4 py-2 rounded-md flex justify-center items-center gap-2 text-white ${
                isAddingOrEditingQuestion ? "bg-gray-400 cursor-not-allowed" : "bg-[#038C4C] hover:bg-[#02733E]"
              }`}
            >
              <FaPlus className="pt-[2px]" /><span>Add Question</span>
            </button>


            <button
              onClick={() => setShowPreview(true)} // Open preview modal
              disabled={savedQuestionsCount === 0 || isAddingOrEditingQuestion} // Disable if no saved questions or editing
              className={`px-4 py-2 rounded-md flex justify-center items-center gap-2 ${
                savedQuestionsCount === 0 || isAddingOrEditingQuestion ? "bg-gray-300 text-gray-500 cursor-not-allowed" : "bg-[#DFE9F2] hover:bg-[#CAC9C7] text-gray"
              }`}
            >
              <IoEyeOutline className="pt-[1px]" /><span>Preview Test</span>
            </button>


            <button className="bg-[#EBF2B3] hover:bg-[#F2CB05] px-4 py-2  flex justify-center items-center gap-2 hover:text-black">
              <BsFillSendFill className="pt-[2px]" /><span>Publish Test</span>
            </button>
          </div>
        </div>
      </div>

      {/* PreviewQuiz Modal */}
      {showPreview && (
        <PreviewQuiz
          questions={questions.filter(q => !q.isEditing)} // Pass only saved questions
          onClose={() => setShowPreview(false)}
        />
      )}
    </div>
  );
};

export default Createquiz;