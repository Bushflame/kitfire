import { json } from '@sveltejs/kit';
import { auth } from '$lib/firebase/firebase.server';

//get data and set cookie
/**@type {import('./$types').RequestHandler} */
export async function POST({ request, cookies }) {
	try {
		const { token, email } = await request.json();
		//check token with server
		const verifiedToken = await auth.verifyIdToken(token ?? '', true);
		if (verifiedToken.email === email) {
			cookies.set('jwt', token, {
				maxAge: verifiedToken.exp - Date.now() / 1000,
				path: '/'
			});

			return json({ message: 'success' }, { status: 200 });
		}

		return json({ message: 'Access denied!' }, { status: 403 });
	} catch (error) {
		return json({ message: 'Access denied!' }, { status: 403 });
	}
}
