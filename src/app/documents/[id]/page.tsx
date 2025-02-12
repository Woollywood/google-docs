import { NextPage } from 'next';
import { Editor } from '@/components/shared/editor';

interface Props {
	params: Promise<{ id: string }>;
}

const Page: NextPage<Props> = async ({ params }) => {
	const { id } = await params;

	return <Editor />;
};

export default Page;
