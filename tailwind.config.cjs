/** @type {import('tailwindcss').Config}*/
const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {}
	},

	plugins: [require('daisyui')],
	daisyui: {
		themes: ['light', 'dark', 'fantasy', 'emerald', 'lofi', 'wireframe', 'cmyk']
	}
};

module.exports = config;
