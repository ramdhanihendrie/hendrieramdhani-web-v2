import { useState } from 'react'
import { MdDarkMode, MdLightMode } from 'react-icons/md';

const ToggleTheme = () => {
  const [currentTheme, setCurrentTheme] = useState(localStorage.getItem('theme') || 'light');

    const toggleTheme = () => {
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        document.documentElement.classList.remove(currentTheme);
        document.documentElement.classList.add(newTheme);
        localStorage.setItem('theme', newTheme);
        setCurrentTheme(newTheme);
    };
    
  return (
    <button
        className="text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none  rounded-lg text-2xl p-2.5"
        onClick={() => toggleTheme()}
    >
        {currentTheme === 'dark' ? <MdDarkMode /> : <MdLightMode />}
    </button>
  )
}

export default ToggleTheme