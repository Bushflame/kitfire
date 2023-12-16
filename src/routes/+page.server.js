import { getListings } from '$lib/firebase/database.server';
//  first page data
//
export async function load() {
	let arrs = [];
	const listings = await getListings();
	let temp = [];
	let arr = [];
	for (let i = 0; i < listings.all.length; i++) {
		//create single array to hold all values
		temp = [
			listings.all[i][0].img_1a,
			listings.all[i][0].title_1a,
			listings.all[i][0].description_1a,
			listings.all[i][1].uid
		];
		arrs.push(temp);
		//console.log('arrs', arrs)
		//arrs.push(listings.all[i])
		// ----------------------------------
	}

	return {
		//...listings
		arrs
	};
}
