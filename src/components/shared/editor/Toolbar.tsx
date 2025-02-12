'use client';

import React from 'react';
import {
	BoldIcon,
	ChevronDownIcon,
	ItalicIcon,
	ListTodoIcon,
	LucideIcon,
	MessageSquareIcon,
	PrinterIcon,
	Redo2Icon,
	RemoveFormattingIcon,
	SpellCheckIcon,
	UnderlineIcon,
	Undo2Icon,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { editorStore } from './store';
import { Separator } from '@/components/ui/separator';

import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

interface Font {
	label: string;
	value: string;
}

const FontFamilyButton: React.FC = () => {
	const fonts: Font[] = [
		{ label: 'Arial', value: 'Arial' },
		{ label: 'Times New Roman', value: 'Times New Roman' },
		{ label: 'Courier New', value: 'Courier New' },
		{ label: 'Georgia', value: 'Georgia' },
		{ label: 'Verdana', value: 'Verdana' },
	];

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<button className='flex h-7 w-[7.5rem] shrink-0 items-center justify-between overflow-hidden rounded-sm px-1.5 text-sm transition-colors hover:bg-neutral-200/80'>
					<span className='truncate'>
						{editorStore.editor?.getAttributes('textStyle').FontFamily || 'Arial'}
					</span>
					<ChevronDownIcon className='ml-2 size-4 shrink-0' />
				</button>
			</DropdownMenuTrigger>
			<DropdownMenuContent className='flex flex-col gap-y-1 p-1'>
				{fonts.map(({ label, value }) => (
					<DropdownMenuItem key={value} className='p-0'>
						<button
							className={cn(
								'flex w-full items-center gap-x-2 rounded-sm px-2 py-1 transition-colors hover:bg-neutral-200/80',
								{
									'bg-neutral-200/80':
										editorStore.editor?.getAttributes('textStyle').FontFamily === value,
								},
							)}
							style={{ fontFamily: value }}
							onClick={() => editorStore.editor?.chain().focus().setFontFamily(value).run()}>
							<span className='text-sm'>{label}</span>
						</button>
					</DropdownMenuItem>
				))}
			</DropdownMenuContent>
		</DropdownMenu>
	);
};

interface ToolbarButtonProps {
	onClick?: () => void;
	isActive?: boolean;
	icon: LucideIcon;
}

const ToolbarButton: React.FC<ToolbarButtonProps> = ({ icon: Icon, isActive, onClick }) => {
	return (
		<button
			className={cn(
				'flex h-7 min-w-7 items-center justify-center rounded-sm text-sm transition-colors hover:bg-neutral-200/80',
				{ 'bg-neutral-200/80': isActive },
			)}
			onClick={onClick}>
			<Icon className='size-4' />
		</button>
	);
};

type ToolbarSection = {
	label: string;
	icon: LucideIcon;
	onClick: () => void;
	isActive?: boolean;
}[];

export const Toolbar: React.FC = () => {
	const sections: ToolbarSection[] = [
		[
			{ label: 'Undo', icon: Undo2Icon, onClick: () => editorStore.editor?.chain().focus().undo().run() },
			{ label: 'Redo', icon: Redo2Icon, onClick: () => editorStore.editor?.chain().focus().redo().run() },
			{ label: 'Print', icon: PrinterIcon, onClick: () => window.print() },
			{
				label: 'Spell check',
				icon: SpellCheckIcon,
				onClick: () => {
					const current = editorStore.editor?.view.dom.getAttribute('spellcheck');
					editorStore.editor?.view.dom.setAttribute('spellcheck', current === 'false' ? 'true' : 'false');
				},
			},
		],
		[
			{
				label: 'Bold',
				icon: BoldIcon,
				isActive: editorStore.editor?.isActive('bold'),
				onClick: () => editorStore.editor?.chain().focus().toggleBold().run(),
			},
			{
				label: 'Italic',
				icon: ItalicIcon,
				isActive: editorStore.editor?.isActive('italic'),
				onClick: () => editorStore.editor?.chain().focus().toggleItalic().run(),
			},
			{
				label: 'Underline',
				icon: UnderlineIcon,
				isActive: editorStore.editor?.isActive('underline'),
				onClick: () => editorStore.editor?.chain().focus().toggleUnderline().run(),
			},
		],
		[
			{ label: 'Comment', icon: MessageSquareIcon, isActive: false, onClick: () => console.log('Todo comment') },
			{
				label: 'List Todo',
				icon: ListTodoIcon,
				isActive: editorStore.editor?.isActive('taskList'),
				onClick: () => editorStore.editor?.chain().focus().toggleTaskList().run(),
			},
			{
				label: 'Remove formatting',
				icon: RemoveFormattingIcon,
				onClick: () => editorStore.editor?.chain().focus().unsetAllMarks().run(),
			},
		],
	];

	return (
		<div className='bg-editor-toolbar-background w-editor-width mx-auto flex min-h-10 items-center gap-x-0.5 overflow-x-auto rounded-3xl px-2.5 py-0.5'>
			{sections[0].map((section) => (
				<ToolbarButton key={section.label} {...section} />
			))}
			<Separator orientation='vertical' className='h-6 bg-neutral-300' />
			<FontFamilyButton />
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
};
