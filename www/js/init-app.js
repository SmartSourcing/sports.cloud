window.app = window.app || {} ;

// Set to "true" if you want the console.log messages to appear.
app.LOG = app.LOG || true ;

app.consoleLog = function() {
    if( app.LOG ) {
        var args = Array.prototype.slice.call(arguments, 0) ;
        console.log.apply(console, args) ;
    }
} ;

/* MAIN */
app.initEvents = function() {
    "use strict" ;
    var fName = "app.initEvents():" ;
    app.consoleLog(fName, "entry") ;
    app.initDebug() ;           
    app.hideSplashScreen() ;    
    app.loadTournaments();
    app.consoleLog(fName, "exit") ;
} ;

document.addEventListener("app.Ready", app.initEvents, false) ;

app.initDebug = function() {
    "use strict" ;
    var fName = "app.initDebug():" ;
    app.consoleLog(fName, "entry") ;

    if( window.device && device.cordova ) {
        app.consoleLog("device.version: " + device.cordova);
        app.consoleLog("device.model: " + device.model);
        app.consoleLog("device.platform: " + device.platform);
        app.consoleLog("device.version: " + device.version);
    }

    if( window.cordova && cordova.version ) {
        app.consoleLog("cordova.version: " + cordova.version) ;

        if( cordova.require ) {
            app.consoleLog(JSON.stringify(cordova.require('cordova/plugin_list').metadata, null, 1)) ;
        }
    }

    app.consoleLog(fName, "exit") ;
} ;

app.hideSplashScreen = function() {
    "use strict" ;
    var fName = "app.hideSplashScreen():" ;
    app.consoleLog(fName, "entry") ;

    if( navigator.splashscreen && navigator.splashscreen.hide ) {
        navigator.splashscreen.hide() ;
    }
    if( window.intel && intel.xdk && intel.xdk.device ) {
        if( intel.xdk.device.hideSplashScreen)
            intel.xdk.device.hideSplashScreen() ;
    }

    app.consoleLog(fName, "exit") ;
} ;

// Put this un business classs
app.loadTournaments = function() {
    
    //service = new app.TournamentService();
    service = new Ts();
    results = service.get();
}