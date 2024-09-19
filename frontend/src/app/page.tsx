// app/page.tsx
"use client"; // Mark the component as a client component

import { useEffect } from 'react';
import { useRouter } from 'next/navigation'; // Use next/navigation instead of next/router

export default function HomePage() {
  const router = useRouter();

  useEffect(() => {
    // Redirect to the /home page
    router.push('/home');
  }, [router]);

  return null; // Return null while redirecting
}
