
define(function (require) {

    "use strict";

    var Tournament = Backbone.Model.extend({

        //urlRoot: 'http://staging.paintball-tournaments.com/api/v1',        
        initialize: function () {

            this.urlRoot = 'http://localhost:3000/api/v1/tournaments';
        }
    });

    var Tournaments = Backbone.Collection.extend({

        model: Tournament,
        //url: "http://staging.paintball-tournaments.com/api/v1/tournaments"
        url: 'http://localhost:3000/api/v1/tournaments',
        parse: function(response, options) {
            return response;
        }
    });

    return {
        Tournament: Tournament,
        Tournaments: Tournaments
    };
});