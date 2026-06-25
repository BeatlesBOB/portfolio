import React from 'react';

interface DiscoverCursorProps {
    children?: React.ReactNode;
}

const DiscoverCursor = ({ }: DiscoverCursorProps) => {
    const handleMouseMove = (event: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {

    }

    return (
        <span onMouseMove={handleMouseMove}>

        </span>
    );
};

export default DiscoverCursor;