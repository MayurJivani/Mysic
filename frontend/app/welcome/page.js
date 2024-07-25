// app/welcome/page.js
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

const Welcome = () => {
  const [user, setUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const query = new URLSearchParams(window.location.search);
    const username = query.get('user');
    if (username) {
      setUser(decodeURIComponent(username));
    }
  }, [router]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-6">
        Welcome {user ? `${user}👋` : 'loading...'}
      </h1>
    </div>
  );
};

export default Welcome;
