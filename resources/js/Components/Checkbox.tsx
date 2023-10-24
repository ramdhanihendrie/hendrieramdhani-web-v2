import { Children, InputHTMLAttributes } from 'react';

export default function Checkbox({ className = '', children, ...props }: InputHTMLAttributes<HTMLInputElement>) {
    return (
        <div className="flex items-center">
            <input
                {...props}
                type="checkbox"
                className={
                    'rounded border-gray-300 text-indigo-600 shadow-sm focus:outline-none' +
                    className
                }
            />
            <label htmlFor={props.id} className="ml-2 text-sm text-gray-600 dark:text-white select-none">{children}</label>
        </div>
    );
}
