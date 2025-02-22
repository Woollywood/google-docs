import { NextPage } from 'next';
import { SignUp } from '@clerk/nextjs';

const Page: NextPage = () => {
	return (
		<div className='flex size-full min-h-screen items-center justify-center'>
			<SignUp />
		</div>
	);
};

export default Page;
