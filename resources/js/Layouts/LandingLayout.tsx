import FooterLanding from '@/Components/FooterLanding';
import NavBarLanding from '@/Components/NavBarLanding';
import { PropsWithChildren } from 'react';
import { User } from '@/types';

export default function Landing({ user, children }: PropsWithChildren<{user: User}>) {
    return (
        <>
            <NavBarLanding user={user} />
            <div className="min-h-screen bg-gray-100 dark:bg-slate-900 text-gray-900 dark:text-gray-100">
                {children}
            </div>
            <FooterLanding />
        </>
    );
}
