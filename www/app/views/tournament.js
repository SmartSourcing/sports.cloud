define(function (require) {

    "use strict";
    var models      = require('app/models/tournament');
    var tpl         = require('text!tpl/tournaments.html');
    var template    = _.template(tpl);

    var tv = Backbone.View.extend( {

        initialize: function () {

            var self = this;
            this.tournaments = new models.Tournaments();            
            this.tournaments.fetch({ success: function(){ self.render(); } });      
        },
        render: function () {

            $('#page_content').html(template({tournaments: this.tournaments.toJSON()}));
            return this;
        }    
    });

    return { TournamentView: tv };
});