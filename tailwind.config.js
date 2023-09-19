/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme';

export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    screens: {
      'xs': '415px',
      ...defaultTheme.screens,
    },
    colors: {
      'black': {
        '50': '#f6f6f6',
        '100': '#e7e7e7',
        '200': '#d1d1d1',
        '300': '#b0b0b0',
        '400': '#888888',
        '500': '#6d6d6d',
        '600': '#5d5d5d',
        '700': '#4f4f4f',
        '800': '#454545',
        '900': '#3d3d3d',
        '950': '#2e2e2e',
      },
      'natural': {
        '50': '#fffadd',
        '100': '#fff7c0',
        '200': '#ffed85',
        '300': '#ffdb3f',
        '400': '#ffc40b',
        '500': '#f4aa00',
        '600': '#d38100',
        '700': '#a85a00',
        '800': '#8a4609',
        '900': '#75390e',
        '950': '#451c03',
      },
      'yellow': {
        '50': '#fff8eb',
        '100': '#ffebc6',
        '200': '#ffcc70',
        '300': '#ffb94a',
        '400': '#ff9e20',
        '500': '#f97907',
        '600': '#dd5502',
        '700': '#b73706',
        '800': '#942a0c',
        '900': '#7a230d',
        '950': '#460f02',
      },
      'silver': {
        '50': '#f7f7f7',
        '100': '#f0f0f0',
        '200': '#e3e3e3',
        '300': '#d1d1d1',
        '400': '#c0c0c0',
        '500': '#aaaaaa',
        '600': '#969696',
        '700': '#818181',
        '800': '#6a6a6a',
        '900': '#585858',
        '950': '#333333',
      },
      'navy': {
        '50': '#f3f8fc',
        '100': '#e5f1f9',
        '200': '#c6e2f1',
        '300': '#94cae5',
        '400': '#5baed5',
        '500': '#3695c1',
        '600': '#2677a3',
        '700': '#22668d',
        '800': '#1e516e',
        '900': '#1e445c',
        '950': '#142d3d',
      }
    },
    fontFamily: {
      'display': ['Montserrat', 'sans-serif'],
      'motto': ['Sacramento', 'cursive']
    },
    extend: {},
  },
  plugins: [],
}

