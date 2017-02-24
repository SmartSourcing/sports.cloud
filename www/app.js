window.app  = window.app || {} ;
app.LOG     = app.LOG || true ;

app.consoleLog = function() {
    if( app.LOG ) {
        var args = Array.prototype.slice.call(arguments, 0);
        console.log.apply(console, args);
    }
};

/* MAIN */
/*
app.initEvents = function() {    
    var fName = "app.initEvents():";
    app.consoleLog(fName, "entry");
    app.initDebug();           
    app.hideSplashScreen();    
    app.consoleLog(fName, "exit");
};

app.initDebug = function() {
    var fName = "app.initDebug():";
    app.consoleLog(fName, "entry");

    if( window.device && device.cordova ) {
        app.consoleLog("device.version: " + device.cordova);
        app.consoleLog("device.model: " + device.model);
        app.consoleLog("device.platform: " + device.platform);
        app.consoleLog("device.version: " + device.version);
    }

    if( window.cordova && cordova.version ) {
        app.consoleLog("cordova.version: " + cordova.version) ;

        if( cordova.require ) {
            app.consoleLog(JSON.stringify(cordova.require('cordova/plugin_list').metadata, null, 1));
        }
    }

    app.consoleLog(fName, "exit");
};
*/

requirejs.config({
    baseUrl: 'app',
    paths: {
        app: ['.','models','views'],
        tpl: 'tpl'
    }    
});

//require(['jquery', 'backbone', 'app/router'], function ($, Backbone, Router) {
require(['app/router'], function (Router) {
    
     var boot = function() {
         app.router = new Router();
         Backbone.history.start();
    }
   
    document.addEventListener("app.Ready", boot, false);
    
    /*
    $("body").on("click", ".back-button", function (event) {
        event.preventDefault();
        window.history.back();
    });
    */   
});