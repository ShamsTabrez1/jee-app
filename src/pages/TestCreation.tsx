import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BookOpen, Clock, Filter } from 'lucide-react';

function TestCreation() {
  const navigate = useNavigate();
  const [selectedSubjects, setSelectedSubjects] = useState<string[]>([]);
  const [duration, setDuration] = useState(180); // 3 hours in minutes
  const [yearRange, setYearRange] = useState({ start: 2020, end: 2024 });

  const subjects = [
    {
      name: 'Physics',
      chapters: ['Mechanics', 'Electromagnetism', 'Optics', 'Modern Physics'],
    },
    {
      name: 'Chemistry',
      chapters: ['Physical', 'Inorganic', 'Organic', 'States of Matter'],
    },
    {
      name: 'Mathematics',
      chapters: ['Algebra', 'Calculus', 'Coordinate Geometry', 'Trigonometry'],
    },
  ];

  const handleCreateTest = () => {
    // In a real app, this would create a test and store it
    navigate('/exam/new-test-id');
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="bg-white rounded-xl p-6 shadow-md">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">Create New Test</h1>
        <p className="text-gray-600">
          Customize your test by selecting subjects and preferences
        </p>
      </div>

      {/* Subject Selection */}
      <div className="bg-white rounded-xl p-6 shadow-md">
        <div className="flex items-center space-x-2 mb-4">
          <BookOpen className="h-5 w-5 text-indigo-600" />
          <h2 className="text-xl font-semibold text-gray-900">Select Subjects</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {subjects.map((subject) => (
            <div key={subject.name} className="space-y-4">
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={selectedSubjects.includes(subject.name)}
                  onChange={(e) => {
                    if (e.target.checked) {
                      setSelectedSubjects([...selectedSubjects, subject.name]);
                    } else {
                      setSelectedSubjects(
                        selectedSubjects.filter((s) => s !== subject.name)
                      );
                    }
                  }}
                  className="rounded text-indigo-600 focus:ring-indigo-500"
                />
                <span className="font-medium">{subject.name}</span>
              </label>
              <div className="pl-6 space-y-2">
                {subject.chapters.map((chapter) => (
                  <label key={chapter} className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      className="rounded text-indigo-600 focus:ring-indigo-500"
                    />
                    <span className="text-sm text-gray-600">{chapter}</span>
                  </label>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Test Settings */}
      <div className="bg-white rounded-xl p-6 shadow-md">
        <div className="flex items-center space-x-2 mb-6">
          <Filter className="h-5 w-5 text-indigo-600" />
          <h2 className="text-xl font-semibold text-gray-900">Test Settings</h2>
        </div>

        <div className="space-y-6">
          {/* Duration Setting */}
          <div>
            <label className="flex items-center space-x-2 mb-2">
              <Clock className="h-5 w-5 text-indigo-600" />
              <span className="font-medium">Duration (minutes)</span>
            </label>
            <input
              type="number"
              value={duration}
              onChange={(e) => setDuration(parseInt(e.target.value))}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            />
          </div>

          {/* Year Range */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block font-medium mb-2">Start Year</label>
              <input
                type="number"
                value={yearRange.start}
                onChange={(e) =>
                  setYearRange({ ...yearRange, start: parseInt(e.target.value) })
                }
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              />
            </div>
            <div>
              <label className="block font-medium mb-2">End Year</label>
              <input
                type="number"
                value={yearRange.end}
                onChange={(e) =>
                  setYearRange({ ...yearRange, end: parseInt(e.target.value) })
                }
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Create Button */}
      <button
        onClick={handleCreateTest}
        className="w-full bg-indigo-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-indigo-700 transition-colors"
      >
        Create Test
      </button>
    </div>
  );
}

export default TestCreation;