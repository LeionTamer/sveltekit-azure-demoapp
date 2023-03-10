import azure from 'svelte-adapter-azure-swa';
import { vitePreprocess } from '@sveltejs/kit/vite';
import { resolve } from 'path';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: vitePreprocess(),

	kit: {
		adapter: azure(),
		alias: {
			'@styles': resolve('./src/styles'), // create an alias for path styles
		},
		files: {
			lib: 'src/lib',
			assets: 'static'
		}
	},

};

export default config;
