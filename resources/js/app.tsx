import './bootstrap';
import '../css/app.css';

import { createRoot } from 'react-dom/client';
import { createInertiaApp } from '@inertiajs/react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';

const appName = 'Hendrie Ramdhani';

const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
const storedTheme = localStorage.getItem('theme');

if (storedTheme === null) {
    document.documentElement.classList.add(prefersDarkMode ? 'dark' : 'light');
    localStorage.setItem('theme', prefersDarkMode ? 'dark' : 'light');
} else {
    document.documentElement.classList.add(storedTheme);
}

createInertiaApp({
    title: (title) => title ? `${title} - ${appName}` : `${appName}`,
    resolve: (name) => resolvePageComponent(`./Pages/${name}.tsx`, import.meta.glob('./Pages/**/*.tsx')),
    setup({ el, App, props }) {
        const root = createRoot(el);

        root.render(<App {...props} />);
    },
    progress: {
        color: '#4B5563',
    },
});
