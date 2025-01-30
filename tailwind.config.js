module.exports = {
  content: [
    "./app/views/**/*.{erb,haml,html,slim}",
    "./app/helpers/**/*.rb",
    "./app/assets/stylesheets/**/*.css",
    "./app/javascript/**/*.{js,jsx}",
    "./config/initializers/simple_form.rb",
  ],
  theme: {
    extend: {
      colors: {
        // Add your custom colors here
        primary: "#4a90e2",
        secondary: "#50c878",
      },
    },
  },
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/typography")],
};
