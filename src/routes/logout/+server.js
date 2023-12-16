//server side logout to delete http cookie
//otherwise server still thinks client is logged in
import { json } from '@sveltejs/kit';

/** @type {import('./$types').RequestHandler} */
export async function GET({ cookies }) {
	cookies.delete('jwt');

	return json({ message: 'success' }, { status: 200 });
}
