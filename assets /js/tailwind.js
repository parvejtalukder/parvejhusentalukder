
        tailwind.config = {
            darkMode: 'class',
            theme: {
                extend: {
                    fontFamily: {
                        sans: ['Space Grotesk', 'sans-serif'],
                    },
                    colors: {
                        dark: {
                            900: '#0a0a0a',
                            800: '#121212',
                            700: '#1a1a1a',
                            600: '#242424',
                        },
                        accent: {
                            blue: '#3b82f6',
                            purple: '#8b5cf6',
                            teal: '#14b8a6',
                        }
                    },
                    animation: {
                        'glitch': 'glitch 2s linear infinite',
                        'float': 'float 6s ease-in-out infinite',
                        'typewriter': 'typewriter 4s steps(11) 1s 1 normal both',
                    },
                    keyframes: {
                        glitch: {
                            '0%': { transform: 'translate(0)' },
                            '20%': { transform: 'translate(-5px, 5px)' },
                            '40%': { transform: 'translate(-5px, -5px)' },
                            '60%': { transform: 'translate(5px, 5px)' },
                            '80%': { transform: 'translate(5px, -5px)' },
                            '100%': { transform: 'translate(0)' },
                        },
                        float: {
                            '0%, 100%': { transform: 'translateY(0)' },
                            '50%': { transform: 'translateY(-20px)' },
                        },
                        typewriter: {
                            'from': { width: '0' },
                            'to': { width: '11ch' },
                        }
                    }
                }
            }
        }
