import clsx from 'clsx';
import {
    HiCalendar,
    HiChartBar,
    HiFolder,
    HiHome,
    HiInbox,
    HiUsers,
} from "react-icons/hi";
import { Link } from '@inertiajs/react';
import ApplicationLogo from '@/Components/ApplicationLogo';

type Props = {
    collapsed: boolean;
};

const navigation = [
    { name: 'Dashboard', href: '#', icon: HiHome, current: true },
    { name: 'Team', href: '#', icon: HiUsers, current: false },
    { name: 'Projects', href: '#', icon: HiFolder, current: false },
    { name: 'Calendar', href: '#', icon: HiCalendar, current: false },
    { name: 'Documents', href: '#', icon: HiInbox, current: false },
    { name: 'Reports', href: '#', icon: HiChartBar, current: false },
]

const Sidebar = ({
    collapsed,
}: Props) => {
    return (
        <div 
            className={clsx(
            "fixed md:static md:translate-x-0 z-20",
            "transition-all duration-300 ease-in-out",
            collapsed ? "w-[300px]" : "w-14",
        )}>
            <div className="flex flex-col justify-between h-screen sticky inset-0 w-full bg-white dark:border-gray-700 dark:bg-slate-800">
                <div className="flex flex-shrink-0 items-center px-4 h-[74px]">
                    <Link href="/">
                        <ApplicationLogo className="block h-14 w-auto fill-current text-indigo-500" />
                    </Link>
                </div>
                <div className="mt-5 flex flex-grow flex-col">
                    <nav className="flex-1 space-y-1 px-2 pb-4">
                        {navigation.map((item) => (
                        <a
                            key={item.name}
                            href={item.href}
                            className={clsx(
                            item.current 
                            ? 'bg-gray-100 dark:bg-slate-700 text-gray-900 dark:text-gray-100' 
                            : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900 dark:text-gray-200 dark:hover:bg-slate-600 dark:hover:text-gray-300',
                            'group flex items-center gap-2 px-2 py-2 text-sm font-medium rounded-md',
                            )}
                        >
                            <item.icon
                            className={clsx(
                                item.current 
                                ? 'text-gray-500 dark:text-gray-200' 
                                : 'text-gray-400 group-hover:text-gray-500 dark:group-hover:text-gray-400',
                                'flex-shrink-0 h-6 w-6'
                            )}
                            aria-hidden="true"
                            />
                            {collapsed && item.name}
                        </a>
                        ))}
                    </nav>
                </div>
            </div>
        </div>
    );
};
export default Sidebar;