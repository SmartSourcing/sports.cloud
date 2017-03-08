define(function (require) {

    "use strict";
    var models      = require('app/models/tournament');
    var tpl         = require('text!tpl/tournament.html');
    var template    = _.template(tpl);

    var tv = Backbone.View.extend( {

        initialize: function () {

        },
        events: {

            "click .item-link item-content": "loadTournament"
        },
        loadTournament: function(id) {
            
            var self = this;
            this.tournament = new models.Tournament({id: id});            
            this.tournament.fetch({ success: function(){ self.render(); } });      
        },
        render: function () {

            $('#page_content').html(template({tournament: this.tournament.toJSON()}));
            return this;
        } 
    });

    return { TournamentView: tv };
});