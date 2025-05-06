import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit()],
	server: {
		fs: {
		  allow: [
			'./assets', // Allow serving files from the assets directory
		  ]
		}
	  }
});
