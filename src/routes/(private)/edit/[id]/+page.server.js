import { editListing, getListing } from '$lib/firebase/database.server';
import { error, fail, redirect } from '@sveltejs/kit';
import validateListing from '$lib/validators/listing.validator.js';

// @ts-ignore
export async function load({ params, locals }) {
	const listing = await getListing(params.id);

	if (!listing) {
		throw error(404, { message: 'Listing not found!' });
	}

	// @ts-ignore
	if (listing.user_id !== locals.user.id) {
		throw error(403, { message: 'Access Denied!' });
	}

	return { listing };
}

export const actions = {
	// @ts-ignore
	default: async ({ request, locals, params }) => {
		const listing = await getListing(params.id);

		// @ts-ignore
		if (!listing || listing.user_id !== locals.user.id) {
			throw error(403, { message: 'Access Denied!' });
		}

		const formData = await request.formData();
		const data = await validateListing(formData, true);
		if (!data.success) {
			return fail(422, data);
		}

		await editListing(params.id, data.listing, locals.user.id);

		throw redirect(303, `/listing/${params.id}`);
	}
};
