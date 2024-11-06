import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Clock, PieChart, Trophy } from 'lucide-react';

function Home() {
  const features = [
    {
      icon: <BookOpen className="h-8 w-8 text-indigo-600" />,
      title: 'Customized Tests',
      description: 'Create personalized tests from previous years\' JEE Mains papers'
    },
    {
      icon: <Clock className="h-8 w-8 text-indigo-600" />,
      title: 'Real Exam Environment',
      description: 'Practice with our exam simulator that mimics the actual JEE Mains interface'
    },
    {
      icon: <PieChart className="h-8 w-8 text-indigo-600" />,
      title: 'Detailed Analytics',
      description: 'Get comprehensive performance reports and track your progress'
    },
    {
      icon: <Trophy className="h-8 w-8 text-indigo-600" />,
      title: 'Success Guaranteed',
      description: 'Join thousands of successful JEE aspirants who prepared with us'
    }
  ];

  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="text-center space-y-8">
        <h1 className="text-5xl font-bold text-gray-900">
          Your Path to JEE Success
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Prepare for JEE Mains with our comprehensive practice platform. Get access to previous years' papers, 
          detailed analytics, and a real exam environment.
        </p>
        <div className="flex justify-center gap-4">
          <Link
            to="/auth"
            className="bg-indigo-600 text-white px-8 py-3 rounded-lg hover:bg-indigo-700 transition-colors"
          >
            Start Free Trial
          </Link>
          <Link
            to="/subscription"
            className="bg-white text-indigo-600 px-8 py-3 rounded-lg border-2 border-indigo-600 hover:bg-indigo-50 transition-colors"
          >
            View Plans
          </Link>
        </div>
      </section>

      {/* Features Grid */}
      <section className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
          >
            <div className="mb-4">{feature.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        ))}
      </section>

      {/* Statistics Section */}
      <section className="bg-indigo-50 rounded-2xl p-12">
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div>
            <div className="text-4xl font-bold text-indigo-600 mb-2">50,000+</div>
            <div className="text-gray-600">Active Students</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-indigo-600 mb-2">10,000+</div>
            <div className="text-gray-600">Practice Questions</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-indigo-600 mb-2">95%</div>
            <div className="text-gray-600">Success Rate</div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="text-center bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-2xl p-12">
        <h2 className="text-3xl font-bold mb-4">Ready to Start Your JEE Journey?</h2>
        <p className="mb-8 text-lg">
          Get 3 days of free access to all our premium features. No credit card required.
        </p>
        <Link
          to="/auth"
          className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
        >
          Start Free Trial Now
        </Link>
      </section>
    </div>
  );
}

export default Home;