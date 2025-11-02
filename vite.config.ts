import { resolve } from 'node:path';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [
		react({
			babel: {
				plugins: [['babel-plugin-react-compiler']],
			},
		}),
	],
	resolve: {
		alias: {
			'~': resolve(__dirname, './'),
			'@': resolve(__dirname, './src'),
		},
	},
});
