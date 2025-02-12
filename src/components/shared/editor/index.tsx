'use client';

import React from 'react';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import TaskItem from '@tiptap/extension-task-item';
import TaskList from '@tiptap/extension-task-list';
import Table from '@tiptap/extension-table';
import TableCell from '@tiptap/extension-table-cell';
import TableHeader from '@tiptap/extension-table-header';
import TableRow from '@tiptap/extension-table-row';
import Image from '@tiptap/extension-image';
import ImageResize from 'tiptap-extension-resize-image';
import Underline from '@tiptap/extension-underline';
import { editorStore } from './store';
import { Toolbar } from './Toolbar';

export const Editor: React.FC = () => {
	const editor = useEditor({
		editorProps: {
			attributes: {
				style: 'padding-left: 56px; padding-right: 56px',
				class: 'focus:outline-none print:border-0 bg-white border border-editor-border flex flex-col h-full w-editor-width py-12',
			},
		},
		extensions: [
			StarterKit,
			TaskList,
			TaskItem.configure({
				nested: true,
			}),
			Table.configure({
				resizable: true,
			}),
			TableRow,
			TableHeader,
			TableCell,
			Image,
			ImageResize,
			Underline,
		],
		immediatelyRender: false,
		content: `
		<table>
          <tbody>
            <tr>
              <th>Name</th>
              <th colspan="3">Description</th>
            </tr>
            <tr>
              <td>Cyndi Lauper</td>
              <td>Singer</td>
              <td>Songwriter</td>
              <td>Actress</td>
            </tr>
          </tbody>
        </table>
		`,
		onCreate({ editor }) {
			editorStore.editor = editor;
		},
		onDestroy() {
			editorStore.editor = null;
		},
		onUpdate({ editor }) {
			editorStore.editor = editor;
		},
		onSelectionUpdate({ editor }) {
			editorStore.editor = editor;
		},
		onTransaction({ editor }) {
			editorStore.editor = editor;
		},
		onFocus({ editor }) {
			editorStore.editor = editor;
		},
		onBlur({ editor }) {
			editorStore.editor = editor;
		},
		onContentError({ editor }) {
			editorStore.editor = editor;
		},
	});

	return (
		<div className='grid grid-rows-[auto_1fr]'>
			<Toolbar />
			<div className='bg-editor-background size-full overflow-x-auto px-4 print:overflow-visible print:bg-white print:p-0'>
				<div className='mx-auto flex h-full min-w-max justify-center py-4 print:w-full print:min-w-0 print:py-0'>
					<EditorContent editor={editor} />
				</div>
			</div>
		</div>
	);
};
