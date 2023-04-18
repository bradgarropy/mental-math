const containerQueries = require("@tailwindcss/container-queries")

/** @type {import('tailwindcss').Config} */

const config = {
    content: ["./app/**/*.{ts,tsx}"],
    theme: {
        extend: {
            aspectRatio: {
                flashcard: "5 / 7",
            },
            colors: {
                remix: {
                    black: "#121212",
                    blue: "#3defe9",
                },
            },
            fontSize: {
                xxl: "16rem",
            },
            fontFamily: {
                text: ["Sriracha", "sans-serif"],
            },
            textDecorationThickness: {
                3: "3px",
            },
            gridTemplateRows: {
                layout: "auto 1fr auto",
            },
            textUnderlineOffset: {
                6: "6px",
            },
        },
    },
    plugins: [containerQueries],
}

module.exports = config
