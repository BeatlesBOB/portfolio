import React from 'react';

import { cn } from '@/lib/utils';
import Logo from './Logo';
import Link from './Link';
import Container from './Container';

const Header = () => {
    return (
        <header className={cn(
            'w-full z-10 sticky top-6',
        )}>
            <Container className='bg-[#FFFBF0] py-4 px-8 rounded-primary flex justify-between'>
                <Logo />
                <nav className='flex'>
                    <ul className='flex gap-x-8 items-center'>
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
            </Container>

        </header>
    );
};

export default Header;