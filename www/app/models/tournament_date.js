
define(function (require) {

    "use strict";

    var TournamentDate = Backbone.Model.extend({

        urlRoot: 'http://localhost:3000/api/v1/tournament_dates/' + this.id
    });

    var TournamentDates = Backbone.Collection.extend({

        model: TournamentDate,
        url: 'http://localhost:3000/api/v1/tournament_dates?tournament_id=' + this.tournament_id,
        parse: function(response, options) {
            console.log(response);
            return response;
        }
    });

    return {
        Tournament: TournamentDate,
        Tournaments: TournamentDates
    };
});