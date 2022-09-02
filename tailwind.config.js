/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./*.{html,js}", './node_modules/tw-elements/dist/js/**/*.js'],
    theme: {
        fontFamily: {
            grandstander: ['Grandstander', 'cursive'],
            pink: ['pink_chickenregular', 'sans-serif'],
            ariston: ['ariston-comic', 'sans-serif'],
            gardenia: ['gardenia', 'sans-serif']

        },
        colors: {
            'red': '#ED1C24',
            'white': '#FFFFFF',
            'red-shadow': '#981B1E',
            'dark-shadow': '#231F20',
            'brown-light': '#5E2704',
            'brown-dark': '#421200',
            'gray-xlight': '#A4A6A9',
            'gray-light': '#808285',
            'gray': '#414042',
            'gray-dark': '#1D1D1B',

        },
        fontSize: {
            'sm': '0.75rem',
            'base': '1.75rem',
            'lg': '2.35rem',
            'xl': '3rem',
            '2xl': '3.25rem',
            'special': '2rem',
            '3xl': '5rem',
        },
        extend: {
            width: {
                '128': '30rem',
            }
        },
    },
    plugins: [
        require('@tailwindcss/aspect-ratio'),
    ],
}