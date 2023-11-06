import { Link } from '@inertiajs/react';
import { MdDarkMode, MdLightMode, MdMenu, MdExpandMore } from 'react-icons/md';
import { Menu, Transition } from '@headlessui/react';
import clsx from 'clsx';
import { Fragment } from 'react';
type Props = {
    username: string;
    setSidebarCollapsed(): void;
};

const userNavigation = [
    { name: 'Your Profile', href: route("profile.edit") },
    { name: 'Log out', href: route("logout") },
]

const Navbar = ({ username, setSidebarCollapsed }: Props) => {
    return (
        <div 
            className={clsx(
                "bg-white dark:bg-slate-800 shadow",
                "flex items-center",
                "w-screen md:w-full sticky z-10 px-4 shadow-sm h-[73px] top-0"
            )}
        >
            <button
                type="button"
                className="text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none rounded-lg p-2.5 ms-3"
                onClick={() => setSidebarCollapsed()}
            >
                <span className="sr-only">Open sidebar</span>
                <MdMenu className="text-2xl" />
            </button>
            <div className="flex flex-1 justify-end px-4">
                <div className="ml-4 flex items-center md:ml-6">
                    <button
                        className="text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none  rounded-lg text-2xl p-2.5"
                    >
                        <MdLightMode />
                        <MdDarkMode className="hidden" />
                    </button>

                    <Menu as="div" className="relative ml-3">
                        <div>
                            <Menu.Button className="flex gap-2 max-w-xs items-center dark:text-white rounded-full text-sm focus:outline-none">
                                <span className="sr-only">Open user menu</span>
                                {username}
                                <MdExpandMore className="text-2xl" />
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
                                    <Link
                                        href={item.href}
                                        className={clsx(
                                            active ? 'bg-gray-100 dark:bg-gray-500' : '',
                                            'block px-4 py-2 text-sm text-gray-700 dark:text-white'
                                        )}
                                    >
                                        {item.name}
                                    </Link>
                                )}
                                </Menu.Item>
                            ))}
                            </Menu.Items>
                        </Transition>
                    </Menu>
                </div>
            </div>
        </div>
    );
};

export default Navbar;