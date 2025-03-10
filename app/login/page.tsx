"use client"

// pages/login.tsx
import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { FaLock, FaUser, FaShieldAlt } from 'react-icons/fa';
import Navbar from '@/components/navbar';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      // Reset form state
      setIsLoading(false);
      // Redirect would happen here in a real app
      console.log('Login attempt with:', { email, password });
    }, 1500);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#FFF4F9]">
      <Navbar />
      <Head>
        <title>SafeGuard - Login</title>
        <meta name="description" content="Login to SafeGuard - Women's Safety Tech Platform" />
      </Head>
      
      {/* Glass card container */}
      <div className="w-full max-w-md p-8 space-y-8 bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl shadow-xl border border-white border-opacity-20">
        <div className="text-center">
          <div className="flex justify-center">
            <div className="p-3 rounded-full bg-[#5C1749] bg-opacity-30">
              <FaShieldAlt className="h-8 w-8 text-[#5C1749]" />
            </div>
          </div>
          <span className="my-2 text-4xl font-bold bg-gradient-to-r from-[#5C1749] to-[#E23288] bg-clip-text text-transparent">
                GuardianRing
            </span>
          <p className="mt-2 text-sm text-[#5C1749]">Sign in to your account</p>
        </div>

        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaUser className="h-5 w-5 text-[#5C1749]" />
              </div>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="block w-full pl-10 pr-3 py-3 bg-white bg-opacity-10 border border-[#5C1749] border-opacity-30 rounded-lg text-[#5C1749] placeholder-[#5C1749] focus:outline-none focus:ring-2 focus:ring-[#5C1749] focus:border-transparent"
                placeholder="Email address"
              />
            </div>
            
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaLock className="h-5 w-5 text-[#5C1749]" />
              </div>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="block w-full pl-10 pr-3 py-3 bg-white bg-opacity-10 border border-[#5C1749] border-opacity-30 rounded-lg text-[#5C1749] placeholder-[#5C1749] focus:outline-none focus:ring-2 focus:ring-[#5C1749] focus:border-transparent"
                placeholder="Password"
              />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 rounded border-[#5C1749] text-[#5C1749] focus:ring-[#5C1749] bg-opacity-10"
              />
              <label htmlFor="remember-me" className="ml-2 block text-sm text-[#5C1749]">
                Remember me
              </label>
            </div>

            <div className="text-sm">
              <Link href="/forgot-password" className="font-medium text-[#5C1749] hover:text-[#5C1749]">
                Forgot your password?
              </Link>
            </div>
          </div>

          <div>
            <button
              type="submit"
              disabled={isLoading}
              className="group relative w-full flex justify-center py-3 px-4 border border-transparent rounded-lg text-sm font-medium bg-gradient-to-r from-[#5C1749] to-[#E23288] hover:from-[#7e386a] hover:to-[#ff6eb4] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#5C1749] transition-all duration-150 text-white"
            >
              {isLoading ? (
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-[#5C1749]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
              ) : (
                'Sign in'
              )}
            </button>
          </div>
        </form>

        <div className="text-center mt-4">
          <p className="text-sm text-[#5C1749]">
            Dont have an account?{' '}
            <Link href="/register" className="font-medium text-[#5C1749] hover:text-[#5C1749]">
              Sign up
            </Link>
          </p>
        </div>

        <div className="mt-6 text-center">
          <div className="relative">
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-transparent text-[#5C1749]">Or continue with</span>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-3 gap-3">
            <button
              type="button"
              className="w-full py-2 px-4 border border-[#5C1749] border-opacity-30 rounded-lg shadow-sm bg-white bg-opacity-10 text-sm font-medium text-[#5C1749] hover:bg-white hover:bg-opacity-20"
            >
              Google
            </button>
            <button
              type="button"
              className="w-full py-2 px-4 border border-[#5C1749] border-opacity-30 rounded-lg shadow-sm bg-white bg-opacity-10 text-sm font-medium text-[#5C1749] hover:bg-white hover:bg-opacity-20"
            >
              Apple
            </button>
            <button
              type="button"
              className="w-full py-2 px-4 border border-[#5C1749] border-opacity-30 rounded-lg shadow-sm bg-white bg-opacity-10 text-sm font-medium text-[#5C1749] hover:bg-white hover:bg-opacity-20"
            >
              Facebook
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}