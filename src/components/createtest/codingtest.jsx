import React, { useState } from "react";
import Header from "../common/Header";

const CodingTest = () => {
  const [questionNumber, setQuestionNumber] = useState("");
  const [description, setDescription] = useState("");
  const [inputExample, setInputExample] = useState("");
  const [outputExample, setOutputExample] = useState("");

  const handleUpload = () => {
    if (!questionNumber || !description || !inputExample || !outputExample) {
      alert("Please fill in all fields before uploading.");
      return;
    }

    const questionData = {
      questionNumber,
      description,
      inputExample,
      outputExample,
    };

    console.log("Uploaded Question:", questionData);
    alert("Question uploaded successfully!");

    setQuestionNumber("");
    setDescription("");
    setInputExample("");
    setOutputExample("");
  };

  return (
    <div className="flex-1 overflow-auto relative z-10 bg-gray-900 text-white">
      <Header title="Add Coding Test Question" />

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
          <label className="block mb-2 text-sm font-medium">Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full p-3 rounded-md bg-gray-800 text-white border border-gray-700 h-32 focus:outline-none focus:border-[#4F46E5]"
            
          />
        </div>

        <div>
          <label className="block mb-2 text-sm font-medium">Input</label>
          <input
            type="text"
            value={inputExample}
            onChange={(e) => setInputExample(e.target.value)}
            className="w-full p-3 rounded-md bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-[#4F46E5]"
            
          />
        </div>

        <div>
          <label className="block mb-2 text-sm font-medium">Output</label>
          <input
            type="text"
            value={outputExample}
            onChange={(e) => setOutputExample(e.target.value)}
            className="w-full p-3 rounded-md bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-[#4F46E5]"
           
          />
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

export default CodingTest;
