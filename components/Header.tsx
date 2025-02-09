'use client'

import Link from 'next/link';
import { useTheme } from 'next-themes';
import { Moon, Sun } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Header() {
  const { theme, setTheme } = useTheme();

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-gray-800 bg-opacity-90 dark:bg-opacity-90 shadow-md">
      <nav className="container mx-auto px-6 py-3">
        <div className="flex ml-30 justify-between items-center">
          <ul className="flex space-x-6">
            {['home', 'about', 'skills', 'projects', 'experience', 'contact'].map((section) => (
              <li key={section}>
                <Link href={`#${section}`} onClick={(e) => handleScroll(e, section)} className="text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 font-geist-sans">
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </Link>
              </li>

            ))}
          </ul>
          <motion.button
            className="p-2 rounded-full bg-gray-600 dark:bg-gray-600"
            onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {theme === 'dark' ? <Moon /> : <Sun/>}
          </motion.button>
        </div>
      </nav>
    </header>
  );
}