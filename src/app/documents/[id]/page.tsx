import { NextPage } from 'next';
import { Editor } from './Editor';

interface Props {
	params: Promise<{ id: string }>;
}

const Page: NextPage<Props> = async ({ params }) => {
	const { id } = await params;

	return (
		<div>
			<Editor />
		</div>
	);
};

export default Page;
