/** @type {import('tailwindcss').Config} */

const plugin = require('tailwindcss/plugin');

module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
        './styles/**/*.{js,ts,jsx,tsx}',
        './shared/**/*.{js,ts,jsx,tsx}',
        './assets/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            typography: {
                DEFAULT: {
                    css: {
                        'code::before': { content: 'none' },
                        'code::after': { content: 'none' },
                    },
                },
            },
            fontSize: {
                md: ['15px', '22px'],
            },
            backdropBlur: {
                xs: '2px',
            },
            boxShadow: {
                xs: 'rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(9, 9, 11, 0.07) 0px 0px 0px 1px, rgba(9, 9, 11, 0.05) 0px 2px 2px 0px',
            },
            colors: {
                'neutral-150': '#ededed',
                'neutral-550': '#626262',
            },
            lineHeight: {
                0: '0',
            },
            keyframes: {
                floatUp: {
                    '0%': { transform: 'translateY(100%)' }, // Start from just below the screen
                    '100%': { transform: 'translateY(0)' }, // End at element's current y position
                },
                floatDown: {
                    '0%': { transform: 'translateY(-100%)' }, // Start from just above the screen
                    '100%': { transform: 'translateY(0)' }, // End at element's current y position
                },
                fadeIn: {
                    '0%': { opacity: 0 },
                    '100%': { opacity: 1 },
                },
                scroll: {
                    '0%': { transform: 'translateX(0)' },
                    '100%': { transform: 'translateX(-100%)' },
                },
                'border-beam': {
                    '100%': {
                        'offset-distance': '100%',
                    },
                },
            },
            animation: {
                floatUp: 'floatUp 0.3s ease-in-out forwards', // Define the animation speed, timing, and repetition
                floatDown: 'floatDown 0.3s ease-in-out forwards', // Define the animation speed, timing, and repetition
                fadeIn: 'fadeIn 0.5s ease-out forwards',
                logoSlide: 'scroll 30s infinite linear', // scroll animation used for scrolling logos
                'border-beam': 'border-beam calc(var(--duration)*1s) infinite linear',
            },
        },
    },
    plugins: [
        require('@tailwindcss/typography'),
        plugin(({ matchUtilities, theme }) => {
            matchUtilities(
                {
                    'animation-delay': (value) => {
                        return {
                            'animation-delay': value,
                        };
                    },
                },
                {
                    values: theme('transitionDelay'),
                },
            );
        }),
    ],
};
