import React from "react";
import { FaBars } from "react-icons/fa";
import { MdDarkMode, MdLightMode } from 'react-icons/md';
import { Dialog, Menu, Transition } from '@headlessui/react'
import clsx from 'clsx';
type Props = {
    user: Object;
    onMenuButtonClick(): void;
};

const userNavigation = [
    { name: 'Your Profile', href: route("profile.edit") },
    { name: 'Log out', href: route("logout") },
]

const Navbar = (props: Props) => {
    return (
        <nav
            className={clsx(
                "bg-white text-zinc-500",
                "flex items-center",
                "w-screen md:w-full sticky z-10 px-4 shadow-sm h-[73px] top-0"
            )}
        >
            <div className="font-bold text-lg">Admin Panel</div>
            <div className="flex-grow"></div>
            <button className="md:hidden" onClick={props.onMenuButtonClick}>
                <FaBars className="h-6 w-6" />
            </button>
        </nav>
    );
};

export default Navbar;