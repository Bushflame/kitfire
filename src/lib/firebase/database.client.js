import { setDoc, collection, doc } from 'firebase/firestore';
import { db } from './firebase.client';

/**
 * @param {string | undefined} userId
 */
export async function setUser(userId) {
	const users = collection(db, 'users');
	await setDoc(doc(users, userId), {
		user_id: userId
	});
}