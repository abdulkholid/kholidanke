import defaultTheme from "tailwindcss/defaultTheme";
import forms from "@tailwindcss/forms";

/** @type {import('tailwindcss').Config} */
export default {
    pruge: ["./resources/js/**/*.jsx"],
    content: [
        "./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php",
        "./storage/framework/views/*.php",
        "./resources/views/**/*.blade.php",
        "./resources/js/**/*.jsx",
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: [...defaultTheme.fontFamily.sans],
                quattrocento: ["Quattrocento", ...defaultTheme.fontFamily.sans],
                heading: ["Playfair Display", ...defaultTheme.fontFamily.serif],
            },
            colors: {
                primary: "#BD9654",
                primary__lighten: "#FFEBCA",
                primary__darken: "#704B0D",
                secondary: "#000000",
                secondary__lighten: "#222121",
                light: "#F2F1F0",
            },
            backgroundImage: {
                "texture-main": "url('/common/images/texture-main.png')",
                "flower-right": "url('/common/images/flower-right.png')",
                "flower-left": "url('/common/images/flower-left.png')",
                "frame-square": "url('/common/images/square-frame.png')",
                "frame-photo": "url('/common/images/photo-frame.png')",
            },
        },
    },

    plugins: [forms],
};
