import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const headingVariants = cva(
    [
        "",
    ],
    {
        variants: {
            level: {
                h1: "text-4xl",
                h2: "text-3xl",
                h3: "text-2xl",
                h4: "text-xl",
                h5: "text-lg",
                h6: "text-base",
            },
        },
        defaultVariants: {
            level: "h2",
        },
    }
);

export interface HeadingProps
    extends React.HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof headingVariants> {
    as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6"
}



export default function Heading({ level, as, className, children, ...rest }: HeadingProps) {
    const Tag = as ?? level ?? "h2"

    return (
        <Tag className={cn(headingVariants({ level }), className)} {...rest}>
            {children}
        </Tag>
    )
}
