import React, { Suspense } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { SearchInput } from './SearchInput';
import { UserButton } from '@clerk/nextjs';

export const Navbar: React.FC = () => {
	return (
		<div className='flex h-full w-full items-center justify-between'>
			<div className='flex shrink-0 items-center gap-3 pr-6'>
				<Link href='/'>
					<Image src='/logo.svg' alt='logo' width={36} height={36} />
				</Link>
				<h3 className='text-xl'>Docs</h3>
			</div>
			<Suspense>
				<SearchInput />
			</Suspense>
			<UserButton />
		</div>
	);
};
