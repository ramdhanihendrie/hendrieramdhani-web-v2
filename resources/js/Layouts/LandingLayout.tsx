import FooterLanding from '@/Components/FooterLanding';
import NavBarLanding from '@/Components/NavBarLanding';
import { PropsWithChildren } from 'react';

export default function Landing({ children }: PropsWithChildren) {
    return (
        <>
            <NavBarLanding />
            <div className="min-h-screen bg-gray-100 dark:bg-slate-900 text-gray-900 dark:text-gray-100">
                {children}
            </div>
            <FooterLanding />
        </>
    );
}
