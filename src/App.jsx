import React, { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const TextAnalysisApp = () => {
  const [text, setText] = useState('');
  const [uniqueWordCount, setUniqueWordCount] = useState(0);
  const [characterCount, setCharacterCount] = useState(0);
  const [searchString, setSearchString] = useState('');
  const [replaceString, setReplaceString] = useState('');

  // Function to calculate unique words and character count excluding spaces and punctuation
  useEffect(() => {
    const words = text.toLowerCase().match(/\b\w+\b/g);
    const uniqueWords = words ? new Set(words) : new Set();
    setUniqueWordCount(uniqueWords.size);

    const chars = text.replace(/[^a-zA-Z0-9]/g, ''); // Only keep letters and numbers
    setCharacterCount(chars.length);
  }, [text]);

  // Handle replacing string without highlighting
  const handleReplaceAll = () => {
    if (searchString.trim() === '') return;

    const regex = new RegExp(`(${searchString})`, 'gi'); // Case-insensitive replacement
    const newText = text.replace(regex, replaceString); // Perform replacement in the text
    setText(newText); // Update the textarea value with the replaced text
  };

  // Prepare data for charts
  const chartData = {
    labels: ['Unique Words', 'Characters (Excl. spaces and punctuation)'],
    datasets: [
      {
        label: 'Text Analysis Data',
        data: [uniqueWordCount, characterCount],
        backgroundColor: ['#3b82f6', '#34d399'],
      },
    ],
  };

  const chartOptions = {
    scales: {
      x: {
        title: {
          display: true,
          text: 'Metrics',
        },
      },
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Count',
        },
      },
    },
  };

  return (
    <div className="TextAnalysisApp max-w-7xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Real-Time Text Analysis</h1>

      {/* Flexbox for Textarea and Graph */}
      <div className="flex flex-row justify-between lg:flex-row gap-6">
        {/* Left Side: Textarea */}
        <div className="w-full lg:w-3/5 relative">
          {/* Textarea (in front) */}
          <textarea
            className="w-full h-64 p-3 border rounded-lg mb-6 block bg-transparent relative z-10 text-gray-900 caret-blue-600"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Type or paste text here..."
            style={{ whiteSpace: 'pre-wrap', overflowWrap: 'break-word' }}
          />
        </div>

        {/* Right Side: Graph */}
        <div className="w-full lg:w-2/5 bg-white p-4 rounded-md shadow-lg">
          <h2 className="text-lg font-semibold mb-4 text-center">Text Analysis Summary</h2>
          <div className="relative mx-auto" style={{ height: '300px', width: '100%' }}>
            <Bar data={chartData} options={chartOptions} />
          </div>
        </div>
      </div>

      {/* Flexbox for Inputs and Counters */}
      <div className="flex flex-col lg:flex-row gap-6 mt-6">
        {/* Left Side: Inputs for String Replacement */}
        <div className="w-full lg:w-3/5 bg-white p-4 rounded-md shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">String Replacement</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-md font-semibold mb-2">Find:</label>
              <input
                type="text"
                value={searchString}
                onChange={(e) => setSearchString(e.target.value)}
                className="w-full p-3 border rounded-lg transition-all hover:shadow-lg focus:outline-none focus:border-blue-500"
                placeholder="Enter string to search for"
              />
            </div>
            <div>
              <label className="block text-md font-semibold mb-2">Replace with:</label>
              <input
                type="text"
                value={replaceString}
                onChange={(e) => setReplaceString(e.target.value)}
                className="w-full p-3 border rounded-lg transition-all hover:shadow-lg focus:outline-none focus:border-blue-500"
                placeholder="Enter replacement string"
              />
            </div>
          </div>

          <button
            onClick={handleReplaceAll}
            className="mt-4 w-full bg-blue-600 text-white p-3 rounded-lg hover:opacity-95 uppercase transition-all"
          >
            Replace All
          </button>
        </div>

        {/* Right Side: Counters */}
        <div className="w-full lg:w-2/5 grid grid-cols-1 gap-6">
          <div className="bg-white p-4 rounded-md shadow-lg text-center">
            <h2 className="text-lg font-semibold">Unique Word Count</h2>
            <p className="text-2xl font-bold">{uniqueWordCount}</p>
          </div>
          <div className="bg-white p-4 rounded-md shadow-lg text-center">
            <h2 className="text-lg font-semibold">Character Count (Excl. Spaces & Punctuation)</h2>
            <p className="text-2xl font-bold">{characterCount}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TextAnalysisApp;
