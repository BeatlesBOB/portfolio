'use client'

import React from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import Image from 'next/image';
import Badge, { BadgeProps } from './Badge';
import Heading from './Heading';
import Container from './Container';
import Paragraph from './Paragraph';

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

const HomeHero = () => {
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
        <section onMouseMove={handleMouseMove} ref={containerRef} className='-mt-primary bg-primary-dark relative isolate'>
            <Container className='h-full grid grid-rows-[1fr_auto_1fr] min-h-[100dvh]'>
                <Heading level='h1' className='leading-none flex flex-col justify-start row-start-2'>
                    <span className='inline-block'>Développeur</span>
                    <span className='inline-block relative ml-auto'>
                        front-end
                        <Image className='absolute top-0 -translate-y-[25%] -translate-x-[45%]' alt='' aria-hidden={true} width={130} height={118} src="/loppo/icon/allard_icon_w-bg.svg" />
                    </span>
                </Heading>
                <div className="row-start-3 flex flex-col items-start gap-y-primary self-end pb-tertiary">
                    <Paragraph className='text-h4 max-w-[800px] font-medium '>
                        Le dev idéal pour dominer le web, petite phrase de description
                    </Paragraph>
                    <Paragraph className='uppercase self-center'>
                        SCROLL DOWN
                    </Paragraph>
                </div>
            </Container>
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
            <div className="max-h-[75vh] w-[120vw] absolute -bottom-1 left-1/2 -translate-x-1/2 -z-10 overflow-hidden">
                <svg
                    viewBox="0 0 100 50"
                    preserveAspectRatio="none"
                    className="w-full h-full text-primary-lighter block"
                >
                    <circle cx="50" cy="50" r="50" fill="currentColor" />
                </svg>
            </div>
        </section>
    );
};

export default HomeHero;
