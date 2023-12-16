import { getListing } from '$lib/firebase/database.server';
import { error } from '@sveltejs/kit';
export async function load({ params }) {
	const listing = await getListing(params.id);

	if (!listing) {
		throw error(404, { message: 'Listing not found!' });
	}
	return {
		listing
	};
}
