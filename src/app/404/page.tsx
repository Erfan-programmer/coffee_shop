// pages/404.js

"use client";

import { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function Custom404() {
  const [animationComplete, setAnimationComplete] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimationComplete(true);
    }, 2000); // Adjust the delay as needed

    return () => clearTimeout(timer);
  }, []);

  const handleGoHome = () => {
    router.push('/');
  };

  return (
    <>
      <Head>
        <title>Page Not Found | Your Website</title>
        <meta name="description" content="Oops! You've stumbled upon a page that doesn't exist." />
      </Head>

      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">404</h1>
          <p className="text-lg text-gray-600 mb-6">
            Oops! The page you're looking for doesn't exist.
          </p>

          {animationComplete && (
            <Link href="/" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
              Go Back Home
            </Link>
          )}

          {!animationComplete && (
            <div className="w-24 h-24 rounded-full border-4 border-dashed border-gray-400 animate-spin"></div>
          )}
        </div>
      </div>
    </>
  );
}
