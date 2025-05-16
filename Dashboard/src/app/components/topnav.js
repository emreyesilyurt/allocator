"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Topnav({ toggle, setToggle }) {
  const [user, setUser] = useState(null);

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
        }
      } catch (error) {
        console.error('Error fetching user:', error);
      }
    }
    
    fetchUser();
  }, []);

  return (
    <div className="top-navbar bg-black text-white px-6 py-2 flex justify-between items-center">
      <button 
        onClick={() => setToggle(!toggle)}
        className="text-white focus:outline-none"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
      
      <div className="flex items-center space-x-4">
        <div className="search-box">
          <input 
            type="text" 
            placeholder="Search..." 
            className="bg-gray-800 text-white px-4 py-2 rounded-full focus:outline-none"
          />
        </div>
        
        {user && (
          <div className="user-info">
            <span className="text-sm">
              Wallet: {user.wallet && user.wallet !== '0x0000000000000000000000000000000000000000' 
                ? `${user.wallet.slice(0, 6)}...${user.wallet.slice(-4)}` 
                : 'Not connected'}
            </span>
          </div>
        )}
      </div>
    </div>
  );
}