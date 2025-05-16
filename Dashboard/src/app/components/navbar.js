"use client";
import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [user, setUser] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    async function fetchUser() {
      try {
        const res = await fetch('/api/auth/check', {
          credentials: 'include',
          headers: {
            'Content-Type': 'application/json',
          }
        });
        
        const data = await res.json();
        
        if (data.loggedIn) {
          setUser(data.user);
        } else {
          // Redirect to login if not logged in
          window.location.href = 'http://3.148.159.251:3001/login';
        }
      } catch (error) {
        console.error('Error fetching user:', error);
      }
    }
    
    fetchUser();
  }, []);

  const handleLogout = async () => {
    try {
      const res = await fetch('/api/auth/logout', {
        method: 'POST',
        credentials: 'include',
        headers: { 'Content-Type': 'application/json' }
      });
      
      if (res.ok) {
        window.location.href = 'http://3.148.159.251:3001';
      }
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  if (!user) {
    return (
      <div className="bg-black text-white px-6 py-4 flex justify-between items-center w-full">
        <div className="text-xl font-bold">Allocator</div>
        <div>Loading user data...</div>
      </div>
    );
  }

  return (
    <nav className="bg-black text-white px-6 py-4 flex justify-between items-center w-full">
      <div className="text-xl font-bold">Allocator</div>
      
      <div className="relative">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center space-x-2"
        >
          <span>{user.name || user.email}</span>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </button>
        
        {isOpen && (
          <div className="absolute right-0 mt-2 w-48 bg-gray-800 rounded-md shadow-lg py-1 z-50">
            <Link href="/dashboard" className="block px-4 py-2 text-sm hover:bg-gray-700">
              Dashboard
            </Link>
            <Link href="/profile" className="block px-4 py-2 text-sm hover:bg-gray-700">
              Profile
            </Link>
            <button
              onClick={handleLogout}
              className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-700"
            >
              Logout
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}