/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    50: '#eff6ff',
                    100: '#dbeafe',
                    200: '#bfdbfe',
                    300: '#93c5fd',
                    400: '#60a5fa',
                    500: '#3b82f6',
                    600: '#2563eb',
                    700: '#1d4ed8',
                    800: '#1e40af',
                    900: '#1e3a8a',
                },
            },
            fontFamily: {
                sans: ['Sora', 'system-ui', 'sans-serif'],
                display: ['Orbitron', 'Sora', 'system-ui', 'sans-serif'],
            },
            animation: {
                'mesh-one': 'mesh-movement-one 25s infinite alternate linear',
                'mesh-two': 'mesh-movement-two 20s infinite alternate linear',
            },
            keyframes: {
                'mesh-movement-one': {
                    '0%': { transform: 'translate(0, 0) scale(1) rotate(0deg)' },
                    '50%': { transform: 'translate(15%, 10%) scale(1.2) rotate(15deg)' },
                    '100%': { transform: 'translate(-5%, 20%) scale(1) rotate(-10deg)' },
                },
                'mesh-movement-two': {
                    '0%': { transform: 'translate(0, 0) scale(1.1) rotate(0deg)' },
                    '50%': { transform: 'translate(-10%, -15%) scale(0.9) rotate(-20deg)' },
                    '100%': { transform: 'translate(5%, -5%) scale(1.1) rotate(10deg)' },
                }
            },
            backgroundSize: {
                '300%': '300%',
            },
        },
    },
    plugins: [],
}
