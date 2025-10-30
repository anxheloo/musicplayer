/** @type {import('tailwindcss').Config} */
module.exports = {
	// NOTE: Update this to include the paths to all files that contain Nativewind classes.
	content: ['./src/**/*.{js,jsx,ts,tsx}', './components/**/*.{js,jsx,ts,tsx}'],
	presets: [require('nativewind/preset')],
	theme: {
		extend: {
			colors: {
				primary: '#fc3c44',
				background: '#000',
				text: '#fff',
				textMuted: '#9ca3af',
				icon: '#fff',
				maximumTrackTintColor: 'rgba(255, 255, 255, 0.4)',
				minimumTrackTintColor: 'rgba(255, 255, 255, 0.6)',
			},
		},
	},
	plugins: [],
};
