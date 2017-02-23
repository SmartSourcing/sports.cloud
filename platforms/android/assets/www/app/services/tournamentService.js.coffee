window.app = window.app || {} ;

class app.TournamentService

    constructor: () ->
        return

    get: () ->
        url = 'http://localhost:3000/api/v1/tournaments'
    
        $.ajax {
            method: 'get',
            url: url,
            dataType: 'application/json',
            async: true,
            success: (result) -> 
                return ajax.parseJSONP(result)
            ,
            error: (request,error) -> 
                console.log('Network error has occurred please try again!')
                return
        }