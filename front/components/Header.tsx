'use client';

import React from 'react';
import { cn } from '@/lib/utils';
import Logo from './Logo';
import Link from './Link';
import Container from './Container';
import Drawer from './Drawer';

const Header = () => {
    const [isOpen, setIsOpen] = React.useState(false);
    const drawerId = React.useId();

    const handleDrawerState = (status: boolean) => {
        setIsOpen(status);
    }

    return (
        <header className={cn('w-full z-10 fixed top-6')}>
            <Container className='bg-[#FFFBF0] py-4 px-8 rounded-primary flex justify-between'>
                <Logo />
                <button
                    onClick={() => setIsOpen(true)}
                    className='lg:hidden'
                    aria-haspopup="dialog"
                    aria-expanded={isOpen}
                    aria-controls={drawerId}
                >
                    Menu
                </button>
                <nav className='hidden lg:flex' aria-label="Navigation principale">
                    <ul className='flex gap-x-8 items-center'>
                        <li>
                            <Link href="">À propos</Link>
                        </li>
                        <li>
                            <Link href="">Mes projets</Link>
                        </li>
                        <li>
                            <Link intent="primary" href="" className='text-primary-lighter'>Contact</Link>
                        </li>
                    </ul>
                </nav>
                <Drawer id={drawerId} title="Menu de navigation" isOpen={isOpen} setIsOpen={handleDrawerState} className='lg:hidden'>
                    <nav className='flex flex-col justify-center h-full' aria-label="Navigation principale">
                        <ul className='flex flex-col gap-8 items-center'>
                            <li>
                                <Link href="">À propos</Link>
                            </li>
                            <li>
                                <Link href="">Mes projets</Link>
                            </li>
                            <li>
                                <Link intent="primary" href="">Contact</Link>
                            </li>
                        </ul>
                    </nav>
                </Drawer>
            </Container>
        </header>
    );
};

export default Header;