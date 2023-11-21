import { useState, PropsWithChildren } from 'react';
import { User } from '@/types';
import clsx from 'clsx';
import Sidebar from '@/Components/SideBar';
import Navbar from '@/Components/NavBar';
import { log } from 'console';

export default function Authenticated({ user, children }: PropsWithChildren<{ user: User }>) {
    const [collapsed, setSidebarCollapsed] = useState(false);
    
    return (
        <div
            className={clsx(
                "grid bg-gray-100 dark:bg-slate-900 min-h-screen",
                collapsed
                ? "grid-cols-sidebar"
                : "grid-cols-sidebar-collapsed",
                "transition-[grid-template-columns] duration-300 ease-in-out"
            )}
        >
            <Sidebar 
                collapsed={collapsed}
                role={user.role}
            />

            <div>
                <Navbar username={user.name} setSidebarCollapsed={() => setSidebarCollapsed(!collapsed)} />
                {children}
            </div>
        </div>
    );
}
