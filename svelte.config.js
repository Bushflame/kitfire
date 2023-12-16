import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';
//import { vitePreprocess } from '@sveltejs/kit/vite';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: preprocess({ stylus: true, pug: true }),

	kit: {
		env: {
			dir: './'
		},

		adapter: adapter(),
		alias: {
			$comps: './src/lib/components',
			$stylus: './src/lib/stylus'
		}
	}
};
export default config;
