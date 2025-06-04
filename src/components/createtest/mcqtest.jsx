import React, { useState } from "react";
import Header from "../common/Header";

const MCQTest = () => {
  const [questionNumber, setQuestionNumber] = useState("");
  const [question, setQuestion] = useState("");
  const [options, setOptions] = useState(["", "", "", ""]);

  const handleOptionChange = (index, value) => {
    const newOptions = [...options];
    newOptions[index] = value;
    setOptions(newOptions);
  };

  const handleUpload = () => {
    // Validate all fields
    if (
      !questionNumber.trim() ||
      !question.trim() ||
      options.some((opt) => !opt.trim())
    ) {
      alert("Please fill in all fields before uploading.");
      return;
    }

    const mcqData = {
      questionNumber,
      question,
      options,
    };

    console.log("Uploaded MCQ:", mcqData);
    alert("MCQ uploaded successfully!");

    // Reset form
    setQuestionNumber("");
    setQuestion("");
    setOptions(["", "", "", ""]);
  };

  return (
    <div className="flex-1 overflow-auto relative z-10 bg-gray-900 text-white">
      <Header title="Add MCQ Test Question" />

      <main className="max-w-4xl mx-auto py-10 px-4 lg:px-8 space-y-6">
        <div>
          <label className="block mb-2 text-sm font-medium">Question Number</label>
          <input
            type="text"
            value={questionNumber}
            onChange={(e) => setQuestionNumber(e.target.value)}
            className="w-full p-3 rounded-md bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-[#4F46E5]"
            
          />
        </div>

        <div>
          <label className="block mb-2 text-sm font-medium">Question</label>
          <textarea
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            className="w-full p-3 rounded-md bg-gray-800 text-white border border-gray-700 h-24 focus:outline-none focus:border-[#4F46E5]"
           
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {options.map((option, index) => (
            <div key={index}>
              <label className="block mb-2 text-sm font-medium">Option {index + 1}</label>
              <input
                type="text"
                value={option}
                onChange={(e) => handleOptionChange(index, e.target.value)}
                className="w-full p-3 rounded-md bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-[#4F46E5]"
               
              />
            </div>
          ))}
        </div>

        <button
          onClick={handleUpload}
          className="px-6 py-2 rounded-lg font-medium transition"
          style={{ backgroundColor: "#4F46E5", color: "white" }}
          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#4338CA")}
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#4F46E5")}
        >
          Upload
        </button>
      </main>
    </div>
  );
};

export default MCQTest;
