// Dashboard/_layout.js
"use client";
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function ProtectedRoute({ children }) {
  const [loading, setLoading] = useState(true);
  const [authenticated, setAuthenticated] = useState(false);
  const router = useRouter();

  useEffect(() => {
    checkAuth();
  }, []);

  async function checkAuth() {
    try {
      const res = await fetch('/api/auth/check', {
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        }
      });

      if (!res.ok) {
        throw new Error('Auth check failed');
      }

      const data = await res.json();
      
      if (data.loggedIn) {
        setAuthenticated(true);
      } else {
        // Redirect to landing page login
        window.location.href = 'http://3.148.159.251:3001/login';
      }
    } catch (error) {
      console.error('Auth check error:', error);
      // Redirect to landing page login on error
      window.location.href = 'http://3.148.159.251:3001/login';
    } finally {
      setLoading(false);
    }
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-violet-600"></div>
      </div>
    );
  }

  if (!authenticated) {
    return null; // Don't render anything while redirecting
  }

  return children;
}