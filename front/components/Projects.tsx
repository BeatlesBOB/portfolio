'use client';

import React from 'react';
import { useGSAP } from "@gsap/react";
import Image from 'next/image';
import Paragraph from './Paragraph';
import Button from './Button';
import Slider from './Slider';
import Slide from './Slide';

interface ProjectsProps {
    children?: React.ReactNode;
}

const Projects = ({ }: ProjectsProps) => {


    return (
        <section className='mt-primary flex flex-col items-center gap-y-primary'>
            <Paragraph>
                Découvrez mes projets
            </Paragraph>

            <Slider
                arrowClassName='xl:hidden'
                className='xl:grid xl:gap-y-secondary xl:grid-rows-[300fr_300fr_95fr_205fr_395fr] grid-cols-[110fr_420fr_110fr_136fr_110fr_420fr]' asArrow={true} slidesToShow={3}>
                <Slide className='!w-full !h-full !p-0 col-span-full xl:row-start-4 xl:row-end-6 xl:col-start-1 xl:col-end-3'>
                    <Image className='w-full h-[600px] object-cover' alt='' aria-hidden={true} width={420} height={420} src="/project.jpg" />
                </Slide>
                <Slide className='!w-full !h-full !p-0 col-span-full xl:row-start-1 xl:row-end-3 xl:col-start-2 xl:col-end-4 w-full h-[600px] object-cover'>
                    <Image className='w-full h-[600px] object-cover' alt='' aria-hidden={true} width={420} height={420} src="/project.jpg" />
                </Slide>
                <Slide className='!w-full !h-full !p-0 col-span-full xl:row-start-2 xl:row-end-5 xl:col-start-5 xl:col-end-7 w-full h-[600px] object-cover'>
                    <Image className='w-full h-[600px] object-cover' alt='' aria-hidden={true} width={420} height={420} src="/project.jpg" />
                </Slide>
                <Slide className='!w-full !h-full !p-0 col-span-full self-center xl:row-start-5 xl:row-end-6 xl:col-start-4 xl:col-end-7'>
                    <div className='flex flex-col items-start gap-y-secondary'>
                        <Paragraph>Introduction lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc elementum libero quis est bibendum interdum.</Paragraph>
                        <Button intent="primary">Mes projets</Button>
                    </div>
                </Slide>
            </Slider>
        </section>
    );
};

export default Projects;