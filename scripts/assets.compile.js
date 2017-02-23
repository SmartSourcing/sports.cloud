var fs         = require('fs');
var browserify = require('browserify');
var coffeeify  = require('coffeeify');  

browserify()  
  .add('./www/app/services/tournamentService.js.coffee')
  .add('./www/app/models/*.js')  
  .transform(coffeeify)  
  .bundle()
  .pipe(fs.createWriteStream('www/js/bundle.js'));