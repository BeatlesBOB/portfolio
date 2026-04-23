import React from "react";
import Sprites from "../../../assets/images/sprites.svg";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const iconVariants = cva(
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

export interface IconProps
    extends React.SVGAttributes<HTMLOrSVGElement>,
    VariantProps<typeof iconVariants> {
    id: string;
}

export default function Icon({ id, ...rest }: IconProps) {
    return (
        <svg  {...rest} >
            <use xlinkHref={`${Sprites}#${id}`}></use>
        </svg>
    )
}