import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-100 text-center py-6 mt-10">
      <p className="mb-2">© 2026 B Bb. All rights reserved.</p>
      <div className="space-x-4">
        <a href="#home" className="text-teal-400 hover:underline">
          Home
        </a>
        <a href="#about" className="text-teal-400 hover:underline">
          About
        </a>
        <a href="#contact" className="text-teal-400 hover:underline">
          Contact
        </a>
      </div>
    </footer>
  );
}
