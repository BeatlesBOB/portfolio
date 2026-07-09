import React from 'react';

interface MousePosition {
    x: number;
    y: number;
}

const useMousePosition = (): [React.RefObject<HTMLElement | null>, MousePosition] => {
    const ref = React.useRef<HTMLElement | null>(null)
    const [mousePosition, setMousePosition] = React.useState<MousePosition>({ x: 0, y: 0 });

    React.useEffect(() => {
        const currentRef = ref.current;

        // 2. Si elle est nulle, on s'arrête là
        if (!currentRef) { return; }
        const handleMouseMove = (event: MouseEvent) => {
            setMousePosition({
                x: event.clientX,
                y: event.clientY,
            });
        };

        currentRef.addEventListener('mousemove', handleMouseMove);

        return () => {
            currentRef.removeEventListener('mousemove', handleMouseMove);
        }
    }, [ref])


    return [ref, mousePosition];
};

export default useMousePosition;