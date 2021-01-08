const purge = require('@fullhuman/postcss-purgecss');
const purgeOptions = {
    content: [
      './src/index.html',
    ],
    defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
};

module.exports = {
    plugins: [
        require('tailwindcss'),
        require('autoprefixer'),
        purge(purgeOptions),
    ],
}