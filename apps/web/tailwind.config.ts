/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./src/**/*.{js,ts,jsx,tsx,mdx}",
		"../../packages/ui/src/**/*.{js,ts,jsx,tsx,mdx}",
	],
	darkMode: "selector",
	plugins: [require("daisyui")],
	daisyui: {
		themes: ["dark", "light", "cyberpunk"],
	},
	theme: {
		extend: {},
	},
};
