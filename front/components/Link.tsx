import React from "react";
import NextLink, { type LinkProps as NextLinkProps } from 'next/link'
import { cn } from "@/lib/utils";
import { buttonVariants } from "./Button";
import { VariantProps } from "class-variance-authority";

export interface LinkProps
    extends NextLinkProps, VariantProps<typeof buttonVariants> {
    children?: React.ReactNode,
    className?: string
}

const Link = ({ intent = 'link', className, children, ...rest }: LinkProps) => {
    return (
        <NextLink className={cn(buttonVariants({ intent }), className)} {...rest}>
            {children}
        </NextLink>
    )
}

export default Link