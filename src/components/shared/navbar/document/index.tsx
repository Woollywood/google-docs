import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { BsCloudCheck } from 'react-icons/bs';

import { Menu } from './Menu';

export const Navbar: React.FC = () => {
	return (
		<nav className='flex items-center justify-between'>
			<div className='flex items-center gap-2'>
				<Link href='/'>
					<Image src='/logo.svg' alt='logo' width={36} height={36} />
				</Link>
				<div className='flex flex-col'>
					<div className='flex items-center gap-x-2'>
						<span className='cursor-pointer truncate px-1.5 text-lg'>Untitled Document</span>
						<BsCloudCheck />
					</div>
					<div className='flex'>
						<Menu />
					</div>
				</div>
			</div>
		</nav>
	);
};
