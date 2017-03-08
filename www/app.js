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

app.reroute = function() {
    
    $(document).on("click", "a[href]:not([data-bypass])", function(evt) {

        evt.preventDefault();
        var href = $(this).prop("href").split('#')[1];               
        Backbone.history.navigate(href, true);
    });
}

require(['app/router'], function (Router) {
    
     var boot = function() {
         app.router = new Router();
         app.reroute();
         Backbone.history.start();
    }
   
    $.i18n.init(true, false);
    $('.center').html($.i18n.get('tournaments'));
    document.addEventListener("app.Ready", boot, false);  
});