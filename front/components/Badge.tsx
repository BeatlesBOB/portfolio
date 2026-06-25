import React from 'react';
import { cva, VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

export const badgeVariants = cva(
    [
        'border border-transparent rounded-primary transition-transform hover:!rotate-none py-2 px-6'
    ],
    {
        variants: {
            intent: {
                tertiary: 'bg-tertiary text-tertiary-dark',
                'tertiary-dark': 'bg-tertiary-dark text-tertiary',
                secondary: 'bg-secondary text-secondary-dark',
                'secondary-dark': 'bg-secondary-dark text-secondary',
                outline: 'bg-transparent border-primary text-primary'
            },
            size: {
                sm: 'text-paragraph',
                lg: 'text-subtitle py-5 px-8'
            }
        },
        defaultVariants: {
            intent: "tertiary",
            size: 'sm'
        },
    }
);

export interface BadgeProps
    extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {
    rotation?: number,
    ref?: React.Ref<HTMLElement | null>;
}

const Badge = ({ intent, rotation = 0, className, size, style, children, ref, ...rest }: BadgeProps) => {
    return (
        <span ref={ref} className={cn(badgeVariants({ intent, size }), className)} style={{ rotate: `${rotation}deg`, ...style }} {...rest}>
            {children}
        </span>
    );
};

export default Badge;