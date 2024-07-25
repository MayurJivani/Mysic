// app/login/page.js
import React from 'react';

export default function Login() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black-80">
      <h1 className="text-4xl font-bold mb-6">Login with Spotify</h1>
      <a href={`${process.env.NEXT_PUBLIC_API_URL}/auth/spotify`}>
        <button className="bg-green-500 text-white px-4 py-2 rounded">Login with Spotify</button>
      </a>
    </div>
  );
}
