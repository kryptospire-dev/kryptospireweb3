/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        surface: "hsl(var(--surface))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        // Custom colors for your testimonials component
        'text-primary': "hsl(var(--text-primary))",
        'text-secondary': "hsl(var(--text-secondary))",
        'text-muted': "hsl(var(--text-muted))",
        'gradient-start': "hsl(var(--gradient-start))",
        'gradient-end': "hsl(var(--gradient-end))",
        'gradient-primary': "hsl(var(--gradient-start))",
        'border-muted': "hsl(var(--border-muted))",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        'rajdhani': ['Rajdhani', 'sans-serif'],
        'exo-2': ['Exo 2', 'sans-serif'],
        'orbitron': ['Orbitron', 'monospace'],
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, hsl(var(--gradient-start)), hsl(var(--gradient-end)))',
        'gradient-surface': 'linear-gradient(135deg, hsl(var(--surface)), hsl(230 20% 8%))',
        'gradient-accent': 'linear-gradient(135deg, hsl(var(--gradient-start)), hsl(var(--accent-pink)))',
      },
    },
  },
  plugins: [],
}