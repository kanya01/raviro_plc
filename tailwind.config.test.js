// tailwind.config.test.js
module.exports = {
    content: [
        './app/views/**/*.erb',
        './app/helpers/**/*.rb',
    ],
    theme: {
        extend: {
            // Simplified theme for testing
        },
    },
    plugins: [],
    // Disable JIT mode for tests
    mode: 'aot'
}