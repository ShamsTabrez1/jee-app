import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Clock } from 'lucide-react';

function ExamSimulator() {
  const { testId } = useParams();
  const [timeLeft, setTimeLeft] = useState(180 * 60); // 3 hours in seconds
  const [currentQuestion, setCurrentQuestion] = useState(0);

  // Sample questions (in a real app, these would come from an API)
  const questions = [
    {
      id: 1,
      subject: 'Physics',
      text: 'A particle moves in a circular path of radius 2m. If it completes one revolution in 4 seconds, what is its angular velocity?',
      options: ['π/2 rad/s', 'π rad/s', '2π rad/s', '4π rad/s'],
      correctAnswer: 0,
    },
    // Add more questions...
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 0) {
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hours.toString().padStart(2, '0')}:${minutes
      .toString()
      .padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Timer Bar */}
      <div className="bg-white rounded-xl p-4 shadow-md sticky top-4 z-10">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Clock className="h-5 w-5 text-indigo-600" />
            <span className="font-medium">Time Remaining:</span>
            <span className="text-xl font-bold text-indigo-600">
              {formatTime(timeLeft)}
            </span>
          </div>
          <div className="text-gray-600">
            Question {currentQuestion + 1} of {questions.length}
          </div>
        </div>
      </div>

      {/* Question Area */}
      <div className="bg-white rounded-xl p-6 shadow-md">
        <div className="space-y-6">
          <div className="flex items-center space-x-2">
            <span className="bg-indigo-100 text-indigo-800 text-sm font-medium px-2.5 py-0.5 rounded">
              {questions[currentQuestion].subject}
            </span>
            <span className="text-gray-500">Question {currentQuestion + 1}</span>
          </div>

          <p className="text-lg text-gray-900">
            {questions[currentQuestion].text}
          </p>

          <div className="space-y-4">
            {questions[currentQuestion].options.map((option, index) => (
              <label
                key={index}
                className="flex items-center space-x-3 p-4 rounded-lg border border-gray-200 hover:bg-gray-50 cursor-pointer"
              >
                <input
                  type="radio"
                  name="answer"
                  value={index}
                  className="h-4 w-4 text-indigo-600 focus:ring-indigo-500"
                />
                <span className="text-gray-700">{option}</span>
              </label>
            ))}
          </div>
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-between">
        <button
          onClick={() => setCurrentQuestion((prev) => Math.max(0, prev - 1))}
          disabled={currentQuestion === 0}
          className="px-6 py-2 rounded-lg bg-gray-100 text-gray-700 hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Previous
        </button>
        <button
          onClick={() =>
            setCurrentQuestion((prev) =>
              Math.min(questions.length - 1, prev + 1)
            )
          }
          className="px-6 py-2 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700"
        >
          {currentQuestion === questions.length - 1 ? 'Submit' : 'Next'}
        </button>
      </div>
    </div>
  );
}

export default ExamSimulator;