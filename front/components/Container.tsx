import React from 'react';
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from '@/lib/utils';

const containerVariants = cva(
    [],
    {
        variants: {
            position: {
                content: 'col-[content]',
                "full": "col-[full]",
                'start-mid': 'col-start-[mid] col-end-[full]'
            },
        },
        defaultVariants: {
            position: "content",
        },
    }
);

export interface ContainerProps
    extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof containerVariants> {
}

const Container = ({ position, className, children, ...rest }: ContainerProps) => {
    return (
        <div className="grid grid-cols-[var(--container-grid)] w-full">
            <div className={cn(containerVariants({ position }), className)} {...rest}>
                {children}
            </div>
        </div>
    );
};

export default Container;