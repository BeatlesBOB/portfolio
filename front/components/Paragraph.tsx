import React from 'react';
import { cn } from "@/lib/utils";

interface ParagraphProps extends React.HTMLAttributes<HTMLParagraphElement> { }

const Paragraph = ({ className, children, ...rest }: ParagraphProps) => {
    return (
        <p className={cn('font-primary tracking-wide text-paragraph text-pretty', className)} {...rest}>
            {children}
        </p>
    );
};

export default Paragraph;