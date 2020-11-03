//Javascript for super hero page
//Naomi Benjamin

$(document).ready(function(){
    var button = $('#btn');

    button.on('click', function(){
        $.ajax('superheroes.php', {
            method: 'GET'
        }).done(function(r){
            alert(r);
        });
    });
});