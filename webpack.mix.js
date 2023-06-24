let mix = require("laravel-mix");
mix
  .sass("scss/nightmode-style.scss", "css/nightmode-style.css")
  .sass("scss/style.scss", "css/style.css");
//mix js
mix.js("src/js/night-mode.js", "js/night-mode.js");
