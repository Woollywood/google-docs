import { Navbar } from '@/components/shared/navbar/root';
import { TemplatesGallery } from '@/components/shared/TemplatesGallery';
import { NextPage } from 'next';

const Page: NextPage = () => {
	return (
		<div>
			<div className='h-root-navbar-height container fixed left-0 right-0 top-0 z-10 bg-white'>
				<Navbar />
			</div>
			<div className='pt-root-navbar-height'>
				<TemplatesGallery />
			</div>
		</div>
	);
};

export default Page;
