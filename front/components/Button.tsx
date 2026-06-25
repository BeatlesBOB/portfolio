import React from 'react';
import { cva, VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

export const buttonVariants = cva([
    'cursor-pointer rounded-primary border border-transparent py-2 px-6 flex gap-x-2 relative transition-colors uppercase font-semibold text-paragraph leading-normal'
], {
    variants: {
        intent: {
            primary: 'bg-primary text-primary-lighter hover:bg-primary-light',
            tertiary: 'bg-tertiary text-tertiary-dark hover:bg-tertiary-dark hover:text-tertiary',
            'tertiary-dark': 'bg-tertiary-dark text-tertiary hover:bg-primary hover:text-primary-lighter',
            secondary: 'bg-secondary text-secondary-dark hover:bg-secondary-dark hover:text-secondary',
            'secondary-dark': 'bg-secondary-dark text-secondary hover:bg-primary hover:text-primary-lighter',
            outline: 'bg-transparent border-primary text-primary hover:bg-primary hover:text-primary-lighter',

            link: cn(
                'hover:after:scale-100',
                'w-fit py-0 px-0 bg-transparent items-baseline',
                'after:content-[""] after:transition-transform after:rounded-primary after:bottom-0 after:absolute after:w-full after:border-t-2',
                'after:origin-center after:scale-0 after:left-0'
            )
        }
    },
    defaultVariants: {
        intent: "tertiary",
    },
})

export interface ButtonProps
    extends Omit<React.HTMLAttributes<HTMLButtonElement>, 'color'>,
    VariantProps<typeof buttonVariants> {
}

const Button = ({ intent, className, children, ...rest }: ButtonProps) => {
    return (
        <button className={cn(buttonVariants({ intent }), className)} {...rest}>
            {children}
        </button>
    );
};

export default Button;