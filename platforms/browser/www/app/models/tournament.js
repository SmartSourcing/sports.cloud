
define(function (require) {

    "use strict";

    var Tournament = Backbone.Model.extend({

        //urlRoot: 'http://staging.paintball-tournaments.com/api/v1',
        urlRoot: 'http://localhost:3000/api/v1',
        /*defaults: {
            status: '',
            data: [ { id: 0, name: '', iphone_logo: '' } ]
        }*/
    });

    var Tournaments = Backbone.Collection.extend({

        model: Tournament,
        //url: "http://staging.paintball-tournaments.com/api/v1/tournaments"
        url: 'http://localhost:3000/api/v1/tournaments',
        parse: function(response, options) {
            console.log(response);
            return response.data;
        }
    });

    return {
        Tournament: Tournament,
        Tournaments: Tournaments
    };
});