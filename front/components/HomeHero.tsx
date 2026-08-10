import React from 'react';

import Image from 'next/image';
import Heading from './Heading';
import Container from './Container';
import Paragraph from './Paragraph';
import { getHomeHeroContent } from '@/lib/wordpress';

const HomeHero = async () => {
    const { title, description } = await getHomeHeroContent()
    const processedTitle = title.split(' ');

    return (
        <section className='-mt-primary bg-primary-dark relative isolate'>
            <Container className='h-full grid grid-rows-[1fr_auto_1fr] min-h-[100dvh]'>
                <Heading level='h1' className='leading-none flex flex-col justify-start row-start-2'>
                    <span className='inline-block'>{processedTitle[0]}</span>
                    <span className='flex items-center flex-col-reverse sm:inline-block relative sm:ml-auto'>
                        {processedTitle[1]}
                        <Image className='sm:absolute left-0 top-0 size-[75px] xl:size-[100px] sm:-translate-y-[25%] sm:-translate-x-full md:-translate-x-[45%]'
                            alt=''
                            aria-hidden={true}
                            width={130}
                            height={118}
                            src="/loppo/icon/allard_icon_w-bg.svg" />
                    </span>
                </Heading>
                <div className="row-start-3 flex flex-col items-start gap-y-primary self-end pb-tertiary">
                    <Paragraph className='text-h4 max-w-[800px] font-medium '>
                        {description}
                    </Paragraph>
                    <Paragraph className='uppercase self-center'>
                        SCROLL DOWN
                    </Paragraph>
                </div>
            </Container>
            Badhes
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
