import React from 'react';
import { MdOutlineCancel } from 'react-icons/md';

const PreviewQuiz = ({ questions, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
      <div className="bg-white w-[90%] max-w-3xl h-[90%] rounded-lg shadow-lg relative flex flex-col overflow-hidden p-6">
        <h2 className="text-2xl font-semibold mb-4 border-b pb-2">Test Preview</h2>
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-black text-3xl font-bold"
        >
          <MdOutlineCancel />
        </button>

        <div className="overflow-y-auto flex-grow pr-4">
          {questions.length === 0 ? (
            <p className="text-gray-600">No questions added yet. Add and save questions to preview them here.</p>
          ) : (
            questions.map((question, index) => (
              <div key={question.id} className="mb-6 p-4 border border-gray-200 rounded-md bg-gray-50">
                <p className="font-medium text-lg mb-2">
                  Question {index + 1}: {question.questionText}
                </p>
                <div className="space-y-2">
                  {question.options.map((option, optIndex) => (
                    <div key={optIndex} className="flex items-center">
                      <input
                        type={question.correctAnswers.length > 1 ? 'checkbox' : 'radio'}
                        name={`question-${question.id}`}
                        value={option}
                        checked={question.correctAnswers.includes(optIndex)}
                        readOnly 
                        className="mr-2"
                      />
                      <label className={question.correctAnswers.includes(optIndex) ? 'font-semibold text-green-700' : ''}>
                        {option}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default PreviewQuiz;