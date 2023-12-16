// @ts-nocheck
import { getAdminListing } from '$lib/firebase/database.server';
//provide dashboard user.id with doc id to filter and create dynamic edit + my page
export async function load({ locals }) {
	const listings = await getAdminListing();
	const userid = locals.user.id;

	let thisId;
	for (let i = 0; i < listings.all.length; i++) {
		if (listings.all[i].userid === userid) {
			thisId = listings.all[i].uid;
		}
	}
	return {
		thisId,
		userid
	};
}
