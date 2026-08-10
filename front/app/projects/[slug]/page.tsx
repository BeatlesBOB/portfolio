import React from 'react';

import { notFound } from 'next/navigation';
import Image from 'next/image';
import Container from '@/components/Container';
import Heading from '@/components/Heading';
import { getProjectBySlug } from '@/lib/wordpress';

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const featuredImage = project.featuredImage?.node;

  return (
    <Container position="full" className="overflow-hidden">
      <Container className="max-w-[800px] mx-auto my-primary py-primary flex flex-col gap-y-primary">
        <Heading level="h1">{project.title}</Heading>
        {featuredImage && (
          <Image
            className="w-full h-auto object-cover"
            src={featuredImage.sourceUrl}
            alt={featuredImage.altText ?? ''}
            width={800}
            height={450}
          />
        )}
        <div
          className="font-primary text-paragraph text-pretty"
          dangerouslySetInnerHTML={{ __html: project.content ?? '' }}
        />
      </Container>
    </Container>
  );
}
