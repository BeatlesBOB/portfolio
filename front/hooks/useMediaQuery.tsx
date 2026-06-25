import React from "react";

export default function useMediaQuery(query: string): boolean {
    const matchMedia = React.useMemo(() => window.matchMedia(query), [query]);
    const [matches, setMatches] = React.useState<boolean>(() => {
        return matchMedia.matches
    });

    React.useEffect(() => {
        const handleChange = () => {
            setMatches(matchMedia.matches);
        }

        matchMedia.addEventListener("change", handleChange);

        return () => {
            matchMedia.removeEventListener("change", handleChange);
        };
    }, [query]);

    return matches;
}