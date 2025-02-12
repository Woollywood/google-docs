'use client';

import React from 'react';
import { Separator } from '@/components/ui/separator';
import { HeadingLevelButton } from './HeadingLevelButton';
import { FontFamilyButton } from './FontFamilyButton';
import { ToolbarButton } from './ToolbarButton';
import { observer } from 'mobx-react-lite';
import { useSection } from '../providers/SectionsProvider';

export const Toolbar: React.FC = observer(() => {
	const sections = useSection();

	return (
		<div className='bg-editor-toolbar-background w-editor-width mx-auto flex min-h-10 items-center gap-x-0.5 overflow-x-auto rounded-3xl px-2.5 py-0.5'>
			{sections[0].map((section) => (
				<ToolbarButton key={section.label} {...section} />
			))}
			<Separator orientation='vertical' className='h-6 bg-neutral-300' />
			<FontFamilyButton />
			<Separator orientation='vertical' className='h-6 bg-neutral-300' />
			<HeadingLevelButton />
			<Separator orientation='vertical' className='h-6 bg-neutral-300' />
			{sections[1].map((section) => (
				<ToolbarButton key={section.label} {...section} />
			))}
			<Separator orientation='vertical' className='h-6 bg-neutral-300' />
			{sections[2].map((section) => (
				<ToolbarButton key={section.label} {...section} />
			))}
			<Separator orientation='vertical' className='h-6 bg-neutral-300' />
		</div>
	);
});
