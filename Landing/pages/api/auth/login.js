
// import { compare } from 'bcryptjs';
// import { Pool } from 'pg';
// import cookie from 'cookie';

// const pool = new Pool({
//   connectionString: process.env.DATABASE_URL,
// });

// export default async function handler(req, res) {
//   if (req.method !== 'POST') return res.status(405).json({ message: 'Method not allowed' });

//   const { email, password } = req.body;
//   if (!email || !password) return res.status(400).json({ message: 'All fields are required' });

//   try {
//     const client = await pool.connect();
//     const user = await client.query('SELECT * FROM users WHERE email = $1', [email]);
//     client.release();

//     if (user.rows.length === 0) {
//       return res.status(401).json({ message: 'Invalid email or password' });
//     }

//     const validPassword = await compare(password, user.rows[0].password_hash);
//     if (!validPassword) {
//       return res.status(401).json({ message: 'Invalid email or password' });
//     }

//     res.setHeader('Set-Cookie', cookie.serialize('loggedIn', 'true', {
//       path: '/',
//       httpOnly: true,
//       maxAge: 60 * 60 * 24,
//     }));

//     return res.status(200).json({ message: 'Login successful' });
//   } catch (err) {
//     console.error(err);
//     return res.status(500).json({ message: 'Internal server error' });
//   }
// }


"use client"; // This is a client component 👈🏽
import React, { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();
  const registered = searchParams.get('registered');

  const handleChange = (e) => {
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    setFormData({
      ...formData,
      [e.target.name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: formData.email,
          password: formData.password
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Login failed');
      }

      // If successful, redirect to dashboard
      router.push('/');
    } catch (err) {
      console.error('Login error:', err);
      setError(err.message || 'Invalid email or password');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="md:h-screen py-36 flex items-center bg-no-repeat bg-center" style={{backgroundImage:"url('/images/cta.jpg')"}}>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black"></div>
      <div className="container relative z-10">
        <div className="flex justify-center">
          <div className="max-w-[400px] w-full m-auto p-6 bg-white dark:bg-slate-900 shadow-md dark:shadow-gray-800 rounded-md">
            <Link href="/">
              <Image src='/images/logo-dark.png' className="mx-auto h-7 block dark:hidden" alt="" width={116} height={28} />
              <Image src='/images/logo-light.png' className="mx-auto h-7 dark:block hidden" alt="" width={116} height={28} />
            </Link>
            <h5 className="my-6 text-xl font-semibold">Login</h5>
            
            {registered && (
              <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
                Registration successful! Please log in with your credentials.
              </div>
            )}
            
            {error && (
              <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
                {error}
              </div>
            )}
            
            <form className="text-start" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1">
                <div className="mb-4">
                  <label className="font-semibold" htmlFor="email">Email Address:</label>
                  <input 
                    id="email" 
                    name="email"
                    type="email" 
                    className="form-input w-full text-[15px] py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded-full outline-none border border-gray-200 focus:border-violet-600 dark:border-gray-800 dark:focus:border-violet-600 focus:ring-0 mt-3" 
                    placeholder="name@example.com" 
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="mb-4">
                  <label className="font-semibold" htmlFor="password">Password:</label>
                  <input 
                    id="password" 
                    name="password"
                    type="password" 
                    className="form-input w-full text-[15px] py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded-full outline-none border border-gray-200 focus:border-violet-600 dark:border-gray-800 dark:focus:border-violet-600 focus:ring-0 mt-3" 
                    placeholder="Password" 
                    value={formData.password}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="flex justify-between mb-4">
                  <div className="inline-flex items-center mb-0">
                    <input 
                      id="rememberMe"
                      name="rememberMe"
                      className="form-checkbox rounded border-gray-200 dark:border-gray-800 text-violet-600 focus:border-violet-600/30 focus:ring focus:ring-offset-0 focus:ring-violet-600/20 focus:ring-opacity-50 me-2" 
                      type="checkbox" 
                      checked={formData.rememberMe}
                      onChange={handleChange}
                    />
                    <label className="form-checkbox-label text-slate-400" htmlFor="rememberMe">Remember me</label>
                  </div>
                  <p className="text-slate-400 mb-0">
                    <Link href="/reset-password" className="text-slate-400">Forgot password?</Link>
                  </p>
                </div>

                <div className="mb-4">
                  <button
                    type="submit"
                    className="btn bg-violet-600 hover:bg-violet-700 border-violet-600 hover:border-violet-700 text-white rounded-full w-full"
                    disabled={loading}
                  >
                    {loading ? 'Logging in...' : 'Login / Sign in'}
                  </button>
                </div>

                <div className="text-center">
                  <span className="text-slate-400 me-2">Don't have an account?</span> 
                  <Link href="/signup" className="text-black dark:text-white font-bold">Sign Up</Link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;