import { getListings } from '$lib/firebase/database.server';

export async function load() {
	const listings = await getListings();
	//console.log('listings page server',listings) = true
	return {
		...listings
	};
}
