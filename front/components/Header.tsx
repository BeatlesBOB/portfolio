'use client';

import React from 'react';
import { cn } from '@/lib/utils';
import Logo from './Logo';
import Link from './Link';
import Container from './Container';
import Drawer from './Drawer';

const Header = () => {
    const [isOpen, setIsOpen] = React.useState(false);

    const handleDrawerState = (status: boolean) => {
        setIsOpen(status);
    }

    return (
        <header className={cn('w-full z-10 fixed top-6')}>
            <Container className='bg-[#FFFBF0] py-4 px-8 rounded-primary flex justify-between'>
                <Logo />
                <button onClick={() => setIsOpen(true)} className='lg:hidden'>Menu</button>
                <nav className='hidden lg:flex'>
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
                <Drawer isOpen={isOpen} setIsOpen={handleDrawerState} className='lg:hidden'>
                    <nav className='flex flex-col justify-center h-full'>
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