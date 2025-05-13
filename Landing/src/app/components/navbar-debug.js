"use client";
import React, { useEffect, useState } from 'react';
import Link from 'next/link';

export default function NavbarDebug() {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchUser();
    }, []);

    async function fetchUser() {
        try {
            console.log('Fetching user...');
            const res = await fetch('/api/auth/check', { credentials: 'include' });
            const data = await res.json();
            console.log('User data:', data);
            if (data.loggedIn) {
                setUser(data.user);
            } else {
                setUser(null);
            }
        } catch (err) {
            console.error('Failed to fetch user:', err);
            setError(err.message);
            setUser(null);
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="fixed top-0 left-0 right-0 bg-white shadow p-4 z-50">
            <div className="container mx-auto flex justify-between items-center">
                <Link href="/" className="text-xl font-bold">Logo</Link>
                
                <div className="flex items-center gap-4">
                    <div className="text-sm text-gray-500">
                        Loading: {loading.toString()} | 
                        User: {user ? user.email : 'null'} | 
                        Error: {error || 'none'}
                    </div>
                    
                    {loading ? (
                        <span>Loading...</span>
                    ) : user ? (
                        <div className="flex gap-2">
                            <span>Welcome, {user.email}</span>
                            <button className="px-4 py-2 bg-red-500 text-white rounded">
                                Logout
                            </button>
                        </div>
                    ) : (
                        <div className="flex gap-2">
                            <Link href="/login" className="px-4 py-2 bg-blue-500 text-white rounded">
                                Login
                            </Link>
                            <Link href="/signup" className="px-4 py-2 bg-green-500 text-white rounded">
                                Sign Up
                            </Link>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
