'use client'

import React from 'react';
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import SmoothScroller from "gsap/ScrollSmoother";
import ScrollTrigger from "gsap/ScrollTrigger";

interface ScrollSmootherProps {
    children?: React.ReactNode;
}

gsap.registerPlugin(ScrollTrigger, SmoothScroller);

const ScrollSmoother = ({ children }: ScrollSmootherProps) => {
    const wrapper = React.useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            SmoothScroller.create({
                wrapper: wrapper.current,
                smooth: 1.5,
                effects: true,
            });
        },
        { scope: wrapper }
    );

    return (
        <div ref={wrapper} id="smooth-wrapper">
            <div id="smooth-content">
                {children}
            </div>
        </div>
    );
};

export default ScrollSmoother;