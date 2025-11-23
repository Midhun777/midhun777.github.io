/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Outfit', 'sans-serif'],
            },
            colors: {
                // Pastel Palette
                background: '#fdfbf7', // Warm off-white/cream
                surface: '#ffffff',
                primary: '#8b5cf6', // Soft Violet
                secondary: '#ec4899', // Soft Pink
                accent: '#14b8a6', // Teal
                text: {
                    main: '#1e293b', // Slate 800
                    muted: '#64748b', // Slate 500
                    light: '#94a3b8', // Slate 400
                },
                pastel: {
                    blue: '#e0f2fe', // Sky 100
                    purple: '#f3e8ff', // Purple 100
                    pink: '#fce7f3', // Pink 100
                    teal: '#ccfbf1', // Teal 100
                    yellow: '#fef9c3', // Yellow 100
                }
            },
            animation: {
                'blob': 'blob 10s infinite',
                'float': 'float 6s ease-in-out infinite',
                'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
            },
            keyframes: {
                blob: {
                    '0%': { transform: 'translate(0px, 0px) scale(1)' },
                    '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
                    '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
                    '100%': { transform: 'translate(0px, 0px) scale(1)' },
                },
                float: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-20px)' },
                },
                fadeInUp: {
                    '0%': { opacity: '0', transform: 'translateY(20px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                }
            }
        },
    },
    plugins: [],
}
