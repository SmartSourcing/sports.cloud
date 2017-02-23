//define(function() {
     
function Ts() {
    this.url = 'http://localhost:3000/api/v1/tournaments';   

    this.get = function() {
        $.ajax({
            method: 'get',
            url: this.url,
            dataType: 'application/json',
            async: true,
            success: function(result) {
                return ajax.parseJSONP(result); 
            },
            error: function(request,error) {
                console.log('Network error has occurred please try again!');
            }
        });
    }
};
/*
    return Ts;
});      
*/