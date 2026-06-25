import React from "react";

export default function useEventListener<K extends keyof WindowEventMap>(type: K, callback: (evt: WindowEventMap[K]) => void) {
    const elementRef = React.useRef<HTMLElement>(null);

    React.useEffect(() => {
        const el = elementRef?.current || window;
        el.addEventListener(type, callback as EventListener)

        return () => {
            el.removeEventListener(type, callback as EventListener)
        }
    }, [])

    return [elementRef]
}