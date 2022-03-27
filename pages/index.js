import Head from 'next/head';
import Header from '../components/Header';
import Banner from '../components/Banner';
import SmallCard from '../components/SmallCard';
import MediumCard from '../components/MediumCard';
import LargeCard from '../components/LargeCard';
import Footer from '../components/Footer';
export default function Home({ exploreData, cardsData }) {
	return (
		<div className=''>
			<Head>
				<title>Airbnb</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<Header />
			<Banner />

			<main className='max-w-7xl mx-auto px-8 sm:px-16'>
				<section className='pt-6'>
					<h2 className='text-4xl font-semibold pb-5'>Explore nearby</h2>
					<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
						{exploreData?.map(({ img, distance, location }) => (
							<SmallCard
								key={img}
								img={img}
								distance={distance}
								location={location}
							/>
						))}
					</div>
				</section>
				<section>
					<h2 className='text-4xl font-semibold py-8'>Live Anywhere</h2>
					<div className='flex space-x-3 overflow-scorll scrollbar-hide p-3 -ml-3'>
						{cardsData.map(({ img, title }) => (
							<MediumCard key={img} img={img} title={title} />
						))}
					</div>
				</section>

				<LargeCard
					img='https://images.unsplash.com/photo-1616628198585-6add765244e0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=637&q=80'
					title='The GrestesOutdoors'
					description='Wishlists created by Airbnb'
					buttonText='Get Inspired'
				/>
				<Footer />
			</main>
		</div>
	);
}

export async function getStaticProps() {
	const exploreData = await fetch(
		'https://raw.githubusercontent.com/Monles/airbnb/main/data.json'
	).then((res) => res.json());

	const cardsData = await fetch(
		'https://raw.githubusercontent.com/Monles/airbnb/main/2.json'
	).then((res) => res.json());

	return {
		props: {
			exploreData,
			cardsData,
		},
	};
}
