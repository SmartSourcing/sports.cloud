function Ts() {
    this.url = 'http://localhost:3000/api/v1/tournaments';   

    this.get = function() {
        $.ajax({
            method: 'get',
            url: this.url,
            async: false,
            success: function(result) {

                console.log('holis !!!');
                data = result
                $.get('app/templates/tournaments.mst', function(template) {
                    var rendered = Mustache.render(template, data);
                    $('#page_content').html(rendered);
                });                
            },
            error: function(request,error) {
                console.log('Network error has occurred please try again!');
            }
        });
    }
};