'use client';

import React from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { DrawSVGPlugin } from 'gsap/DrawSVGPlugin';
import Container from './Container';

interface ScrollSliderProps {
    children?: React.ReactNode;
}

gsap.registerPlugin(ScrollTrigger, DrawSVGPlugin);

const ScrollSlider = ({ children }: ScrollSliderProps) => {
    const sectionRef = React.useRef<HTMLDivElement>(null);
    const stripRef = React.useRef<HTMLDivElement>(null);
    const svgPathRef = React.useRef<SVGPathElement>(null);

    useGSAP(() => {
        const section = sectionRef.current;
        const strip = stripRef.current;
        const svgPath = svgPathRef.current;

        if (!section || !strip || !svgPath) return;

        gsap.set(svgPath, { drawSVG: "0%" });

        const tl = gsap.timeline();

        tl.to(strip, {
            x: () => -(strip.scrollWidth - section.offsetWidth),
            ease: "none",
            scrollTrigger: {
                trigger: strip,
                start: "center center",
                end: () => `+=${strip.scrollWidth / 2}`,
                scrub: 1,
                pin: true,
                pinSpacing: true,
                invalidateOnRefresh: true,
            }
        });

        tl.to(svgPath, {
            drawSVG: "100%",
            ease: "power1.inOut",
            scrollTrigger: {
                trigger: svgPath,
                start: "top center",
                end: "+=200",
                scrub: 1,
            }
        });

    }, { scope: sectionRef });

    return (
        <section ref={sectionRef} className="w-full pb-[420px]">
            <div ref={stripRef} className="col-span-full flex flex-nowrap w-max will-change-transform">
                {children}
            </div>
            <div className="w-full max-w-[calc(100%-100px)] bg-red-500 relative">
                <svg className="absolute left-1/2 pointer-events-none" height="421" viewBox="0 0 571 421" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        ref={svgPathRef}
                        d="M567.97 0.140015C571.97 57.14 499.47 197.64 388.97 197.64C278.47 197.64 276.47 129.64 291.47 120.14C306.47 110.64 348.47 118.14 342.97 197.64C337.47 277.14 230.47 298.004 130.97 313.64C40.4696 327.862 6.96957 392.307 1.96957 420.64"
                        stroke="#25280B"
                        strokeWidth="4"
                    />
                </svg>
            </div>

        </section>
    );
};

export default ScrollSlider;