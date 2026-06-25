import React from 'react';
import { cn } from '@/lib/utils';

interface ShimmerProps extends React.HTMLAttributes<HTMLDivElement> {
    width: number,
    height: number
}

const Shimmer = ({ className, width, height, ...rest }: ShimmerProps) => {
    return (
        <div className={cn('', className)}>

        </div>
    );
};

export default Shimmer;