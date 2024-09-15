/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{js,jsx,ts,tsx}", "node_modules/flowbite-react/lib/esm/**/*.js"],
    theme: {
        extend: {
            colors: {
                brand: {
                    primary: "#386641", // dark green
                    secondary: "#6A994E", // light green
                    tertiary: "#A7C957", // light yellowish green
                    accent: "#BC4749", // red
                    background: "#F2E8CF", // light yellow/skin colour
                },
            },
        },
    },
    plugins: [require("flowbite/plugin")],
};

