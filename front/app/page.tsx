import React from 'react';

import Container from '@/components/Container';
import HomeHero from '@/components/HomeHero';
import ScrollSlider from '@/components/ScrollSlider';
import Card from '@/components/Card';
import Button from '@/components/Button';
import Paragraph from '@/components/Paragraph';
import { ArrowUpRight } from '@/components/Icons';
import Underline from '@/components/Underline';
import Projects from '@/components/Projects';

export default function Home() {
  return (
    <Container position={"full"} className='overflow-hidden'>
      <HomeHero />
      <Container className='max-w-[800px] mx-auto my-primary py-primary flex flex-col justify-center items-center gap-y-10'>
        <Paragraph className='text-center text-h4 font-medium'>
          Hello, je m'appelle Nathanaël, je vis à Lyon et je suis développeur front-end spécialisé dans le <Underline>développement web</Underline>
        </Paragraph>
        <Button intent="primary">A propos</Button>
      </Container>
      <Container className='flex gap-x-10 relative'>
        <Paragraph className='-rotate-180 origin-center text-center max-h-[500px]' style={{ writingMode: "vertical-rl" }}>
          Mes compétences qui transforment
          vos idées en interfaces d'exception.
        </Paragraph>
        <ScrollSlider>
          <Card style={{ width: "420px" }} title='Compétence 1' intent="outline" className='shrink-0'>
            <Paragraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc elementum libero quis est bibendum interdum.</Paragraph>
            <Button intent="link">En savoir plus <ArrowUpRight width={10} /></Button>
          </Card>
          <Card style={{ width: "420px" }} title='Compétence 1' intent="tertiary" className='shrink-0'>
            <Paragraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc elementum libero quis est bibendum interdum.</Paragraph>
            <Button intent="link">En savoir plus <ArrowUpRight width={10} /></Button>
          </Card>
          <Card style={{ width: "420px" }} title='Compétence 1' intent="tertiary-dark" className='shrink-0' >
            <Paragraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc elementum libero quis est bibendum interdum.</Paragraph>
            <Button intent="link">En savoir plus <ArrowUpRight width={10} /></Button>
          </Card>
          <Card style={{ width: "420px" }} title='Compétence 1' intent="secondary" className='shrink-0'>
            <Paragraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc elementum libero quis est bibendum interdum.</Paragraph>
            <Button intent="link">En savoir plus <ArrowUpRight width={10} /></Button>
          </Card>
          <Card style={{ width: "420px" }} title='Compétence 1' intent="outline" className='shrink-0'>
            <Paragraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc elementum libero quis est bibendum interdum.</Paragraph>
            <Button intent="link">En savoir plus <ArrowUpRight width={10} /></Button>
          </Card>
          <div className="flex flex-col items-center justify-center gap-y-secondary flex-col shrink-0" style={{ width: "800px" }}>
            <Paragraph className='text-center text-h4 font-medium'>
              Découvrez en plus sur mes compétences
            </Paragraph>
            <Button intent="primary">À propos</Button>
          </div>
        </ScrollSlider>
      </Container>
      <Container>
        <Projects />
      </Container>
    </Container>
  );
}
