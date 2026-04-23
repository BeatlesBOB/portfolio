import React from "react";
import NextLink, { type LinkProps as NextLinkProps } from 'next/link'

import { cva, type VariantProps } from "class-variance-authority";

const linkVariants = cva(
    [
        "",
    ],
    {
        variants: {
            size: {
                md: "py-2",
            },
        },
        defaultVariants: {
            size: "md",
        },
    }
);

export interface LinkProps
    extends NextLinkProps,
    VariantProps<typeof linkVariants> {
    children?: React.ReactNode
}

export default function Link({ children, ...rest }: LinkProps) {
    return (
        <NextLink {...rest}>{children}</NextLink>
    )
}