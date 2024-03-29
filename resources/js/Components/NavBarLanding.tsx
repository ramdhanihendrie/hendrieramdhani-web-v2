import clsx from 'clsx';
import ToggleTheme from './ToggleTheme';
import ApplicationLogo from './ApplicationLogo';
import { Link } from '@inertiajs/react';
import { User } from '@/types';
import PrimaryButton from './PrimaryButton';

const navList = [
    { link: "#", title: "Home" },
    { link: "#about", title: "About" },
    { link: "#projects", title: "Projects" },
    { link: "#contact", title: "Contact" },
]

interface IUser {
    user: User
}

const Navbar = ({ user }: IUser)=> { 
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
                    <div className="ml-4 flex gap-5 items-center md:ml-6 text-grey-900 dark:text-white font-bold">
                        {
                            navList.map((nav, idx) => (
                                <a key={idx} href={nav.link} className='hover:text-gray-500'>
                                    {nav.title}
                                </a>
                            ))
                        }
                    </div>
                </div>
                {/* role admin */}
                { 
                    user?.role == "admin" && (
                        <Link href={route('adminDashboard')} className='border-r-2 pe-2 me-2 border-slate-500'>
                            <PrimaryButton>
                                Dashboard
                            </PrimaryButton>
                        </Link> 
                    )
                } 
                {/* role user */}
                { 
                    user?.role == "user" && (
                        <Link href={route('userDashboard')} className='border-r-2 pe-2 me-2 border-slate-500'>
                            <PrimaryButton>
                                Dashboard
                            </PrimaryButton>
                        </Link> 
                    )
                } 
                {/* Unauthenticated */}
                {
                    !user && (
                        <Link href={route('login')} className='border-r-2 pe-2 me-2 border-slate-500'>
                            <PrimaryButton>
                                Log In
                            </PrimaryButton>
                        </Link>
                    )
                }
                <ToggleTheme />
            </div>
        </div>
    );
};

export default Navbar;