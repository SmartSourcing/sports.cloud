
var fs         = require('fs');
var browserify = require('browserify');
var coffeeify  = require('coffeeify');  

browserify()  
    .add('./www/lib/jquery.min.js')
    .add('./www/lib/jquery-1.10.2.min.map')
    .add('./www/lib/framework7/js/framework7.min.js')
    .add('./www/lib/i18n.js')
    .add('./www/lib/sidebar/js/hammer.js')
    .add('./www/lib/sidebar/js/jquery.hammer.js')
    .add('./www/lib/sidebar/js/swipe-hammer.js')
    .add('./www/lib/sidebar/js/sidebar.js')
    .add('./www/lib/underscore-min.js')
    .add('./www/lib/backbone-min.js')
    .add('./www/lib/require.js')
    .add('./www/js/en.js')
    .add('./www/js/es.js')    
    .bundle()
    .pipe(fs.createWriteStream('www/js/bundle.js'));