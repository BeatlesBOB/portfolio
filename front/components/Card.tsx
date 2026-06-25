import React from 'react';
import { cva, VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';
import Badge, { BadgeProps } from './Badge';
import { ArrowUpRight } from './Icons';

const cardVariants = cva(
    [
        'flex flex-col gap-y-6 ml-5 border border-transparent py-8 px-6 rounded-primary transition-transform hover:!rotate-none cursor-pointer text-primary-lighter'
    ],
    {
        variants: {
            intent: {
                tertiary: 'bg-tertiary',
                'tertiary-dark': 'bg-tertiary-dark',
                secondary: 'bg-secondary text-primary',
                'secondary-dark': 'bg-secondary-dark',
                outline: 'bg-transparent border-primary text-primary'
            },
        },
        defaultVariants: {
            intent: "tertiary",
        },
    }
);

export interface CardProps
    extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardVariants> {
    rotation?: number,
    title?: string
}

const intentMapping: Record<
    NonNullable<CardProps['intent']>,
    NonNullable<BadgeProps['intent']>
> = {
    tertiary: 'tertiary-dark',
    'tertiary-dark': 'tertiary',
    secondary: 'secondary-dark',
    'secondary-dark': 'secondary',
    outline: 'tertiary'
};

const Card = ({ intent, title, rotation = 0, style, className, children }: CardProps) => {
    const derivedBadgeIntent = intentMapping[intent || 'tertiary'];
    return (
        <div className={cn(cardVariants({ intent }), className,)} style={{ rotate: `${rotation}deg`, ...style }}>
            <div className="flex justify-end"><ArrowUpRight width={32} height={32} /></div>
            <Badge intent={derivedBadgeIntent} size={"lg"} rotation={-2} className='relative -left-12 mt-primary'>{title}</Badge>
            <div className='px-8 flex flex-col gap-y-6 text-paragraph'>
                {children}
            </div>
        </div>
    );
};

export default Card;