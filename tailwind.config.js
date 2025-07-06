module.exports = {
  content: ["./pages/*.{html,js}", "./index.html", "./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        // Primary Colors - Trust anchor for navigation and key decisions
        primary: {
          50: "#f7fafc", // navy-50
          100: "#edf2f7", // navy-100
          200: "#e2e8f0", // navy-200
          300: "#cbd5e0", // navy-300
          400: "#a0aec0", // navy-400
          500: "#718096", // navy-500
          600: "#4a5568", // navy-600
          700: "#2d3748", // navy-700
          800: "#1a202c", // navy-800
          900: "#1a365d", // navy-900
          DEFAULT: "#1a365d", // navy-900
        },
        // Secondary Colors - Energy catalyst for discovery and booking actions
        secondary: {
          50: "#e6fffa", // teal-50
          100: "#b2f5ea", // teal-100
          200: "#81e6d9", // teal-200
          300: "#4fd1c7", // teal-300
          400: "#38b2ac", // teal-400
          500: "#319795", // teal-500
          600: "#2c7a7b", // teal-600
          700: "#285e61", // teal-700
          800: "#234e52", // teal-800
          900: "#1d4044", // teal-900
          DEFAULT: "#319795", // teal-600
        },
        // Accent Colors - Premium highlight for exclusive offers and achievements
        accent: {
          50: "#fffff0", // yellow-50
          100: "#fefcbf", // yellow-100
          200: "#faf089", // yellow-200
          300: "#f6e05e", // yellow-300
          400: "#ecc94b", // yellow-400
          500: "#d69e2e", // yellow-500
          600: "#c05621", // yellow-600
          700: "#9c4221", // yellow-700
          800: "#7c2d12", // yellow-800
          900: "#744210", // yellow-900
          DEFAULT: "#d69e2e", // yellow-600
        },
        // Background Colors
        background: "#fafafa", // gray-50 - Clean canvas that reduces eye strain
        surface: "#ffffff", // white - Content containers with subtle depth
        
        // Text Colors
        text: {
          primary: "#2d3748", // gray-700 - Comfortable reading for extended browsing
          secondary: "#718096", // gray-500 - Clear hierarchy without harsh contrast
        },
        
        // Status Colors
        success: {
          50: "#f0fff4", // green-50
          100: "#c6f6d5", // green-100
          500: "#48bb78", // green-500
          600: "#38a169", // green-600 - Positive confirmation that feels celebratory
          DEFAULT: "#38a169", // green-600
        },
        warning: {
          50: "#fffff0", // yellow-50
          100: "#fefcbf", // yellow-100
          600: "#d69e2e", // yellow-600 - Attention without alarm for time-sensitive offers
          DEFAULT: "#d69e2e", // yellow-600
        },
        error: {
          50: "#fed7d7", // red-50
          100: "#feb2b2", // red-100
          500: "#f56565", // red-500
          600: "#e53e3e", // red-600 - Helpful concern that guides rather than scolds
          DEFAULT: "#e53e3e", // red-600
        },
        
        // Border Colors
        border: {
          DEFAULT: "#e2e8f0", // gray-200
          light: "#f7fafc", // gray-50
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        accent: ['Playfair Display', 'serif'],
        playfair: ['Playfair Display', 'serif'],
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.5rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1.2' }],
        '6xl': ['3.75rem', { lineHeight: '1.2' }],
      },
      boxShadow: {
        'soft': '0 4px 12px rgba(26, 54, 93, 0.1)',
        'light': '0 2px 8px rgba(0, 0, 0, 0.05)',
        'card': '0 4px 12px rgba(26, 54, 93, 0.1)',
      },
      borderRadius: {
        'lg': '0.5rem',
        'xl': '0.75rem',
        '2xl': '1rem',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      transitionDuration: {
        '200': '200ms',
        '300': '300ms',
      },
      transitionTimingFunction: {
        'out': 'ease-out',
      },
      animation: {
        'fade-in': 'fadeIn 300ms ease-out',
        'slide-up': 'slideUp 300ms ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}