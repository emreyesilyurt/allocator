// import { useEffect } from 'react';
// import { useRouter } from 'next/router';

// export default function Index() {
//   const router = useRouter();

//   useEffect(() => {
//     // Redirect to dashboard
//     router.push('/dashboard');
//   }, [router]);

//   return (
//     <div className="flex items-center justify-center min-h-screen">
//       <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-violet-600"></div>
//     </div>
//   );
// }

import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function Index() {
  const router = useRouter();

  useEffect(() => {
    // Redirect to dashboard
    router.push('/dashboard');
  }, [router]);

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-violet-600"></div>
    </div>
  );
}