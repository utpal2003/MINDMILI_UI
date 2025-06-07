// QuestionSection.jsx
import React, { useState, useEffect } from "react";
import { IoClose } from "react-icons/io5"; 
import { IoMdCreate,IoMdTrash,IoMdAdd } from "react-icons/io";

const QuestionSection = ({
  onSave,
  onCancel,
  onDelete, // New prop for delete
  onEdit,   // New prop for edit
  questionData,
  questionIndex,
}) => {
  const [questionText, setQuestionText] = useState(questionData.questionText || "");
  const [options, setOptions] = useState(questionData.options || ["", ""]);
  const [correctOptions, setCorrectOptions] = useState(questionData.correctAnswers || []);
  const [isEditing, setIsEditing] = useState(questionData.isEditing);

  // Update local state when questionData prop changes
  useEffect(() => {
    setQuestionText(questionData.questionText || "");
    setOptions(questionData.options || ["", ""]);
    setCorrectOptions(questionData.correctAnswers || []);
    setIsEditing(questionData.isEditing);
  }, [questionData]);

  const handleOptionChange = (idx, value) => {
    const updated = [...options];
    updated[idx] = value;
    setOptions(updated);
  };

  const handleAddOption = () => {
    setOptions([...options, ""]);
  };

  const handleRemoveOption = (idx) => {
    const newOptions = options.filter((_, i) => i !== idx);
    const updatedCorrect = correctOptions
      .filter((i) => i !== idx)
      .map((i) => (i > idx ? i - 1 : i));
    setOptions(newOptions);
    setCorrectOptions(updatedCorrect);
  };

  const handleCheckboxChange = (idx) => {
    if (correctOptions.includes(idx)) {
      setCorrectOptions(correctOptions.filter((i) => i !== idx));
    } else {
      setCorrectOptions([...correctOptions, idx]);
    }
  };

  const isSaveDisabled =
    !questionText.trim() || options.filter((opt) => opt.trim() !== "").length === 0;

  const handleSave = () => {
    const trimmedOptions = options.map((opt) => opt.trim()).filter(Boolean);
    if (isSaveDisabled) return;

    onSave(questionData.id, {
      questionText: questionText.trim(),
      options: trimmedOptions,
      correctAnswers: correctOptions,
    });
    // setIsEditing(false);
  };

  const handleEdit = () => {
    onEdit(questionData.id); 
  };

  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete this question?")) {
      onDelete(questionData.id); // Call parent's delete handler
    }
  };

  const handleCancel = () => {
    if (onCancel) {
      onCancel(questionData.id);
    }
  };

  return (
    <div className="m-4 px-5 py-4 md:m-6 md:p-4 bg-white rounded-2xl shadow-2xl">
      <div className="flex flex-col space-y-3">
        {isEditing ? (
          <>
            <h2 className="text-xl text-gray-700">Question {questionIndex + 1} (Editing)</h2>
            <div>
              <label className="font-medium mb-2">Question Text :-</label>
              <textarea
                placeholder="Enter the Question"
                className="w-full px-4 py-2 border border-gray-400 rounded my-3 bg-[#f8f9fe] focus:ring-2 focus:ring-blue-500"
                value={questionText}
                onChange={(e) => setQuestionText(e.target.value)}
              />
            </div>

            <div>
              <label className="font-medium mb-2">Options (Mark correct answer(s))</label>
              <div className="space-y-4">
                {options.map((opt, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      checked={correctOptions.includes(idx)}
                      onChange={() => handleCheckboxChange(idx)}
                      className="w-5 h-5"
                    />
                    <input
                      type="text"
                      placeholder={`Option ${idx + 1}`}
                      value={opt}
                      onChange={(e) => handleOptionChange(idx, e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    {options.length > 1 && (
                      <button
                        type="button"
                        onClick={() => handleRemoveOption(idx)}
                        className="text-gray-400 hover:text-red-500 text-xl"
                      >
                        <IoClose /> {/* This is where IoClose was being used */}
                      </button>
                    )}
                  </div>
                ))}
              </div>

              <button
                type="button"
                onClick={handleAddOption}
                className="mt-4 px-3 py-2 border border-gray-300 rounded bg-gray-100 hover:bg-gray-200 flex justify-center items-center gap-2"
              >
                <IoMdAdd />
                <span className="font-semibold">Add Option</span>
              </button>
            </div>

            <div className="flex justify-end gap-4 mt-2">
              <button
                type="button"
                onClick={handleCancel}
                className="px-4 py-2 bg-gray-300 hover:bg-gray-400 text-gray-700 rounded-md"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={handleSave}
                disabled={isSaveDisabled}
                className={`px-4 py-2 rounded-md ${
                  isSaveDisabled
                    ? "bg-blue-300 cursor-not-allowed"
                    : "bg-blue-500 hover:bg-blue-600 text-white"
                }`}
              >
                Save Question
              </button>
            </div>
          </>
        ) : (
          // Display mode (when not editing)
          <div className="flex justify-between items-center py-2">
            <h2 className="text-xl text-gray-700">
              {questionIndex + 1}. {questionText}
            </h2>
            <div className="flex gap-4">
              <button
                type="button"
                onClick={handleEdit}
                className="text-blue-500 hover:text-blue-700 text-2xl"
                title="Edit Question"
              >
                <IoMdCreate />
              </button>
              <button
                type="button"
                onClick={handleDelete}
                className="text-red-500 hover:text-red-700 text-2xl"
                title="Delete Question"
              >
                <IoMdTrash />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default QuestionSection;