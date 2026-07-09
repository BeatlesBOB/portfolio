import React from 'react';
import { gsap } from 'gsap';
import { cn } from '@/lib/utils';
import { useGSAP } from '@gsap/react';
import useDisableScroll from '@/hooks/useDisableScroll';

export interface PopoverProps
    extends React.HTMLAttributes<HTMLDialogElement> {
    isOpen: boolean;
    setIsOpen: (status: boolean) => void;
    title?: string;
}


const Popover = ({ isOpen, className, children, setIsOpen, ...rest }: PopoverProps) => {
    const dialogRef = React.useRef<HTMLDialogElement>(null);
    const [handleDisableScroll, handleEnableScroll] = useDisableScroll();

    React.useEffect(() => {
        const dialog = dialogRef.current;
        if (!dialog) return;
        if (isOpen) {
            dialog.showModal();
            handleDisableScroll()
        } else {
            dialog.close();
            handleEnableScroll();
        }


    }, [isOpen]);


    useGSAP(() => {
        if (isOpen) {
            gsap.to(dialogRef.current, { translateX: 0, duration: 0.3 });
        } else {
            gsap.to(dialogRef.current, { translateX: '100%', duration: 0.3 });
        }
    }, { scope: dialogRef, dependencies: [isOpen] });


    return (
        <>
            <button className="shadow rounded-full" onClick={() => setIsOpen(true)}>
                Open Popover
            </button>
            <dialog
                ref={dialogRef}
                className={cn('fixed ml-auto translate-x-full flex flex-col max-w-[calc(100%-2rem)] w-[480px] md:w-[640px] max-h-full h-full p-5 backdrop:bg-primary/50', className)}
                onClose={() => setIsOpen(false)}
                {...rest}
            >
                <div className="grid grid-cols-[auto_1fr_auto] gap-2 items-center">
                    <button onClick={() => setIsOpen(false)}>X</button>
                </div>
                <div className="grow grid place-items-center">
                    {children}
                </div>
            </dialog>
        </>
    );
};

export default Popover;