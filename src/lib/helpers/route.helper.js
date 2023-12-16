import { goto } from '$app/navigation';
import { sendJWTToken } from '$lib/firebase/auth.client';
import { setUser } from '$lib/firebase/database.client';

/**
 * @param {{searchParams: {get: (arg0: string) => string;};}} url
 * @param {string | undefined} [userId]
 */
export async function afterLogin(url, userId) {
	const route = url.searchParams.get('redirect') || '/dashboard';
	await setUser(userId);
	await sendJWTToken();
	await goto(route);
}
