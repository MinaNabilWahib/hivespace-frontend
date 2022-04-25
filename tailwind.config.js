module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}", "./node_modules/flowbite/**/*.js"],
	theme: {
		extend: {
			backgroundColor: {
				primary: 'rgb(var(--primary-color))',
				'primary-dark': 'rgb(var(--primary-color_dark))',
				'primary-light': 'rgb(var(--primary-color_light))',
				secondary: 'rgb(var(--secondary-color))',
				'secondary-dark': 'rgb(var(--secondary-color_dark))',
				'secondary-light': 'rgb(var(--secondary-color_light))',
				dark: 'rgb(var(--dark-color))',
				gry: 'rgb(var(--color-gray))',
				main: 'rgb(var(--color-background))',
				'main-x': 'rgb(var(--color-text))',
				'main-heading': 'var(--color-heading)',
			},
			textColor: {
				primary: 'rgb(var(--primary-color))',
				'primary-dark': 'rgb(var(--primary-color_dark))',
				'primary-light': 'rgb(var(--primary-color_light))',
				secondary: 'rgb(var(--secondary-color))',
				'secondary-dark': 'rgb(var(--secondary-color_dark))',
				'secondary-light': 'rgb(var(--secondary-color_light))',
				dark: 'rgb(var(--dark-color))',
				gry: 'rgb(var(--color-gray))',
				main: 'rgb(var(--color-text))',
				'main-x': 'rgb(var(--color-background))'
			},
			colors: {
				primary: 'rgb(var(--primary-color))',
				'primary-dark': 'rgb(var(--primary-color_dark))',
				'primary-light': 'rgb(var(--primary-color_light))',
				secondary: 'rgb(var(--secondary-color))',
				'secondary-dark': 'rgb(var(--secondary-color_dark))',
				'secondary-light': 'rgb(var(--secondary-color_light))',
				dark: 'rgb(var(--color-gray))',
				gry: 'rgb(var(--color-gray))',
				main: 'rgb(var(--color-background))',
				'main-text': 'rgb(var(--color-text))',
				'main-heading': 'var(--colors-heading)',
			}
		},
	},
	plugins: [require("daisyui"), require('flowbite/plugin')],
}
