import { clsx, type ClassValue } from "clsx"
import { extendTailwindMerge } from "tailwind-merge"

const customTwMerge = extendTailwindMerge({
    extend: {
        classGroups: {
            "font-size": ["text-subtitle", 'text-paragraph', "text-h3", "text-h4", "text-h1"],
            "text-color": ["text-tertiary", "text-secondary"]
        },
    },
})

export function cn(...inputs: ClassValue[]) {
    return customTwMerge(clsx(inputs))
}