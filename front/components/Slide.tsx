import { cn } from '@/lib/utils';
import React from 'react';

interface SlideProps extends React.HTMLAttributes<HTMLDivElement> { }

const Slide = ({ children, className }: SlideProps) => {
    return (
        <div className={cn('shrink-0 snap-start p-primary', className)} style={{ width: `calc(100% / var(--slidesToShow))` }}>
            {children}
        </div>
    );
};

export default Slide;