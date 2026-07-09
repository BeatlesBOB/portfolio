import React from 'react';

interface UseOnClickOutsideProps {
    callback: () => void;
}

export default function useOnClickOutside({ callback }: UseOnClickOutsideProps): void {
    const elementRef = React.useRef<HTMLElement>(null);

    React.useEffect(() => {
        if (!elementRef.current) {
            throw Error("useOnClickOutside: ref non attaché à un élément.")
        }

        const handleClick = (event: MouseEvent) => {
            if (!elementRef.current?.contains(event.target as Node)) {
                callback();
            }
        };

        document.addEventListener('mousedown', handleClick);

        return () => {
            document.removeEventListener('mousedown', handleClick);
        };
    }, [callback]);
}