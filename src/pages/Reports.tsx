import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from 'recharts';
import { TrendingUp, Target, Clock } from 'lucide-react';

function Reports() {
  // Sample data (in a real app, this would come from an API)
  const subjectPerformance = [
    { subject: 'Physics', score: 85 },
    { subject: 'Chemistry', score: 78 },
    { subject: 'Mathematics', score: 92 },
  ];

  const topicBreakdown = [
    { name: 'Mechanics', value: 30 },
    { name: 'Thermodynamics', value: 20 },
    { name: 'Electromagnetism', value: 25 },
    { name: 'Modern Physics', value: 25 },
  ];

  const COLORS = ['#4F46E5', '#818CF8', '#A5B4FC', '#C7D2FE'];

  return (
    <div className="space-y-8">
      {/* Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-xl p-6 shadow-md">
          <div className="flex items-center space-x-3">
            <div className="bg-indigo-100 p-3 rounded-lg">
              <TrendingUp className="h-6 w-6 text-indigo-600" />
            </div>
            <div>
              <p className="text-sm text-gray-600">Average Score</p>
              <p className="text-2xl font-bold text-gray-900">85%</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl p-6 shadow-md">
          <div className="flex items-center space-x-3">
            <div className="bg-indigo-100 p-3 rounded-lg">
              <Target className="h-6 w-6 text-indigo-600" />
            </div>
            <div>
              <p className="text-sm text-gray-600">Tests Completed</p>
              <p className="text-2xl font-bold text-gray-900">12</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl p-6 shadow-md">
          <div className="flex items-center space-x-3">
            <div className="bg-indigo-100 p-3 rounded-lg">
              <Clock className="h-6 w-6 text-indigo-600" />
            </div>
            <div>
              <p className="text-sm text-gray-600">Study Hours</p>
              <p className="text-2xl font-bold text-gray-900">48</p>
            </div>
          </div>
        </div>
      </div>

      {/* Subject Performance Chart */}
      <div className="bg-white rounded-xl p-6 shadow-md">
        <h2 className="text-xl font-semibold text-gray-900 mb-6">
          Subject Performance
        </h2>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={subjectPerformance}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="subject" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="score" fill="#4F46E5" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Topic Breakdown */}
      <div className="bg-white rounded-xl p-6 shadow-md">
        <h2 className="text-xl font-semibold text-gray-900 mb-6">
          Topic Breakdown
        </h2>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={topicBreakdown}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, percent }) =>
                  `${name} (${(percent * 100).toFixed(0)}%)`
                }
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {topicBreakdown.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Recent Tests Table */}
      <div className="bg-white rounded-xl shadow-md overflow-hidden">
        <div className="p-6">
          <h2 className="text-xl font-semibold text-gray-900">Recent Tests</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Test Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Date
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Score
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Time Taken
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-gray-900">
                  Physics Mock Test
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-gray-500">
                  Mar 15, 2024
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2 py-1 text-sm rounded-full bg-green-100 text-green-800">
                    85%
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-gray-500">
                  2h 45m
                </td>
              </tr>
              {/* Add more rows as needed */}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Reports;