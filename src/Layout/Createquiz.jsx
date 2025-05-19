import React from 'react';

const Createquiz = ({ showModal, setShowModal }) => {
  if (!showModal) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white w-[75%] h-[75%] rounded-lg shadow-lg p-6 relative">
        <button
          onClick={() => setShowModal(false)}
          className="absolute top-2 right-2 text-gray-500 hover:text-black text-2xl"
        >
          &times;
        </button>
        <h2 className="text-xl font-bold mb-4">Create Test</h2>
        <p>Create test page content.</p>
        <p>Don’t worry sibu chimakandi, I will complete this section as soon as possible 😁</p>
      </div>
    </div>
  );
};

export default Createquiz;
