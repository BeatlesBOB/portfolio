import React from "react";
import { QuestionMark } from "./Icons";

type Position = 'right' | 'left' | 'top' | 'bottom'

export interface TooltipProps
    extends React.HTMLAttributes<HTMLDivElement> {
    title?: string,
    content?: string,
    position?: Position,
    gap?: number
}

const positionMapping: Record<
    NonNullable<Position>,
    NonNullable<Position>
> = {
    'bottom': 'top',
    'top': 'bottom',
    'left': 'right',
    'right': 'left'
};

export default function Tooltip({ title, content, children, position = 'top', gap = 10, ...rest }: TooltipProps) {
    const id = React.useId();
    const anchor = `--anchor-${id}`;
    const positionProperty = position === 'top' || position === 'bottom' ? 'bottom' : 'left';
    const derivedPositionValue = positionMapping[position]

    return (
        <span className="inline-flex gap-x-2 group/tooltip">
            <span className="fixed bg-white p-5 opacity-0 group-hover/tooltip:opacity-100" style={{
                justifySelf: 'anchor-center',
                positionAnchor: anchor,
                [positionProperty]: `anchor(${derivedPositionValue})`,
                [`margin${derivedPositionValue.charAt(0).toUpperCase() + derivedPositionValue.slice(1)}`]: gap + 24
            }} >
                {title}
                {content}
            </span>
            {children}
            <span style={{ anchorName: anchor }}>
                <QuestionMark width={24} height={24} />
            </span>
        </span>
    )
}
