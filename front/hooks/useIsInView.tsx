import React from 'react';

export default function useIsInView(): [boolean, React.RefObject<Element | null>] {
    const [isInView, setIsInView] = React.useState<boolean>(false);
    const elementRef = React.useRef<HTMLElement>(null);

    React.useEffect(() => {
        const observer = new IntersectionObserver((entries: IntersectionObserverEntry[]) => {
            const [entry] = entries;
            setIsInView(entry.isIntersecting);
        });

        if (elementRef.current) {
            observer.observe(elementRef.current);
        }

        return () => {
            observer.disconnect();
        };
    }, []);

    return [isInView, elementRef];
}