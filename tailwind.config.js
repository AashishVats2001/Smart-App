/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './app/**/*.{js,jsx}',
        './pages/**/*.{js,jsx}',
        './components/**/*.{js,jsx}',
    ],
    theme: {
        extend: {
            backgroundImage: {
                'brand-gradient': 'linear-gradient(135deg, rgba(252,133,84,1) 0%, rgba(248,62,101,1) 100%)',
            },
        },
    },
    plugins: [],
};
