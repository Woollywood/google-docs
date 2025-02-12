'use client';

import React from 'react';
import {
	BoldIcon,
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
			{sections.map((section, index) => (
				<ul key={index}>
					<li className='flex'>
						{section.map((item) => (
							<ToolbarButton key={item.label} {...item} />
						))}
						{index !== sections.length - 1 && (
							<Separator orientation='vertical' className='h-6 bg-neutral-300' />
						)}
					</li>
				</ul>
			))}
		</div>
	);
};
