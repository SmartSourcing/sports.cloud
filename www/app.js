window.app  = window.app || {} ;
app.LOG     = app.LOG || true ;
 
app.consoleLog = function() {
    if( app.LOG ) {
        var args = Array.prototype.slice.call(arguments, 0);
        console.log.apply(console, args);
    }
};

requirejs.config({
    baseUrl: 'app',
    paths: {
        app: ['.','models','views'],        
        tpl: 'tpl'
    }    
});

app.Menu = function (action) { 

    if ( action == 'open' ) {
        app.f7.openPanel('left');    
    }
    else {
     
        app.f7.closePanel('left');    
    }    
}

app.reload = function() {    
    Backbone.history.location.reload();
    return false;
}

// Router helper
app.reroute = function() {
    
    $(document).on("click", "a[href]:not([data-bypass])", function(evt) {

        evt.preventDefault();
        var href = $(this).prop("href").split('#')[1];               
        Backbone.history.navigate(href, true);
    });
}

// void Main()
require(['app/router'], function (Router) {
    
     var boot = function() {
         app.router = new Router();
         app.reroute();
         Backbone.history.start();
         app.f7 = new Framework7();
    }
   
    $.i18n.init(true, false);
    $('.center span').html($.i18n.get('tournaments'));
    $('#menu-news a').html($.i18n.get('menu.news'));
    $('#menu-ss a').html($.i18n.get('menu.ss'));
    $('#menu-language a').html($.i18n.get('menu.language'));
    $('#menu-close a').html($.i18n.get('menu.close'));
    document.addEventListener("app.Ready", boot, false);  
});