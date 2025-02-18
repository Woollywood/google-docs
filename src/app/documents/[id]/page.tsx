import { NextPage } from 'next';
import { Editor } from '@/components/shared/editor';
import { Navbar } from '@/components/shared/navbar/document';

interface Props {
	params: Promise<{ id: string }>;
}

const Page: NextPage<Props> = async ({ params }) => {
	const { id } = await params;
	console.log(id);

	return (
		<div className='grid h-full grid-rows-[auto_1fr] gap-y-8'>
			<Navbar />
			<Editor />
		</div>
	);
};

export default Page;
