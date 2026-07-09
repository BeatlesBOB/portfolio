import React from 'react';

export interface GridProps
    extends React.HTMLAttributes<HTMLDivElement> {
    maxColCount?: number,
    size?: string,
    gap?: string
}

const Grid = ({ size = "200px", maxColCount = 3, gap = " 1rem", children, ...rest }: GridProps) => {
    return (
        <div className="grid" {...rest}
            style={{
                '--grid-max-col-count': maxColCount,
                '--grid-col-size-calc': 'calc((100% - var(--grid-gap) * var(--grid-max-col-count)) /var(--grid-max-col-count))',
                '--grid-col-min-size-calc': 'min( 100%, max(var(--grid-min-col-size), var(--grid-col-size-calc)));',
                gap: 'var(--grid-gap)',
                gridTemplateColumns: 'repeat( auto-fit, minmax(var(--grid-col-min-size-calc), 1fr))'
            } as React.CSSProperties}>
            {children}
        </div >
    );
};


export default Grid;