'use client';

import React from 'react';
import {
	BoldIcon,
	FileIcon,
	FileJsonIcon,
	FilePenIcon,
	FilePlusIcon,
	FileTextIcon,
	GlobeIcon,
	ItalicIcon,
	PrinterIcon,
	Redo2Icon,
	RemoveFormattingIcon,
	StrikethroughIcon,
	TextIcon,
	TrashIcon,
	UnderlineIcon,
	Undo2Icon,
} from 'lucide-react';
import { BsFilePdf } from 'react-icons/bs';
import {
	Menubar,
	MenubarContent,
	MenubarItem,
	MenubarMenu,
	MenubarSeparator,
	MenubarSub,
	MenubarSubContent,
	MenubarSubTrigger,
	MenubarTrigger,
} from '@/components/ui/menubar';

export const Menu: React.FC = () => {
	return (
		<Menubar className='h-auto border-none bg-transparent p-0 shadow-none'>
			<MenubarMenu>
				<MenubarTrigger className='h-auto cursor-pointer rounded-sm px-2 py-0.5 text-sm font-normal hover:bg-muted'>
					File
				</MenubarTrigger>
				<MenubarContent>
					<MenubarSub>
						<MenubarSubTrigger>
							<FileIcon className='mr-2 size-4' />
							Save
						</MenubarSubTrigger>
						<MenubarSubContent>
							<MenubarItem>
								<FileJsonIcon className='mr-2 size-4' />
								JSON
							</MenubarItem>
							<MenubarItem>
								<GlobeIcon className='mr-2 size-4' />
								HTML
							</MenubarItem>
							<MenubarItem>
								<BsFilePdf className='mr-2 size-4' />
								PDF
							</MenubarItem>
							<MenubarItem>
								<FileTextIcon className='mr-2 size-4' />
								Text
							</MenubarItem>
						</MenubarSubContent>
					</MenubarSub>
					<MenubarItem>
						<FilePlusIcon className='mr-2 size-4' />
						New Document
					</MenubarItem>
					<MenubarSeparator />
					<MenubarItem>
						<FilePenIcon className='mr-2 size-4' />
						Rename
					</MenubarItem>
					<MenubarItem>
						<TrashIcon className='mr-2 size-4' />
						Remove
					</MenubarItem>
					<MenubarSeparator />
					<MenubarItem onClick={() => window.print()}>
						<PrinterIcon className='mr-2 size-4' />
						Print
					</MenubarItem>
				</MenubarContent>
			</MenubarMenu>
			<MenubarMenu>
				<MenubarTrigger className='h-auto cursor-pointer rounded-sm px-2 py-0.5 text-sm font-normal hover:bg-muted'>
					Edit
				</MenubarTrigger>
				<MenubarContent>
					<MenubarItem>
						<Undo2Icon className='mr-2 size-4' />
						Undo
					</MenubarItem>
					<MenubarItem>
						<Redo2Icon className='mr-2 size-4' />
						Redo
					</MenubarItem>
				</MenubarContent>
			</MenubarMenu>
			<MenubarMenu>
				<MenubarTrigger className='h-auto cursor-pointer rounded-sm px-2 py-0.5 text-sm font-normal hover:bg-muted'>
					Insert
				</MenubarTrigger>
				<MenubarContent>
					<MenubarSub>
						<MenubarSubTrigger>Table</MenubarSubTrigger>
						<MenubarSubContent>
							<MenubarItem>1 x 1</MenubarItem>
							<MenubarItem>2 x 2</MenubarItem>
							<MenubarItem>3 x 3</MenubarItem>
							<MenubarItem>4 x 4</MenubarItem>
						</MenubarSubContent>
					</MenubarSub>
				</MenubarContent>
			</MenubarMenu>
			<MenubarMenu>
				<MenubarTrigger className='h-auto cursor-pointer rounded-sm px-2 py-0.5 text-sm font-normal hover:bg-muted'>
					Format
				</MenubarTrigger>
				<MenubarContent>
					<MenubarSub>
						<MenubarSubTrigger>
							<TextIcon className='mr-2 size-4' />
							Text
						</MenubarSubTrigger>
						<MenubarSubContent>
							<MenubarItem>
								<BoldIcon className='mr-2 size-4' />
								Bold
							</MenubarItem>
							<MenubarItem>
								<ItalicIcon className='mr-2 size-4' />
								Italic
							</MenubarItem>
							<MenubarItem>
								<UnderlineIcon className='mr-2 size-4' />
								Underline
							</MenubarItem>
							<MenubarItem>
								<StrikethroughIcon className='mr-2 size-4' />
								Strikethrough
							</MenubarItem>
						</MenubarSubContent>
					</MenubarSub>
					<MenubarItem>
						<RemoveFormattingIcon className='mr-2 size-4' />
						Clear formatting
					</MenubarItem>
				</MenubarContent>
			</MenubarMenu>
		</Menubar>
	);
};
