/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
        extend: {
            fontFamily: {
                ssp: ["Source Sans Pro", "sans-serif"],
                montserrat: ["Montserrat", "sans-serif"],
                alice: ["Alice", "serif"]
            }
        },
    },
    plugins: [],
}