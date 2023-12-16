import validateListing from '$lib/validators/listing.validator';
import { addListing } from '$lib/firebase/database.server';

import { fail, redirect } from '@sveltejs/kit';

export const actions = {
	default: async ({ request, locals }) => {
		const formData = await request.formData();
		const data = await validateListing(formData);
		if (!data.success) {
			return fail(422, data);
		}
		const listingId = await addListing(data.listing, locals.user.id);

		throw redirect(303, `/listing/${listingId}`);
	}
};
