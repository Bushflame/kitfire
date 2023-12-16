import {firestore} from 'firebase-admin';

import { db } from '$lib/firebase/firebase.server';
//import {firestore} from 'firebase-admin';
import { saveFileToBucket } from './firestorage.server';



//-------------------------------CREATE-------------------------------------------

export async function addListing(listing, userId) {
	// save to the firestore database without picture information
	const listingCollection = db.collection('listings');
	const listingRef = await listingCollection.add({
		title: listing.title,
		description: listing.description,
		user_id: userId,
	});
	// save the pictures
	const img_1aUrl = await saveFileToBucket(listing.img_1a, `${userId}/${listingRef.id}/img_1a`);
	// update the doc in firestore database with the picture urls
	await listingRef.update({
		img_1a: img_1aUrl
	});
	return listingRef.id;
}
/**
 * @param {string} id
 * @param {{ [x: string]: any; } & firestore.AddPrefixToKeys<string, any>} form
 * @param {any} userId
 */
//----------------------------EDIT-----------------------------------------
export async function editListing(id, form, userId) {
	const listingRef = await db.collection('listings').doc(id);

	let img_1a = form.img_1a || null;
	delete form.img_1a;
	await listingRef.update(form);
	if (img_1a) {
		const img_1aUrl = await saveFileToBucket(img_1a, `${userId}/${listingRef.id}/img_1a`);

		listingRef.update({ img_1a: img_1aUrl });
	}
}
/**
 * @param {string} id
 */
// ---------------------GET ONE BY  ID--------------unused ???----------------

export async function getListing(id) {
	const listingRef = await db.collection('listings').doc(id).get();

	if (listingRef.exists) {
		return { id: listingRef.id, ...listingRef.data() };
	}
}

//  -------------GET ALL LISTINGS----------------------------------------------
export async function getListings() {
	/**
	 * @type {firestore.DocumentData[]}
	 */
	let all = [];
	const listingsRef = db.collection('listings');
	const snapshot = await listingsRef.get();

	snapshot.forEach((doc) => {
		let temp = [];
		let getUid = {
			uid: doc.id
		};
		temp.push(doc.data(), getUid);
		all.push(temp);
	});
	return {
		all
	};
}
//------------------- get by titles--------------------------------
// export async function getByTitle() {
// let title_q	= 'Ardvark'
// let res = []
// res.push(title_q)
// const colRef = db.collection('listings');
// const snapshot = await colRef.where('title_1a', '==', title_q).get();
// if (snapshot.empty) {
//   console.log('No matching documents.');
//   return;
// }  
// console.log('in fb func',)
// snapshot.forEach(doc => {
//   console.log('doc data',  doc.id, '=>', doc.data());
//   res.push(doc.data())
// });
// return {
// 	// @ts-ignore
// 	res
// }
// }


//-------------------   dashboard data---------------------
export async function getAdminListing() {
	/**
	 * @type {firestore.DocumentData[]}
	 */
	let all = [];
	const listingsRef = db.collection('listings');
	const snapshot = await listingsRef.where('title', '==', 'Ardvark').get();

	//get user(to match dashboard user) and doc ids (to create url to edit page + my listing)
	snapshot.forEach((doc) => {
		console.log('snap count', doc);
		let temp = [];
		let getUid = {
			uid: doc.id,
			userid: doc.data().user_id
		};
		console.log('doc.data', doc.data);
		temp.push(doc.data());
		all.push(getUid);
	});
	return {
		all
	};
}
