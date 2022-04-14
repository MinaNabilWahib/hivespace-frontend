module.exports = {
	content: [
		"./src/**/*.{js,jsx,ts,tsx}",
	],
	theme: {
		extend: {
			backgroundColor: {
				primary: 'rgb(var(--primary-color))',
				'primary-dark': 'rgb(var(--primary-color_dark))',
				'primary-light': 'rgb(var(--primary-color_light))',
				secondary: 'rgb(var(--secondary-color))',
				'secondary-dark': 'rgb(var(--secondary-color_dark))',
				'secondary-light': 'rgb(var(--secondary-color_light))',
				dark: 'rgb(var(--color-gray))',
				gry: 'rgb(var(--color-gray))',
				main: 'rgb(var(--color-background))',
				'main-heading': 'var(--colors-heading)',
			},
			textColor: {
				primary: 'rgb(var(--primary-color))',
				'primary-dark': 'rgb(var(--primary-color_dark))',
				'primary-light': 'rgb(var(--primary-color_light))',
				secondary: 'rgb(var(--secondary-color))',
				'secondary-dark': 'rgb(var(--secondary-color_dark))',
				'secondary-light': 'rgb(var(--secondary-color_light))',
				dark: 'rgb(var(--color-gray))',
				gry: 'rgb(var(--color-gray))',
				main: 'rgb(var(--color-text))',
			}
		},
	},
	plugins: [],
}
