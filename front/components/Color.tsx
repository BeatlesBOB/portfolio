import React from "react";
import { cn } from "@/lib/utils";

export interface ColorProps
    extends React.HTMLAttributes<HTMLDivElement> {
    color: string;
    title?: string,
    content?: string
}

const Color = ({ color, title, content, className, ...rest }: ColorProps) => {
    return (
        <div tabIndex={0} className={cn('group/color relative isolate cursor-pointer mt-20', className)} {...rest}>
            {(title || content) && (
                <div className="border rounded-primary rounded-b-none p-3 pb-7 left-0 right-0 absolute z-[-1] transition-transform transform-cpu group-focus/color:-translate-y-[calc(100%-25px)] group-hover/color:-translate-y-[calc(100%-25px)] text-center flex flex-col gap-y-2.5">
                    <span className="font-secondary font-bold uppercase">{title}</span>
                    <span className="font-primary text-xs">{content}</span>
                </div>
            )}
            <div className="h-32 w-32 aspect-square border rounded-primary" style={{ backgroundColor: color }}></div>
        </div >
    )
}

export default Color