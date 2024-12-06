import containerQueries from '@tailwindcss/container-queries';
import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';
import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			colors: {
				primary: '#89A8B2',
				secondary: '#B3C8CF',
				tertiary: '#E5E1DA',
				quaternary: '#F1F0E8'
			}
		}
	},

	plugins: [typography, forms, containerQueries]
} satisfies Config;
