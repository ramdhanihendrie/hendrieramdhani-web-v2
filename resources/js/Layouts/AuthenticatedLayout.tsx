import { useState, PropsWithChildren, Fragment } from 'react';
import Dropdown from '@/Components/Dropdown';
import { MdDarkMode, MdLightMode } from 'react-icons/md';
import ResponsiveNavLink from '@/Components/ResponsiveNavLink';
import { Link } from '@inertiajs/react';
import { User } from '@/types';
import SideBar from '@/Components/SideBar';
import { Dialog, Menu, Transition } from '@headlessui/react'
import clsx from 'clsx';
import {
    HiChevronDown,
} from "react-icons/hi";
import { 
    HiBars3BottomLeft, 
} from "react-icons/hi2";
import Sidebar from '@/Components/SideBar';

const userNavigation = [
    { name: 'Your Profile', href: route("profile.edit") },
    { name: 'Log out', href: route("logout") },
]

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
            />

            <div>
                <div 
                    className={clsx(
                        "bg-white dark:bg-slate-800 shadow",
                        "flex items-center",
                        "w-screen md:w-full sticky z-10 px-4 shadow-sm h-[73px] top-0"
                    )}
                >
                    <button
                        type="button"
                        className="px-4 text-gray-500"
                        onClick={() => setSidebarCollapsed(!collapsed)}
                    >
                        <span className="sr-only">Open sidebar</span>
                        <HiBars3BottomLeft className="h-6 w-6" aria-hidden="true" />
                    </button>
                    <div className="flex flex-1 justify-end px-4">
                        <div className="ml-4 flex items-center md:ml-6">
                            <button
                                className="text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none  rounded-lg text-xl p-2.5"
                            >
                                <MdLightMode />
                                <MdDarkMode className="hidden" />
                            </button>

                            <Menu as="div" className="relative ml-3">
                                <div>
                                    <Menu.Button className="flex gap-2 max-w-xs items-center dark:text-white rounded-full text-sm focus:outline-none">
                                        <span className="sr-only">Open user menu</span>
                                        {user.name}
                                        <HiChevronDown />
                                    </Menu.Button>
                                </div>
                                <Transition
                                    as={Fragment}
                                    enter="transition ease-out duration-100"
                                    enterFrom="transform opacity-0 scale-95"
                                    enterTo="transform opacity-100 scale-100"
                                    leave="transition ease-in duration-75"
                                    leaveFrom="transform opacity-100 scale-100"
                                    leaveTo="transform opacity-0 scale-95"
                                >
                                    <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white dark:bg-slate-600 py-1 shadow-lg focus:outline-none">
                                    {userNavigation.map((item) => (
                                        <Menu.Item key={item.name}>
                                        {({ active }) => (
                                            <a
                                                href={item.href}
                                                className={clsx(
                                                    active ? 'bg-gray-100 dark:bg-gray-500' : '',
                                                    'block px-4 py-2 text-sm text-gray-700 dark:text-white'
                                                )}
                                            >
                                                {item.name}
                                            </a>
                                        )}
                                        </Menu.Item>
                                    ))}
                                    </Menu.Items>
                                </Transition>
                            </Menu>
                        </div>
                    </div>
                </div>
                {children}
            </div>
        </div>
    );
}
