var fs         = require('fs');
var browserify = require('browserify');
var coffeeify  = require('coffeeify');  

browserify()  
  .add('./www/app/services/tournament_service.js')
  .add('./www/app/models/tournament.js')     
  .transform(coffeeify)  
  .bundle()
  .pipe(fs.createWriteStream('www/js/bundle.js'));