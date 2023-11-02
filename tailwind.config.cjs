/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				'fira': ['Fira Sans', 'sans-serif'],
				'lato': ['Lato', 'sans-serif'],
				'noto': ['Noto Sans', 'sans-serif'],
				'merriweather': ['Merriweather', 'serif']
			},
			colors: {
				'primary': '#5FB4D3',
				'secondary': '#5885CC',
				'bg': '#161E31',
				'bg-secondary': '#1F2A48',
				'bg-light': '#666F9D'
			},
			backgroundImage: _ => ({
				'underline-gradient': 'linear-gradient(to right, #4C7FCB 0%, #43BBFF 98.77%)',
			}),
		},
	},
	plugins: [],
}
