import React from 'react';
import { cva, VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';


const inputVariants = cva([
    'font-secondary text-semibold text-paragraph max-w-lg w-full'
], {
    variants: {
        disabled: {
            false: null,
            true: 'opacity-50'
        },
        error: {
            false: null,
            true: 'text-error'
        }
    },
    defaultVariants: {
        error: false,
        disabled: false,
    },
})

interface InputProps extends React.HTMLAttributes<HTMLInputElement>, VariantProps<typeof inputVariants> {
    label: string,
    placeholder: string,
    errorMsg?: string,
}

const Input = ({ label, placeholder, errorMsg, disabled, className, ...rest }: InputProps) => {
    const id = React.useId()
    return (
        <div className={cn(inputVariants({ disabled, error: errorMsg !== undefined }), className)}>
            <label htmlFor={id}>{label}</label>
            <input placeholder={placeholder} className="w-full block mt-2.5 py-4 px-6 bg-white rounded-primary border border-transparent focus:border-primary placeholder:text-primary-light" id={id} {...rest} />
            <span className='font-primary mt-3'>{errorMsg}</span>
        </div>
    );
};

export default Input;