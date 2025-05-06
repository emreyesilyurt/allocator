// "use client"; // This is a client component 👈🏽
// import dynamic from 'next/dynamic'
// import React, { useEffect } from "react";
// import Link from "next/link";
// import Image from "next/image";

// const Switcher = dynamic(()=>import('../components/switcher'));

// export default function Login() {
//     useEffect(() => {
//         document.documentElement.classList.add("dark");
//         document.body.classList.add(
//           "font-urbanist",
//           "text-base",
//           "text-black",
//           "dark:text-white",
//           "dark:bg-slate-900"
//         );
//       }, []);
//     return (
//         <>
//             <section className="md:h-screen py-36 flex items-center  bg-no-repeat bg-center" style={{backgroundImage:"url('/images/cta.jpg')"}}>
//                 <div className="absolute top-0 start-0 w-full h-full z-0 pointer-events-none overflow-hidden">
//                     <iframe title="iframe" src="https://player.vimeo.com/video/502163294?background=1&autoplay=1&loop=1&byline=0&title=0" className="absolute top-1/2 start-1/2 ltr:-translate-x-1/2 rtl:translate-x-1/2 -translate-y-1/2 w-screen h-[56.25vw] min-h-screen min-w-[177.77vw]"></iframe>

//                 </div>
//                 <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black"></div>
//                 <div className="container">
//                     <div className="flex justify-center">
//                         <div className="max-w-[400px] w-full m-auto p-6 bg-white dark:bg-slate-900 shadow-md dark:shadow-gray-800 rounded-md">
//                             <Link href="/">
//                                 <Image src='/images/logo-dark.png' className="mx-auto h-7 block dark:hidden" alt="" width={116} height={28}  />
//                                 <Image src='/images/logo-light.png' className="mx-auto h-7 dark:block hidden" alt="" width={116} height={28}  />
//                             </Link>
//                             <h5 className="my-6 text-xl font-semibold">Login</h5>
//                             <form className="text-start">
//                                 <div className="grid grid-cols-1">
//                                     <div className="mb-4">
//                                         <label className="font-semibold" htmlFor="LoginEmail">Email Address:</label>
//                                         <input id="LoginEmail" type="email" className="form-input w-full text-[15px] py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded-full outline-none border border-gray-200 focus:border-violet-600 dark:border-gray-800 dark:focus:border-violet-600 focus:ring-0 mt-3" placeholder="name@example.com" />
//                                     </div>

//                                     <div className="mb-4">
//                                         <label className="font-semibold" htmlFor="LoginPassword">Password:</label>
//                                         <input id="LoginPassword" type="password" className="form-input w-full text-[15px] py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded-full outline-none border border-gray-200 focus:border-violet-600 dark:border-gray-800 dark:focus:border-violet-600 focus:ring-0 mt-3" placeholder="Password:" />
//                                     </div>

//                                     <div className="flex justify-between mb-4">
//                                         <div className="inline-flex items-center mb-0">
//                                             <input className="form-checkbox rounded border-gray-200 dark:border-gray-800 text-violet-600 focus:border-violet-600/30 focus:ring focus:ring-offset-0 focus:ring-violet-600/20 focus:ring-opacity-50 me-2" type="checkbox" value="" id="RememberMe" />
//                                             <label className="form-checkbox-label text-slate-400" htmlFor="RememberMe">Remember me</label>
//                                         </div>
//                                         <p className="text-slate-400 mb-0"><Link href="/reset-password" className="text-slate-400">Forgot password ?</Link></p>
//                                     </div>

//                                     <div className="mb-4">
//                                         <input type="submit" className="btn bg-violet-600 hover:bg-violet-700 border-violet-600 hover:border-violet-700 text-white rounded-full w-full" value="Login / Sign in" />
//                                     </div>

//                                     <div className="text-center">
//                                         <span className="text-slate-400 me-2">Don t have an account ?</span> <Link href="/signup" className="text-black dark:text-white font-bold">Sign Up</Link>
//                                     </div>
//                                 </div>
//                             </form>
//                         </div>
//                     </div>
//                 </div>
//             </section>
//             <Switcher />
//         </>
//     )
// }

"use client"; // This is a client component 👈🏽
import dynamic from 'next/dynamic'
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useSearchParams } from 'next/navigation';

const Switcher = dynamic(()=>import('../components/switcher'));

export default function Login() {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        rememberMe: false
    });
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [loading, setLoading] = useState(false);
    const searchParams = useSearchParams();

    useEffect(() => {
        document.documentElement.classList.add("dark");
        document.body.classList.add(
          "font-urbanist",
          "text-base",
          "text-black",
          "dark:text-white",
          "dark:bg-slate-900"
        );
        
        // Check for registration success
        const registered = searchParams?.get('registered');
        if (registered === 'true') {
            setSuccess('Registration successful! Please log in with your new account.');
        }
        
        // Also check URL directly
        if (window.location.href.includes('registered=true')) {
            setSuccess('Registration successful! Please log in with your new account.');
        }
        
        // Check referrer
        if (document.referrer.includes('/signup')) {
            setSuccess('Registration successful! Please log in with your new account.');
        }
    }, [searchParams]);
    
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
                credentials: 'include',
            });
            
            const data = await response.json();
            
            if (!response.ok) {
                throw new Error(data.message || 'Login failed');
            }
            
            // Success - redirect to home
            window.location.href = '/';
        } catch (err) {
            console.error('Login error:', err);
            setError(err.message || 'Invalid email or password');
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <section className="md:h-screen py-36 flex items-center bg-no-repeat bg-center" style={{backgroundImage:"url('/images/cta.jpg')"}}>
                <div className="absolute top-0 start-0 w-full h-full z-0 pointer-events-none overflow-hidden">
                    <iframe title="iframe" src="https://player.vimeo.com/video/502163294?background=1&autoplay=1&loop=1&byline=0&title=0" className="absolute top-1/2 start-1/2 ltr:-translate-x-1/2 rtl:translate-x-1/2 -translate-y-1/2 w-screen h-[56.25vw] min-h-screen min-w-[177.77vw]"></iframe>
                </div>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black"></div>
                <div className="container relative z-10">
                    <div className="flex justify-center">
                        <div className="max-w-[400px] w-full m-auto p-6 bg-white dark:bg-slate-900 shadow-md dark:shadow-gray-800 rounded-md">
                            <Link href="/">
                                <Image src='/images/logo-dark.png' className="mx-auto h-7 block dark:hidden" alt="" width={116} height={28} />
                                <Image src='/images/logo-light.png' className="mx-auto h-7 dark:block hidden" alt="" width={116} height={28} />
                            </Link>
                            <h5 className="my-6 text-xl font-semibold">Login</h5>
                            
                            {success && (
                                <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
                                    {success}
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
                                            placeholder="Password:" 
                                            value={formData.password}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>

                                    <div className="flex justify-between mb-4">
                                        <div className="inline-flex items-center mb-0">
                                            <input 
                                                className="form-checkbox rounded border-gray-200 dark:border-gray-800 text-violet-600 focus:border-violet-600/30 focus:ring focus:ring-offset-0 focus:ring-violet-600/20 focus:ring-opacity-50 me-2" 
                                                type="checkbox" 
                                                name="rememberMe"
                                                id="rememberMe" 
                                                checked={formData.rememberMe}
                                                onChange={handleChange}
                                            />
                                            <label className="form-checkbox-label text-slate-400" htmlFor="rememberMe">Remember me</label>
                                        </div>
                                        <p className="text-slate-400 mb-0"><Link href="/reset-password" className="text-slate-400">Forgot password?</Link></p>
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
                                        <span className="text-slate-400 me-2">Don't have an account?</span> <Link href="/signup" className="text-black dark:text-white font-bold">Sign Up</Link>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
            <Switcher />
        </>
    )
}