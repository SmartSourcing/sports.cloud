define(function (require) {

    "use strict";
    var models      = require('app/models/tournament');
    var tpl         = require('text!tpl/tournaments.html');
    var template    = _.template(tpl);

    var tv = Backbone.View.extend( {

        initialize: function () {

            this.loadHome();
        },
        events: {
            
            "click #reload": "loadHome",
        },
        loadHome: function()
        {
            var self = this;
            this.tournaments = new models.Tournaments();
            this.tournaments.fetch({ success: function(){ self.render(); } } );            
        },
        render: function () {

            $('#page_content').html(template({tournaments: this.tournaments.toJSON() } ) );
            /*$('#page_content').on('click', 'a[href^="#/"]', function (event) {

                event.preventDefault();
                var url = this.href.split('#')[1];                
                Backbone.history.navigate(url);
            });*/
            return this;
        }    
    });

    return { TournamentsView: tv };
});