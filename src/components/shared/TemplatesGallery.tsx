'use client';

import React from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { cn } from '@/lib/utils';
import Image from 'next/image';

interface Template {
	id: string;
	label: string;
	imageUrl: string;
}

const templates: Template[] = [
	{ id: 'blank', label: 'Blank Document', imageUrl: '/blanks/blank-document.svg' },
	{ id: 'software-proposal', label: 'Software development proposal', imageUrl: '/blanks/software-proposal.svg' },
	{ id: 'project-proposal', label: 'Project proposal', imageUrl: '/blanks/project-proposal.svg' },
	{ id: 'business-letter', label: 'Business letter', imageUrl: '/blanks/business-letter.svg' },
	{ id: 'resume', label: 'Resume', imageUrl: '/blanks/resume.svg' },
	{ id: 'cover-letter', label: 'Cover letter', imageUrl: '/blanks/cover-letter.svg' },
	{ id: 'letter', label: 'Letter', imageUrl: '/blanks/letter.svg' },
];

export const TemplatesGallery: React.FC = () => {
	const isCreating = false;

	return (
		<div className='flex flex-col gap-y-4'>
			<h3 className='font-medium'>Start a new document</h3>
			<Carousel>
				<CarouselContent className='-ml-4'>
					{templates.map(({ id, label, imageUrl }) => (
						<CarouselItem
							key={id}
							className='basis-1/2 pl-4 sm:basis-1/3 md:basis-1/4 lg:basis-1/5 xl:basis-1/6 2xl:basis-[14.285714%]'>
							<div
								className={cn('flex aspect-[3/4] flex-col gap-y-2.5', {
									'pointer-events-none opacity-50': isCreating,
								})}>
								<button
									className='relative flex size-full flex-col items-center justify-center gap-y-4 rounded-sm border bg-white transition hover:border-blue-500 hover:bg-blue-50'
									disabled={isCreating}
									onClick={() => {}}>
									<Image src={imageUrl} fill alt={label} />
								</button>
								<p className='truncate text-sm font-medium'>{label}</p>
							</div>
						</CarouselItem>
					))}
				</CarouselContent>
				<CarouselPrevious />
				<CarouselNext />
			</Carousel>
		</div>
	);
};
