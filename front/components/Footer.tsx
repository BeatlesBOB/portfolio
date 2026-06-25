import React from 'react';
import Image from 'next/image';
import Container from './Container';
import Heading from './Heading';
import Underline from './Underline';

interface FooterProps {
    children?: React.ReactNode;
}

const Footer = ({ }: FooterProps) => {
    return (
        <footer className="rounded-t-primary bg-primary w-full pt-14 pb-8 mt-[275px] relative">
            <Container className="grid relative">
                <Underline className='w-fit'><Heading className='text-secondary block w-max' as='span' level="h1">Travaillons <br /> Ensemble !</Heading></Underline>
                <div className="order-none">
                    <Image className='max-w-[420px] top-0 right-0 w-full absolute lg:w-[420px] -translate-y-[90%] xl:-translate-y-[65%]' alt=' Logo' src="/loppo/Loppo_cool_HD.png" width="341" height="301" />
                </div>
                <div className="mt-16 col-span-full grid items-end gap-5 sm:grid-cols-4 text-primary-lighter font-semibold">
                    <div className="flex flex-col gap-y-2 col-span-full xl:col-end-2">
                        <span className='text-paragraph font-secondary font-extrabold'>ALLARD</span>
                        <span className='text-paragraph font-secondary font-extrabold'>mail.pro@allard.com</span>
                    </div>
                    <div className="flex flex-col gap-y-2">
                        <span>À propos</span>
                        <span>À propos</span>
                    </div>
                    <div className="flex flex-col gap-y-2">
                        <span>À propos</span>
                        <span>À propos</span>
                    </div>
                    <div className="flex flex-col gap-y-2">
                        <span>À propos</span>
                        <span>À propos</span>
                    </div>
                </div>
                <div className="col-span-full flex flex-wrap gap-2 mt-secondary text-primary-light">
                    <span>© 2026 - Nathanaël Allard x Oraya studio</span>
                    <span>Mentions légales </span>
                    <span>Politique de confidentialité</span>
                </div>
            </Container>
        </footer >
    );
};

export default Footer;