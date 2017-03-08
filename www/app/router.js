define(function (require) {

    "use strict";

    var Home        = require('app/views/home');
    var Tournament  = require('app/views/tournament');

    return Backbone.Router.extend({

        routes: {
            
            "": "home",            
            "tournaments/:id": "tournament",            
        },
        home: function () {
            
            var homeView = new Home.TournamentsView();
            homeView.delegateEvents();
            //slider.slidePage(homeView.$el);
        },        
        tournament: function (id) {
            
            console.log('t.id: ' +id)
            var tournamentView = new Tournament.TournamentView();
            tournamentView.loadTournament(id);
        }        
    });
});