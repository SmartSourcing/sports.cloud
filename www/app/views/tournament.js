define(function (require) {

    "use strict";
    var t           = require('app/models/tournament');
    var td          = require('app/models/tournament_date');
    var tpl         = require('text!tpl/tournament.html');
    var template    = _.template(tpl);

    var tv = Backbone.View.extend( {

        initialize: function () {},
        loadTournament: function(id) {
            
            self                                = this;
            this.tournament                     = new t.Tournament({id: id});                        
            this.tournament_dates               = new td.TournamentDates();
            this.tournament_dates.tournament_id = id;
            
            this.tournament.fetch({ success: function(){ 

                self.tournament_dates.fetch({
                    data: $.param({tournament_id: id}),
                    success: function() { self.render(); }
                })
            }});            
        },
        render: function () {

            $('#page_content').html(template({  tournament: this.tournament.toJSON(),
                                                tournament_dates: this.tournament_dates.toJSON() }));
            return this;
        } 
    });

    return { TournamentView: tv };
});