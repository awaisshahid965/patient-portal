import type { Config } from 'tailwindcss'

const config: Config = {
    content: ['./src/**/*.{js,ts,jsx,tsx,mdx}', '../../libs/ui-components/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            screens: {
                '3xl': '1920px',
            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
            },
            colors: {
                'primary-text-color': '#26335a',
                'primary-border-color': '#231f20',
                'anchor-color': '#0278FB',
                'btn-primary-bg': '#5890FF',
                'btn-secondary-bg': '#26335A',
            },
            boxShadow: {
                'primary-shadow': '0px 0px 2px 0px rgba(0,0,0,0.75)',
            },
        },
    },
    plugins: [],
}
export default config
