import adapter from '@sveltejs/adapter-static';
//import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import 'dotenv/config'; // npm install dotenv
import { mdsvex } from 'mdsvex'; // npm install -D mdsvex

const basepath = process.env.PUBLIC_BASE_PATH;

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', '.md', '.svx'],
	// Consult https://kit.svelte.dev/docs/integrations#preprocessorst
	// for more information about preprocessors
	preprocess: [
		vitePreprocess(),
		mdsvex({
			extensions: ['.md', '.svx'] // Process .md files as components
		})
	],

	kit: {
		// adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
		// If your environment is not supported or you settled on a specific environment, switch out the adapter.
		// See https://kit.svelte.dev/docs/adapters for more information about adapters.
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: 'index.html', // Required for SPAs
			precompress: false,
			strict: true
		}),
		prerender: {
			entries: ['*'] // Prerender all routes
		},
		paths: {
			base: basepath
		}
	}
};
export default config;
