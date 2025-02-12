'use client';

import { cn } from '@/lib/utils';
import { LucideIcon } from 'lucide-react';
import React from 'react';

interface ToolbarButtonProps {
	onClick?: () => void;
	isActive?: boolean;
	icon: LucideIcon;
}

export const ToolbarButton: React.FC<ToolbarButtonProps> = ({ icon: Icon, isActive, onClick }) => {
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
