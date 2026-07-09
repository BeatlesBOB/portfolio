import React from 'react';
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const heroVariants = cva(
    [
        "rounded-primary max-w-2xl flex flex-col gap-y-6 items-center px-12 pb-10 lg:px-14",
    ],
    {
        variants: {
            intent: {
                secondary: "bg-secondary",
                tertiary: "bg-tertiary",
            },
        },
        defaultVariants: {
            intent: "secondary",
        },
    }
);

const containerVariants = cva(
    "relative flex flex-col gap-y-7 items-center before:absolute before:inset-0 before:z-[-1] before:rounded-primary before:mx-auto before:content-[''] before:block before:max-w-2xl before:z-[-1] before:rounded-primary before:mx-auto",
    {
        variants: {
            intent: {
                secondary: "before:bg-secondary",
                tertiary: "before:bg-tertiary",
            },
        },
        defaultVariants: {
            intent: "secondary",
        },
    }
);

export interface HeroProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'color'>,
    VariantProps<typeof heroVariants> {
    heading: React.ReactNode;
}

const Hero = ({ heading, intent, className, children, ...rest }: HeroProps) => {
    return (
        <div className={cn(containerVariants({ intent }))}>
            {heading}
            <div className={cn(heroVariants({ intent }), className)} {...rest}>
                {children}
            </div>
        </div>
    );
};

export default Hero;