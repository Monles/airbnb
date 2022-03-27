import Image from 'next/image';
import { SearchIcon } from '@heroicons/react/solid';

function Header() {
	return (
		<header className='sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md py-5 px-5 p-5 md:px-10'>
			<div className='relative flex items-center h-10 cursor-pointer my-auto'>
				<Image
					src={'/img/Airbnb_Logo.svg'}
					layout='fill'
					objectFit='contain'
					objectPosition='left'
					alt=''
				/>
			</div>
			{/* serachbar */}
			<div className='flex items-center md:border-2 rounded-full py-2 md:shadow-sm'>
				<input
					className='flex-grow pl-5 bg-transparent outline-none'
					type='text'
					placeholder='search right now'
				/>
				<SearchIcon className='hidden md:inline-flex h-8 bg-red-400 text-white rounded-full p-2 cursor-pointer md:mx-2' />
			</div>
		</header>
	);
}

export default Header;