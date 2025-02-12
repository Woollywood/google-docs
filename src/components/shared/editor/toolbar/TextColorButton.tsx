'use client';

import React from 'react';
import { editorStore } from '../store';
import { type ColorResult, SketchPicker } from 'react-color';
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';

export const TextColorButton: React.FC = () => {
	const value = editorStore.editor?.getAttributes('textStyle').color || '#000000';

	const onChange = (color: ColorResult) => {
		editorStore.editor?.chain().focus().setColor(color.hex).run();
	};

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<button className='flex h-7 min-w-7 shrink-0 flex-col items-center justify-center overflow-hidden rounded-sm px-1.5 text-sm transition-colors hover:bg-neutral-200/80'>
					<span className='text-xs'>A</span>
					<div className='h-0.5 w-full' style={{ backgroundColor: value }} />
				</button>
			</DropdownMenuTrigger>
			<DropdownMenuContent className='p-0'>
				<SketchPicker color={value} onChange={onChange} />
			</DropdownMenuContent>
		</DropdownMenu>
	);
};
