/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                'sans': ['IBM Plex Sans', ...defaultTheme.fontFamily.sans],
                // Or create a custom font class
                'ibm': ['IBM Plex Sans', 'sans-serif']
            },
        },
    },
    plugins: [],
};
