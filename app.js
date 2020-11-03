//Javascript for super hero page
//Naomi Benjamin

document.addEventListener('DOMContentLoaded', function(){
    var button = document.getElementById("btn");
    var key = document.getElementById("search-box");
    var httpR;
    var url = "superheroes.php";
    

    button.addEventListener('click', (event) => {
        //event.preventDefault();
        //alert('Yo');
        
        httpR = new XMLHttpRequest();

        httpR.onreadystatechange = function(){
            console.log(httpR.readyState);
            if (httpR.readyState === XMLHttpRequest.DONE){
                if (httpR.status === 200){
                    var r = httpR.responseText;
                    alert(r);
                }
                if (httpR.status === 404){
                    console.log('Not found.');
                }
            }
        }
        
        httpR.open('GET', url);
        httpR.send();
    });

        
});


/*$(document).ready(function(){
    var button = $('#btn');
    var key = $('#search-box');

    button.on('click', function(){
        $.ajax('superheroes.php', {
            method: 'GET'
        }).done(function(r){

            //alert(r);
        });
    });
});*/