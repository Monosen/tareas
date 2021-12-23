module.exports = {
	purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
	darkMode: false, // or 'media' or 'class'
	theme: {
		colors: {
			transparent: "transparent",
			first: "#085471",
			second: "#3B185F",
			third: "#A12568",
			founrth: "#FEC260",
			gray: "#777777",
			white: "#ffffff",
			black: "#000000",
		},
		textColor: {
			primary: "#ffffff",
			secondary: "#000000",
			third: "#8892b0",
			gray: "#777777",
			white: "#ffffff",
			black: "#000000",
		},
		fontFamily: {
			josefin: ["Josefin Sans", "sans-serif"],
		},
		extend: {},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
