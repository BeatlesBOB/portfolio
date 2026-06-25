import React from "react";

interface AccordionProps extends React.HTMLAttributes<HTMLDetailsElement> { }

export function Accordion({ title, children, ...rest }: AccordionProps) {
    return (
        <details {...rest} className="">
            <summary>{title}</summary>
            {children}
        </details>
    )
}