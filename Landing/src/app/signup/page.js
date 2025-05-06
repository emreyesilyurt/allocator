// "use client"; // This is a client component 👈🏽
// import React, { useEffect } from "react";
// import dynamic from 'next/dynamic'
// import Link from "next/link";
// import Image from "next/image";

// const Switcher = dynamic(()=>import('../components/switcher'));
// export default function Signup() {
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
//                             <Link href="#">
//                                 <Image src='/images/logo-dark.png' className="mx-auto h-7 block dark:hidden" alt=""  width={116} height={28}  />
//                                 <Image src='/images/logo-light.png' className="mx-auto h-7 dark:block hidden" alt=""  width={116} height={28}  />
//                             </Link>
//                             <h5 className="my-6 text-xl font-semibold">Signup</h5>
//                             <form className="text-start">
//                                 <div className="grid grid-cols-1">
//                                     <div className="mb-4">
//                                         <label className="font-semibold" htmlFor="RegisterName">Your Name:</label>
//                                         <input id="RegisterName" type="text" className="form-input w-full text-[15px] py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded-full outline-none border border-gray-200 focus:border-violet-600 dark:border-gray-800 dark:focus:border-violet-600 focus:ring-0 mt-3" placeholder="Harry" />
//                                     </div>

//                                     <div className="mb-4">
//                                         <label className="font-semibold" htmlFor="LoginEmail">Email Address:</label>
//                                         <input id="LoginEmail" type="email" className="form-input w-full text-[15px] py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded-full outline-none border border-gray-200 focus:border-violet-600 dark:border-gray-800 dark:focus:border-violet-600 focus:ring-0 mt-3" placeholder="name@example.com" />
//                                     </div>

//                                     <div className="mb-4">
//                                         <label className="font-semibold" htmlFor="LoginPassword">Password:</label>
//                                         <input id="LoginPassword" type="password" className="form-input w-full text-[15px] py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded-full outline-none border border-gray-200 focus:border-violet-600 dark:border-gray-800 dark:focus:border-violet-600 focus:ring-0 mt-3" placeholder="Password:" />
//                                     </div>

//                                     <div className="flex items-center mb-4">
//                                         <input className="form-checkbox rounded border-gray-200 dark:border-gray-800 text-violet-600 focus:border-violet-600/30 focus:ring focus:ring-offset-0 focus:ring-violet-600/20 focus:ring-opacity-50 me-2" type="checkbox" id="AcceptT&C" />
//                                         <label className="form-checkbox-label text-slate-400" htmlFor="AcceptT&C">I Accept <Link href="/" className="text-violet-600">Terms And Condition</Link></label>
//                                     </div>

//                                     <div className="mb-4">
//                                         <input type="submit" className="btn bg-violet-600 hover:bg-violet-700 border-violet-600 hover:border-violet-700 text-white rounded-full w-full" value="Register" />
//                                     </div>

//                                     <div className="text-center">
//                                         <span className="text-slate-400 me-2">Already have an account ? </span> <Link href="/login" className="text-black dark:text-white font-bold">Sign in</Link>
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


//// ----- VERSION 2 ----- ////

// "use client"; // This is a client component 👈🏽
// import React, { useState, useEffect } from "react";
// import { useRouter } from "next/navigation";
// import Link from "next/link";
// import Image from "next/image";

// const Signup = () => {
//   const [formData, setFormData] = useState({
//     username: '',
//     email: '',
//     password: ''
//   });
//   const [error, setError] = useState('');
//   const [loading, setLoading] = useState(false);
//   const router = useRouter();

//   // Add this useEffect to enforce dark mode on this page
//   useEffect(() => {
//     document.documentElement.classList.add('dark');
//     document.documentElement.classList.remove('light');
//   }, []);

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setError('');

//     try {
//       // Log the request for debugging
//       console.log('Sending registration request:', {
//         url: '/api/auth/register',
//         method: 'POST',
//         body: { ...formData, password: '[REDACTED]' } // Don't log actual password
//       });

//       const response = await fetch('/api/auth/register', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(formData),
//         credentials: 'include', // Important for cookie handling
//       });

//       const data = await response.json();
//       console.log('Registration response:', {
//         status: response.status,
//         ok: response.ok,
//         data: data
//       });

//       if (!response.ok) {
//         throw new Error(data.message || 'Registration failed');
//       }

//       // If successful, redirect to login or dashboard
//       router.push('/login?registered=true');
//     } catch (err) {
//       console.error('Registration error:', err);
//       setError(err.message || 'An error occurred during registration');
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <section className="md:h-screen py-36 flex items-center bg-no-repeat bg-center" style={{backgroundImage:"url('/images/cta.jpg')"}}>
//       <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black"></div>
//       <div className="container relative z-10">
//         <div className="flex justify-center">
//           <div className="max-w-[400px] w-full m-auto p-6 bg-white dark:bg-slate-900 shadow-md dark:shadow-gray-800 rounded-md">
//             <Link href="/">
//               <Image src='/images/logo-dark.png' className="mx-auto h-7 block dark:hidden" alt="" width={116} height={28} />
//               <Image src='/images/logo-light.png' className="mx-auto h-7 dark:block hidden" alt="" width={116} height={28} />
//             </Link>
//             <h5 className="my-6 text-xl font-semibold">Signup</h5>
//             {error && <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">{error}</div>}
//             <form className="text-start" onSubmit={handleSubmit}>
//               <div className="grid grid-cols-1">
//                 <div className="mb-4">
//                   <label className="font-semibold" htmlFor="username">Your Name:</label>
//                   <input 
//                     id="username" 
//                     name="username"
//                     type="text" 
//                     className="form-input w-full text-[15px] py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded-full outline-none border border-gray-200 focus:border-violet-600 dark:border-gray-800 dark:focus:border-violet-600 focus:ring-0 mt-3" 
//                     placeholder="Username" 
//                     value={formData.username}
//                     onChange={handleChange}
//                     required
//                   />
//                 </div>

//                 <div className="mb-4">
//                   <label className="font-semibold" htmlFor="email">Email Address:</label>
//                   <input 
//                     id="email" 
//                     name="email"
//                     type="email" 
//                     className="form-input w-full text-[15px] py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded-full outline-none border border-gray-200 focus:border-violet-600 dark:border-gray-800 dark:focus:border-violet-600 focus:ring-0 mt-3" 
//                     placeholder="name@example.com" 
//                     value={formData.email}
//                     onChange={handleChange}
//                     required
//                   />
//                 </div>

//                 <div className="mb-4">
//                   <label className="font-semibold" htmlFor="password">Password:</label>
//                   <input 
//                     id="password" 
//                     name="password"
//                     type="password" 
//                     className="form-input w-full text-[15px] py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded-full outline-none border border-gray-200 focus:border-violet-600 dark:border-gray-800 dark:focus:border-violet-600 focus:ring-0 mt-3" 
//                     placeholder="Password:" 
//                     value={formData.password}
//                     onChange={handleChange}
//                     required
//                     minLength="6"
//                   />
//                 </div>

//                 <div className="flex items-center mb-4">
//                   <input 
//                     className="form-checkbox rounded border-gray-200 dark:border-gray-800 text-violet-600 focus:border-violet-600/30 focus:ring focus:ring-offset-0 focus:ring-violet-600/20 focus:ring-opacity-50 me-2" 
//                     type="checkbox" 
//                     id="AcceptTC" 
//                     required 
//                   />
//                   <label className="form-checkbox-label text-slate-400" htmlFor="AcceptTC">I Accept <Link href="/terms" className="text-violet-600">Terms And Condition</Link></label>
//                 </div>

//                 <div className="mb-4">
//                   <button 
//                     type="submit" 
//                     className="btn bg-violet-600 hover:bg-violet-700 border-violet-600 hover:border-violet-700 text-white rounded-full w-full"
//                     disabled={loading}
//                   >
//                     {loading ? 'Registering...' : 'Register'}
//                   </button>
//                 </div>

//                 <div className="text-center">
//                   <span className="text-slate-400 me-2">Already have an account? </span>
//                   <Link href="/login" className="text-black dark:text-white font-bold">Sign in</Link>
//                 </div>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Signup;

"use client"; // This is a client component 👈🏽
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import dynamic from 'next/dynamic';

const Switcher = dynamic(()=>import('../components/switcher'));

const Signup = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  // Add this useEffect to enforce dark mode on this page
  useEffect(() => {
    document.documentElement.classList.add('dark');
    document.documentElement.classList.remove('light');
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess(false);
  
    try {
      // Log the request for debugging
      console.log('Sending registration request:', {
        url: '/api/auth/register',
        method: 'POST',
        body: { ...formData, password: '[REDACTED]' } // Don't log actual password
      });
  
      const response = await fetch('/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
        credentials: 'include', // Important for cookie handling
      });
  
      const data = await response.json();
      console.log('Registration response:', {
        status: response.status,
        ok: response.ok,
        data: data
      });
  
      if (!response.ok) {
        throw new Error(data.message || 'Registration failed');
      }
  
      // Show success message before redirecting
      setSuccess(true);
      
      // If successful, redirect to login page after a short delay
      setTimeout(() => {
        // Use plain JavaScript redirection instead of Next.js routing
        // Make sure to use the full URL path starting with /
        window.location.href = '/login';
      }, 2000);
    } catch (err) {
      console.error('Registration error:', err);
      setError(err.message || 'An error occurred during registration');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <section className="md:h-screen py-36 flex items-center bg-no-repeat bg-center" style={{backgroundImage:"url('/images/cta.jpg')"}}>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black"></div>
        <div className="container relative z-10">
          <div className="flex justify-center">
            <div className="max-w-[400px] w-full m-auto p-6 bg-white dark:bg-slate-900 shadow-md dark:shadow-gray-800 rounded-md">
              <Link href="/">
                <Image src='/images/logo-dark.png' className="mx-auto h-7 block dark:hidden" alt="" width={116} height={28} />
                <Image src='/images/logo-light.png' className="mx-auto h-7 dark:block hidden" alt="" width={116} height={28} />
              </Link>
              <h5 className="my-6 text-xl font-semibold">Signup</h5>
              
              {success && (
                <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
                  Registration successful! Redirecting to login page...
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
                    <label className="font-semibold" htmlFor="username">Your Name:</label>
                    <input 
                      id="username" 
                      name="username"
                      type="text" 
                      className="form-input w-full text-[15px] py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded-full outline-none border border-gray-200 focus:border-violet-600 dark:border-gray-800 dark:focus:border-violet-600 focus:ring-0 mt-3" 
                      placeholder="Username" 
                      value={formData.username}
                      onChange={handleChange}
                      required
                    />
                  </div>

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
                      minLength="6"
                    />
                  </div>

                  <div className="flex items-center mb-4">
                    <input 
                      className="form-checkbox rounded border-gray-200 dark:border-gray-800 text-violet-600 focus:border-violet-600/30 focus:ring focus:ring-offset-0 focus:ring-violet-600/20 focus:ring-opacity-50 me-2" 
                      type="checkbox" 
                      id="AcceptTC" 
                      required 
                    />
                    <label className="form-checkbox-label text-slate-400" htmlFor="AcceptTC">I Accept <Link href="/terms" className="text-violet-600">Terms And Condition</Link></label>
                  </div>

                  <div className="mb-4">
                    <button 
                      type="submit" 
                      className="btn bg-violet-600 hover:bg-violet-700 border-violet-600 hover:border-violet-700 text-white rounded-full w-full"
                      disabled={loading || success}
                    >
                      {loading ? 'Registering...' : success ? 'Registered!' : 'Register'}
                    </button>
                  </div>

                  <div className="text-center">
                    <span className="text-slate-400 me-2">Already have an account? </span>
                    <Link href="/login" className="text-black dark:text-white font-bold">Sign in</Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      <Switcher />
    </>
  );
};

export default Signup;