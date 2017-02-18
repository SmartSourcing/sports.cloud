# Creating HTML5 mobile app with cordova and angular2 

$ npm install -g cordova
$ npm install -g angular-cli
$ cordova create sports
$ cd sports
$ cordova platform add browser
$ ng init
$ rm -r www
$ ng build --target=production --environment=prod --output-path www/
