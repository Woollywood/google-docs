'use client';

import React from 'react';
import { editorStore } from '../store';
import { type ColorResult, SketchPicker } from 'react-color';
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { HighlighterIcon } from 'lucide-react';

export const HighlightColorButton: React.FC = () => {
	const value = editorStore.editor?.getAttributes('highlight').color || '#ffffff';

	const onChange = (color: ColorResult) => {
		editorStore.editor?.chain().focus().setHighlight({ color: color.hex }).run();
	};

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<button className='flex h-7 min-w-7 shrink-0 flex-col items-center justify-center overflow-hidden rounded-sm px-1.5 text-sm transition-colors hover:bg-neutral-200/80'>
					<HighlighterIcon className='size-4' />
				</button>
			</DropdownMenuTrigger>
			<DropdownMenuContent className='p-0'>
				<SketchPicker color={value} onChange={onChange} />
			</DropdownMenuContent>
		</DropdownMenu>
	);
};
