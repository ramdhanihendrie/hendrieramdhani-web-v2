import clsx from 'clsx';
import ToggleTheme from './ToggleTheme';
import ApplicationLogo from './ApplicationLogo';
import { Link } from '@inertiajs/react';

const Navbar = () => { 
    return (
        <div 
            className={clsx(
                "bg-white dark:bg-slate-800 shadow",
                "flex items-center",
                "sticky z-10 px-4 shadow-sm h-[73px] top-0"
            )}
        >
            <div className='container mx-auto flex items-center'>
                <Link href="/">
                    <ApplicationLogo className="block h-14 w-auto fill-current text-indigo-500" />
                </Link>
                <div className="flex flex-1 justify-end px-4">
                    <div className="ml-4 flex items-center md:ml-6">
                        <ToggleTheme />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;