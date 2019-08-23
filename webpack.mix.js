const mix = require("laravel-mix");
const config = require("./webpack.config.js");

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.react("resources/js/app.js", "public/js").sass(
    "resources/sass/app.scss",
    "public/css"
);

mix.react("resources/js/adminApp.js", "public/js").sass(
    "resources/sass/adminApp.scss",
    "public/css"
);

mix.webpackConfig(config);
