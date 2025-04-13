import path from 'path'
import { watchAndRun } from 'vite-plugin-watch-and-run'
import { defineConfig } from 'vite'

export default defineConfig( {
	server: {
		open: '/',
	},
	plugins: [
		watchAndRun([
			{
				name: 'update',
				watch: path.resolve('public/assets/md/*.md'),
				run: 'node update_md.js'
			}
		])
	],
	define: {
		__VUE_OPTIONS_API__: true,
		__VUE_PROD_DEVTOOLS__: false,
		__VUE_PROD_HYDRATION_MISMATCH_DETAILS__: false
	}
});