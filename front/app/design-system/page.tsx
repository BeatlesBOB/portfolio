import React from 'react';
import Container from '@/components/Container';
import Heading from '@/components/Heading';
import Hero from '@/components/Hero';
import Paragraph from '@/components/Paragraph';
import Badge from '@/components/Badge';
import Color from '@/components/Color';
import Input from '@/components/Input';
import TextArea from '@/components/TextArea'
import Card from '@/components/Card';
import Button from '@/components/Button';
import { ArrowUpRight } from '@/components/Icons';
import Underline from '@/components/Underline';
import Tooltip from '@/components/Tooltip';

export default function Home() {
  return (
    <Container className='my-16 flex flex-col gap-y-32'>
      <Container>
        <Hero heading={<Heading animate as='h1' level="h2" className='text-center'>Website Design System </Heading>}>
          <Heading level="subtitle">UX & UI</Heading>
          <Paragraph className='text-center'>
            Bienvenue dans l'espace dédié à l'identité visuelle de mon site. Ce Design System regroupe l'ensemble de mes composants, palette chromatique et des règles typographiques afin de garantir une expérience utilisateur cohérente. C'est le point de départ de mon site, les première pierres.
          </Paragraph>
        </Hero>
      </Container>
      <Container position='content' className='flex flex-col items-center gap-y-6'>
        <Heading level="h2">#Palette</Heading>
        <ul className='flex flex-wrap justify-center gap-5'>
          <li>
            <Color color='#25280b' content='Deep moss' title='#25280b'></Color>
          </li>
          <li>
            <Color color='#7c745e' content='Neutral' title='#7c745e'></Color>
          </li>
          <li>
            <Color color='#fef8e7' content='Ivory Sheet' title='#fef8e7'></Color>
          </li>
          <li>
            <Color color='#dcff10' content='Neon zest' title='#dcff10'></Color>
          </li>
          <li>
            <Color color='#66680d' content='Neon zest contrasted' title='#66680d'></Color>
          </li>
          <li>
            <Color color='#a7bdee' content='Open Sky' title='#a7bdee'></Color>
          </li>
          <li>
            <Color color='#546a9a' content='Open Sky contrasted' title='#546a9a'></Color>
          </li>
          <li>
            <Color color='#546a9a' content='Open Sky contrasted' title='#546a9a'></Color>
          </li>
          <li>
            <Color color='#ef4444' content='Coral Red' title='#ef4444'></Color>
          </li>
        </ul>
      </Container>
      <Container position='content' className='flex flex-col items-center gap-y-6'>
        <Heading level="h2">#Badge</Heading>
        <ul className='flex flex-wrap gap-5'>
          <li><Badge rotation={-10} intent="secondary">Mot clé</Badge></li>
          <li><Badge intent="secondary-dark">Mot clé</Badge></li>
          <li><Badge rotation={-10} intent="tertiary">Mot clé</Badge></li>
          <li><Badge intent="tertiary-dark">Mot clé</Badge></li>
          <li><Badge rotation={-10} intent="outline">Mot clé</Badge></li>
        </ul>
      </Container>
      <Container>
        <div className='flex flex-col items-center gap-y-6 mt-12'>
          <Heading level="h2">#Button</Heading>
          <div className='flex flex-wrap gap-5 items-end'>
            <Button intent="outline">Button</Button>
            <Button intent="secondary">Button</Button>
            <Button intent="secondary-dark">Button</Button>
            <Button intent="tertiary">Button</Button>
            <Button intent="tertiary-dark">Button</Button>
            <Button intent="link">Button <ArrowUpRight width={10} /></Button>
          </div>
        </div>
      </Container>
      <Container position="content">
        <div className='flex flex-col items-center gap-y-6 mt-12'>
          <Heading level="h2">#Card</Heading>
          <div className='flex flex-wrap  gap-5'>
            <Card title='Compétence 1' intent="outline">
              <Paragraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc elementum libero quis est bibendum interdum.</Paragraph>
              <Button intent="link">En savoir plus <ArrowUpRight width={10} /></Button>
            </Card>
            <Card title='Compétence 1' intent="tertiary">
              <Paragraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc elementum libero quis est bibendum interdum.</Paragraph>
              <Button intent="link">En savoir plus <ArrowUpRight width={10} /></Button>
            </Card>
            <Card title='Compétence 1' intent="tertiary-dark">
              <Paragraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc elementum libero quis est bibendum interdum.</Paragraph>
              <Button intent="link">En savoir plus <ArrowUpRight width={10} /></Button>
            </Card>
            <Card title='Compétence 1' intent="secondary">
              <Paragraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc elementum libero quis est bibendum interdum.</Paragraph>
              <Button intent="link">En savoir plus <ArrowUpRight width={10} /></Button>
            </Card>
            <Card title='Compétence 1' intent="secondary-dark">
              <Paragraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc elementum libero quis est bibendum interdum.</Paragraph>
              <Button intent="link">En savoir plus <ArrowUpRight width={10} /></Button>
            </Card>
          </div>
        </div>
      </Container>
      <Container className='flex flex-col items-center gap-y-6'>
        <Heading level="h2">#Form</Heading>
        <Input label='label' placeholder='Your name' />
        <Input label='label' placeholder='Your name' errorMsg='Error message' />
        <TextArea label='label' placeholder='Your name' />
        <TextArea label='label' placeholder='Your name' errorMsg='Error message' />
      </Container>
      <Container position="content">
        <div className='flex flex-col items-center gap-y-6 mt-12'>
          <Heading level="h2">#Typography</Heading>
          <div className='flex flex-col gap-y-12'>
            <div>
              <Heading as='h3' level="subtitle" >Paragraph</Heading>
              <Paragraph className='mt-2.5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Aliquam non justo auctor purus vulputate molestie.
                Morbi facilisis vel turpis sit amet consectetur. Mauris blandit, dui nec maximus iaculis, nisi ligula ullamcorper nisi, et aliquet mauris sem at nulla. Praesent non malesuada turpis. Integer pharetra tellus vitae magna semper pellentesque. Duis et ante id urna hendrerit pellentesque nec et ipsum. Phasellus eget purus ante. Nunc ut ultricies neque. Donec nibh quam, imperdiet quis eros ac, gravida viverra orci. Nulla magna sem, gravida vel lobortis nec, malesuada at elit. Curabitur ut odio ligula. Nullam euismod quam at turpis cursus luctus. Nunc auctor viverra tortor at ultrices. Mauris at consequat augue, vitae tristique sapien. Donec porta consectetur leo sed rutrum.
                Morbi imperdiet elit venenatis varius lobortis.
              </Paragraph>
            </div>
            <div>
              <Heading as='h3' level="subtitle" >H1</Heading>
              <Heading as='span' level="h1">Titre niv 1</Heading>
            </div>
            <div>
              <Heading as='h3' level="subtitle" >H2</Heading>
              <Heading as='span' level="h2">Titre niv 2</Heading>
            </div>
            <div >
              <Heading as='h3' level="subtitle" >H3</Heading>
              <Heading as='h3' level="h3">Titre niv 3</Heading>
            </div>
            <div >
              <Heading as='h3' level="subtitle" >H4</Heading>
              <Heading as='h4' level="h4">Titre niv 4</Heading>
            </div>
          </div>
        </div>
      </Container>
      <Container position="content">
        <Heading as='h3' level="subtitle" >Underline</Heading>
        <Paragraph className='mt-2.5'>
          Morbi facilisis vel turpis sit amet <Underline>consectetur</Underline>. Mauris blandit, dui nec Duis et ante id urna hendrerit pellentesque nec et ipsum. Phasellus eget purus ante. Nunc ut ultricies neque. Donec nibh quam, imperdiet quis eros ac, gravida viverra orci. Nulla magna sem, gravida vel lobortis nec, malesuada at elit. Curabitur ut odio ligula. Nullam euismod quam at turpis cursus luctus. Nunc auctor viverra tortor at ultrices. Mauris at consequat augue, vitae tristique sapien. Donec porta consectetur leo sed rutrum.
          Morbi imperdiet elit venenatis varius <Underline>lobortis.</Underline>
        </Paragraph>
        <Heading className='mt-5' as='h3' level="subtitle" >Tooltip</Heading>
        <Paragraph className='mt-2.5'>
          Morbi facilisis vel turpis sit amet <Tooltip title='extra' content='aled'>consectetur</Tooltip>. Mauris blandit, dui nec Duis et ante id urna hendrerit pellentesque nec et ipsum. Phasellus eget purus ante. Nunc ut ultricies neque. Donec nibh quam, imperdiet quis eros ac, gravida viverra orci. Nulla magna sem, gravida vel lobortis nec, malesuada at elit. Curabitur ut odio ligula. Nullam euismod quam at turpis cursus luctus. Nunc auctor viverra tortor at ultrices. Mauris at consequat augue, vitae tristique sapien. Donec porta consectetur leo sed rutrum.
          Morbi imperdiet elit venenatis varius.
        </Paragraph>
      </Container>

    </Container>
  );
}
