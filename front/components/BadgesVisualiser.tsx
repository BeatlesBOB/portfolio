'use client';

import React from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import Badge, { BadgeProps } from './Badge';

interface BadgesVisualiserProps {
    children?: React.ReactNode;
}

interface BadgeItem {
    id: React.Key;
    children: React.ReactNode;
    type: BadgeProps['intent'];
    x?: number;
    y?: number;
}

const BADGES: BadgeItem[] = [
    {
        id: Date.now() + Math.random(),
        children: '⚡️ Fast',
        type: 'tertiary'
    },
    {
        id: Date.now() + Math.random(),
        children: '🚀 Scale',
        type: 'secondary'
    },
    {
        id: Date.now() + Math.random(),
        children: '🎨 Design',
        type: 'secondary-dark'
    },
    {
        id: Date.now() + Math.random(),
        children: '✨ Clean',
        type: 'tertiary-dark'
    },
    {
        id: Date.now() + Math.random(),
        children: '💻 Code',
        type: 'secondary-dark'
    },
    {
        id: Date.now() + Math.random(),
        children: '🔥 UI/UX',
        type: 'secondary'
    },
    {
        id: Date.now() + Math.random(),
        children: '⚡️ Fast',
        type: 'tertiary'
    },
    {
        id: Date.now() + Math.random(),
        children: '⚡️ Fast',
        type: 'tertiary'
    },
    {
        id: Date.now() + Math.random(),
        children: '⚡️ Fast',
        type: 'tertiary'
    },
    {
        id: Date.now() + Math.random(),
        children: '⚡️ Fast',
        type: 'tertiary'
    },
    {
        id: Date.now() + Math.random(),
        children: '🚀 Scale',
        type: 'secondary'
    },
    {
        id: Date.now() + Math.random(),
        children: '🎨 Design',
        type: 'secondary-dark'
    },
    {
        id: Date.now() + Math.random(),
        children: '✨ Clean',
        type: 'tertiary-dark'
    },
    {
        id: Date.now() + Math.random(),
        children: '💻 Code',
        type: 'secondary-dark'
    },
    {
        id: Date.now() + Math.random(),
        children: '🔥 UI/UX',
        type: 'secondary'
    },
    {
        id: Date.now() + Math.random(),
        children: '⚡️ Fast',
        type: 'tertiary'
    },
    {
        id: Date.now() + Math.random(),
        children: '⚡️ Fast',
        type: 'tertiary'
    },
    {
        id: Date.now() + Math.random(),
        children: '⚡️ Fast',
        type: 'tertiary'
    },
];

const GAP = 250;

const BadgesVisualiser = ({ }: BadgesVisualiserProps) => {
    const containerRef = React.useRef(null);
    const currentBadgeIndex = React.useRef(0);
    const badgesRefs = React.useRef<Array<HTMLElement>>([]);
    const lastMousePos = React.useRef({ x: 0, y: 0 })
    const { contextSafe } = useGSAP({ scope: containerRef });

    const handleMouseMove = contextSafe((evt: React.MouseEvent) => {
        let travelDistance = Math.hypot(
            lastMousePos.current.x - evt.clientX,
            lastMousePos.current.y - evt.clientY
        );

        if (travelDistance < GAP) {
            return;
        }

        lastMousePos.current = {
            x: evt.clientX,
            y: evt.clientY
        };

        const currentBadge = gsap.utils.wrap(badgesRefs.current, currentBadgeIndex.current);

        gsap.killTweensOf(currentBadge)
        gsap.set(currentBadge, {
            opacity: 1,
            left: evt.clientX,
            top: evt.clientY,
            rotateZ: 'random([-10, 10])',
        });

        let tl = gsap.timeline({
            onComplete: () => {
                gsap.set(currentBadge, { clearProps: "all" })
            }
        });

        tl.from(currentBadge, {
            scale: 3,
            opacity: 0,
            duration: 0.4,
        })

        tl.add("pause", "+=1")

        tl.to(currentBadge, {
            scale: 3,
            opacity: 0,
            duration: 0.3,
            ease: "power2.in"
        }, 'pause');

        currentBadgeIndex.current++
    })

    return (
        <div onMouseMove={handleMouseMove} ref={containerRef}>
            {BADGES.map(({ children, type }, index) => (
                <Badge
                    ref={(el) => {
                        if (el) {
                            badgesRefs.current.push(el)
                        }
                    }}
                    key={index}
                    intent={type}
                    className='opacity-0 z-10 fixed pointer-events-none'
                >
                    {children}
                </Badge>
            ))}
        </div>
    );
};

export default BadgesVisualiser;