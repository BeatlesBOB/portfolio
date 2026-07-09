import React from 'react';
import { cn } from '@/lib/utils';
import { ZigZag } from './Icons';

interface UnderlineProps extends React.HTMLAttributes<HTMLSpanElement> { }

const Underline = ({ className, children, ...rest }: UnderlineProps) => {
    return (
        <span className={cn('inline-block', className)}  {...rest}>
            {children}
            <ZigZag />
        </span>
    );
};

export default Underline;