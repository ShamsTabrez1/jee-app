import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Clock, Target, TrendingUp } from 'lucide-react';
import { useAuthStore } from '../store/authStore';

function Dashboard() {
  const { user } = useAuthStore();

  const stats = [
    {
      icon: <Target className="h-6 w-6 text-indigo-600" />,
      label: 'Tests Completed',
      value: '12',
    },
    {
      icon: <Clock className="h-6 w-6 text-indigo-600" />,
      label: 'Study Hours',
      value: '48',
    },
    {
      icon: <TrendingUp className="h-6 w-6 text-indigo-600" />,
      label: 'Avg. Score',
      value: '76%',
    },
    {
      icon: <BookOpen className="h-6 w-6 text-indigo-600" />,
      label: 'Questions Solved',
      value: '450',
    },
  ];

  const recentTests = [
    { id: 1, name: 'Physics Practice Test', score: 85, date: '2024-03-15' },
    { id: 2, name: 'Chemistry Mock Exam', score: 78, date: '2024-03-14' },
    { id: 3, name: 'Mathematics Quiz', score: 92, date: '2024-03-13' },
  ];

  return (
    <div className="space-y-8">
      {/* Welcome Section */}
      <div className="bg-white rounded-xl p-6 shadow-md">
        <h1 className="text-2xl font-bold text-gray-900">
          Welcome back, {user?.name}!
        </h1>
        <p className="text-gray-600 mt-2">
          {user?.isSubscribed ? (
            'Ready to continue your preparation?'
          ) : (
            `Trial ends in ${Math.ceil(
              (new Date(user?.trialEndsAt || '').getTime() - new Date().getTime()) /
                (1000 * 60 * 60 * 24)
            )} days`
          )}
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="bg-white rounded-xl p-6 shadow-md flex items-center space-x-4"
          >
            <div className="bg-indigo-50 p-3 rounded-lg">{stat.icon}</div>
            <div>
              <p className="text-gray-600 text-sm">{stat.label}</p>
              <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Link
          to="/create-test"
          className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow"
        >
          <h2 className="text-xl font-semibold text-gray-900 mb-2">
            Start New Test
          </h2>
          <p className="text-gray-600">
            Create a customized test based on your preferences
          </p>
        </Link>
        <Link
          to="/reports"
          className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow"
        >
          <h2 className="text-xl font-semibold text-gray-900 mb-2">
            View Reports
          </h2>
          <p className="text-gray-600">
            Analyze your performance and track progress
          </p>
        </Link>
      </div>

      {/* Recent Tests */}
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
                  Score
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Date
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {recentTests.map((test) => (
                <tr key={test.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-gray-900">
                    {test.name}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 py-1 text-sm rounded-full bg-green-100 text-green-800">
                      {test.score}%
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-gray-500">
                    {new Date(test.date).toLocaleDateString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;