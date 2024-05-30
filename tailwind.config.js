/** @type {import('tailwindcss').Config} */
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

export default {
  content: [
    './ui/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      animation: {
        shimmer: "shimmer 2s linear infinite",
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        backgroundPositionSpin: "background-position-spin 3000ms infinite alternate",
        grid: "grid 15s linear infinite",
        "border-beam": "border-beam calc(var(--duration)*1s) infinite linear",
      },
      keyframes: {
        "background-position-spin": {
          "0%": { backgroundPosition: "top center" },
          "100%": { backgroundPosition: "bottom center" },
        },
        grid: {
          "0%": { transform: "translateY(-50%)" },
          "100%": { transform: "translateY(0)" },
        },
        shimmer: {
          from: {
            "backgroundPosition": "0 0"
          },
          to: {
            "backgroundPosition": "-200% 0"
          }
        },
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "border-beam": {
          "100%": {
            "offset-distance": "100%",
          },
        },
      },
      colors: {
        'gumbo': {
          '50': '#f3f8f8',
          '100': '#e0eded',
          '200': '#c5dcdc',
          '300': '#9dc3c3',
          '400': '#71a3a5',
          '500': '#528588',
          '600': '#476f73',
          '700': '#3e5c60',
          '800': '#384e52',
          '900': '#324347',
          '950': '#1e2b2e',
        },
        'bubbles': {
          '50': '#e5fbfe',
          '100': '#d1f6fc',
          '200': '#a8ebf9',
          '300': '#6cdbf4',
          '400': '#2ac0e6',
          '500': '#0ea4cc',
          '600': '#0e82ac',
          '700': '#13698b',
          '800': '#195671',
          '900': '#194860',
          '950': '#0a2e42',
        },
        'your-pink': {
          '50': '#fef2f2',
          '100': '#ffe1e1',
          '200': '#ffc2c1',
          '300': '#fea4a3',
          '400': '#fb706e',
          '500': '#f24441',
          '600': '#e02522',
          '700': '#bc1c19',
          '800': '#9b1b19',
          '900': '#811d1b',
          '950': '#460a09',
        },
        'cyan-aqua': {
          '50': '#eafffd',
          '100': '#cbfffb',
          '200': '#9efffa',
          '300': '#5bfffb',
          '400': '#00f7fd',
          '500': '#00dbe5',
          '600': '#00afc0',
          '700': '#038b9b',
          '800': '#0d6e7d',
          '900': '#105b69',
          '950': '#033d49',
        },
      }
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    addVariablesForColors
  ],
}

function addVariablesForColors({
  addBase,
  theme
}) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}

// #71a3a5
// #00061c
// #e5fbfe
// #ffc2c1
// #00f7fd