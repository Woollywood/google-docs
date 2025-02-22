import { NextPage } from 'next';
import { SignIn } from '@clerk/nextjs';

const Page: NextPage = () => {
	return (
		<div className='flex size-full min-h-screen items-center justify-center'>
			<SignIn />
		</div>
	);
};

export default Page;
