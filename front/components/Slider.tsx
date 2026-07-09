'use client'

import React from 'react';
import { cn } from '@/lib/utils';
import Button from './Button';

interface SliderProps extends React.HTMLAttributes<HTMLDivElement> {
    asDots?: boolean,
    asArrow?: boolean,
    slidesToShow?: number,
    arrowClassName?: string,
}

const Slider = ({ asArrow = false, asDots = false, slidesToShow = 3, className, arrowClassName, children }: SliderProps) => {
    const sliderRef = React.useRef<HTMLDivElement>(null);

    const handleClickOnNextSlide = () => {
        if (!sliderRef.current) {
            return;
        }

        sliderRef.current.scrollBy({ left: sliderRef.current.offsetWidth / slidesToShow, behavior: 'smooth' });
    }

    const handleClickOnPreviousSlide = () => {
        if (!sliderRef.current) {
            return;
        }

        sliderRef.current.scrollBy({ left: -sliderRef.current.offsetWidth / slidesToShow, behavior: 'smooth' });
    }

    return (
        <div className="flex flex-col gap-y-primary">
            <div ref={sliderRef} style={{ '--slidesToShow': slidesToShow } as React.CSSProperties}
                className={cn("flex overflow-x-auto snap-x snap-mandatory w-full scroll-smooth scrollbar-thumb-quaternary scrollbar-thumb-sky-700 scrollbar-track-sky-100", className)}>
                {children}
            </div>

            {asArrow && (
                <div className={cn("flex gap-x-secondary", arrowClassName)}>
                    <Button onClick={handleClickOnPreviousSlide}>Prev Button</Button>
                    <Button onClick={handleClickOnNextSlide}>Next Button</Button>
                </div>
            )}

            {asDots && (
                <div className="dots">
                    <a href="#s1" className="dot"></a>
                    <a href="#s2" className="dot"></a>
                    <a href="#s3" className="dot"></a>
                </div>
            )}
        </div >
    );
};

export default Slider;