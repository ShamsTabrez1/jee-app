import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import TestCreation from './pages/TestCreation';
import ExamSimulator from './pages/ExamSimulator';
import Reports from './pages/Reports';
import Subscription from './pages/Subscription';
import Auth from './pages/Auth';
import { useAuthStore } from './store/authStore';

function App() {
  const { isAuthenticated } = useAuthStore();

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <main className="container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/auth" element={<Auth />} />
            <Route
              path="/dashboard"
              element={isAuthenticated ? <Dashboard /> : <Navigate to="/auth" />}
            />
            <Route
              path="/create-test"
              element={isAuthenticated ? <TestCreation /> : <Navigate to="/auth" />}
            />
            <Route
              path="/exam/:testId"
              element={isAuthenticated ? <ExamSimulator /> : <Navigate to="/auth" />}
            />
            <Route
              path="/reports"
              element={isAuthenticated ? <Reports /> : <Navigate to="/auth" />}
            />
            <Route path="/subscription" element={<Subscription />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;