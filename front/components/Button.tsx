import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
    [
        "font-semibold",
    ],
    {
        variants: {
            variant: {
                primary: [

                ],

            },
            size: {
                md: "py-2",
            },
        },
        defaultVariants: {
            variant: "primary",
            size: "md",
        },
    }
);

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
    loading?: boolean;
    leftIcon?: React.ReactNode;
    rightIcon?: React.ReactNode;
    asChild?: boolean;
}



const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    (
        {
            className,
            variant,
            size,
            loading = false,
            disabled,
            leftIcon,
            rightIcon,
            children,
            ...props
        },
        ref
    ) => {
        const isDisabled = disabled || loading;

        return (
            <button
                ref={ref}
                disabled={isDisabled}
                aria-busy={loading}
                className={cn(buttonVariants({ variant, size }), className)}
                {...props}
            >

                {children}

                {!loading && rightIcon && (
                    <span className="shrink-0 [&>svg]:h-4 [&>svg]:w-4">{rightIcon}</span>
                )}
            </button>
        );
    }
);


export { Button, buttonVariants };
