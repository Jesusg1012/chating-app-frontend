const mix = require('laravel-mix');

/**
 * So if you're looking at this code, that's pretty awesome. Most students will
 * just see files they don't need to worry about and ignore them, others
 * will glance at the files, but not read this wall of text. You,
 * however are different--you're reading a comment. That's
 * pretty awesome and to reward you if you ping me on
 * slack you'll get an extra 5 points added to
 * anything you want. THat could be this,
 * or the quiz or one of the other
 * assignments. But you gotta
 * act fast because the
 * first person to
 * message me
 * wins.
 */

mix.babel(['src/scripts/main.js'], 'public/js/main.js')
   .sass('src/sass/main.scss', 'public/css')
   .options({
      processCssUrls: false,
      postCss: [
         require('postcss-import')(),
         require('postcss-flexbugs-fixes')(),
         require('postcss-pxtorem')({
            rootValue: 16,
            mediaQuery: false
         }),
         require('css-mqpacker')(),
         require('autoprefixer')(),
         require('cssnano')({
            "preset": [
               "default",
               {
                  calc: false,
                  discardComments: {removeAll: true},
                  normalizeWhitespace: true
               }
            ]
         })
      ]
   });
