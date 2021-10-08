module.exports = {
	purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
	darkMode: false, // or 'media' or 'class'
	theme: {
		screens: {
			sm: "576px",
			// => @media (min-width: 640px) { ... }

			md: "768px",
			// => @media (min-width: 768px) { ... }

			lg: "992px",
			// => @media (min-width: 1024px) { ... }

			xl: "1200px",
			// => @media (min-width: 1280px) { ... }

			"2xl": "1400px",
			// => @media (min-width: 1536px) { ... }
		},
		colors: {
			first: "#2A0944",
			second: "#3B185F",
			third: "#A12568",
			founrth: "#FEC260",
			white: "#ffffff",
		},
		textColor: {
			primary: "#ffffff",
			secondary: "#000000",
			third: "#8892b0",
			white: "#ffffff",
			black: "#000000",
		},
		extend: {},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
