'use client'

import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import gsap from 'gsap';
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';

gsap.registerPlugin(ScrollTrigger, SplitText, useGSAP);

export const headingVariants = cva(
    [
        "font-secondary font-extrabold text-balance hyphens-auto break-normal",
    ],
    {
        variants: {
            level: {
                h1: "text-h1",
                h2: "text-h2",
                h3: "text-h3",
                h4: "text-h4",
                h5: "text-2xl",
                h6: "text-xl",
                subtitle: "text-subtitle font-semibold font-primary uppercase text-primary-light"
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
    as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | 'span',
    animate?: boolean
}


const Heading = ({ level, as, className, animate = false, children, ...rest }: HeadingProps) => {
    const headingRef = React.useRef(null)
    const Tag = as ?? (level && level !== "subtitle" ? level : "h2");

    useGSAP(() => {
        if (!animate || !headingRef.current) return;

        const split = SplitText.create(headingRef.current, {
            type: "words, chars"
        });

        gsap.from(split.chars, {
            scrollTrigger: {
                trigger: headingRef.current,
                start: "top bottom"
            },
            y: 100,
            autoAlpha: 0,
            duration: 0.8,
            stagger: 0.025,
            ease: "power4.out",
        });

    }, { scope: headingRef, dependencies: [animate] });

    return (
        <Tag ref={headingRef} className={cn(headingVariants({ level }), className)} {...rest}>
            {children}
        </Tag>
    )
}

export default Heading;