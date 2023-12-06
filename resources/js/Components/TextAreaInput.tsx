import { forwardRef, useEffect, useImperativeHandle, useRef, TextareaHTMLAttributes } from 'react';

export default forwardRef(function TextInput(
    { className = '', isFocused = false, rows=3, ...props }: TextareaHTMLAttributes<HTMLTextAreaElement> & { isFocused?: boolean },
    ref
) {
    const localRef = useRef<HTMLTextAreaElement>(null);

    useImperativeHandle(ref, () => ({
        focus: () => localRef.current?.focus(),
    }));

    useEffect(() => {
        if (isFocused) {
            localRef.current?.focus();
        }
    }, []);

    return (
        <textarea
            {...props}
            rows={rows}
            className={
                'border-gray-300 dark:border-slate-400 dark:bg-slate-600 dark:text-white focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm resize-none ' +
                className
            }
            ref={localRef}
        />
    );
});
