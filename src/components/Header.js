"use client"

import React from 'react';
import { useState, useEffect } from 'react';

const Header = () => {
  return (
    <header className="w-full py-4 text-white bg-zinc-700 shadow-lg">
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between">
          <div className="flex items-center">
            <a href="/" className="text-xl text-emerald-300 font-bold">
              Don Englert
            </a>
          </div>
          <div className="flex items-center">
            <a href="/" className="hover:text-emerald-500 px-3 py-2">Home</a>
            <a href="/about" className="hover:text-emerald-500 px-3 py-2">About</a>
            <a href="/music" className="hover:text-emerald-500 px-3 py-2">Music</a>
            <a href="/cv" className="hover:text-emerald-500 px-3 py-2">CV</a>
            <a href="/contact" className="hover:text-emerald-500 px-3 py-2">Contact</a>
          </div>
        </nav>
      </div>
    </header>
  );
};
export default Header;
