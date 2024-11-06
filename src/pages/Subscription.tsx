import React from 'react';
import { Check } from 'lucide-react';

function Subscription() {
  const plans = [
    {
      name: 'Basic',
      price: '₹499',
      duration: 'per month',
      features: [
        'Access to previous year papers',
        'Basic performance analytics',
        'Limited practice tests',
        'Email support'
      ],
      recommended: false
    },
    {
      name: 'Pro',
      price: '₹999',
      duration: 'per month',
      features: [
        'Everything in Basic',
        'Unlimited practice tests',
        'Advanced analytics',
        'Personalized study plan',
        'Priority support'
      ],
      recommended: true
    },
    {
      name: 'Premium',
      price: '₹1999',
      duration: 'per month',
      features: [
        'Everything in Pro',
        '1-on-1 mentoring sessions',
        'Live doubt clearing',
        'Mock interviews',
        'Guaranteed results'
      ],
      recommended: false
    }
  ];

  return (
    <div className="space-y-12">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900">Choose Your Plan</h1>
        <p className="mt-4 text-xl text-gray-600">
          Start with a 3-day free trial. Cancel anytime.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`relative bg-white rounded-2xl shadow-lg overflow-hidden ${
              plan.recommended ? 'ring-2 ring-indigo-600' : ''
            }`}
          >
            {plan.recommended && (
              <div className="absolute top-0 right-0 bg-indigo-600 text-white px-4 py-1 rounded-bl-lg">
                Recommended
              </div>
            )}
            
            <div className="p-8">
              <h3 className="text-2xl font-bold text-gray-900">{plan.name}</h3>
              <div className="mt-4 flex items-baseline">
                <span className="text-4xl font-bold text-gray-900">
                  {plan.price}
                </span>
                <span className="ml-2 text-gray-600">{plan.duration}</span>
              </div>

              <ul className="mt-8 space-y-4">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <Check className="h-5 w-5 text-indigo-600 mr-2" />
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`mt-8 w-full py-3 px-6 rounded-lg font-semibold ${
                  plan.recommended
                    ? 'bg-indigo-600 text-white hover:bg-indigo-700'
                    : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                } transition-colors`}
              >
                Get Started
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-indigo-50 rounded-2xl p-8 text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          100% Satisfaction Guaranteed
        </h2>
        <p className="text-gray-600">
          If you're not satisfied with our platform within the first 7 days of your paid subscription,
          we'll refund your money - no questions asked.
        </p>
      </div>
    </div>
  );
}

export default Subscription;