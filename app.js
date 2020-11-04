//Javascript for super hero page
//Naomi Benjamin

document.addEventListener('DOMContentLoaded', function(){
    var button = document.getElementById("btn");
    var url = 'http://localhost:8080/superheroes.php'
    

    button.addEventListener('click', (event) => {
        event.preventDefault();        
        httpR = new XMLHttpRequest();

        httpR.onreadystatechange = function(){
            if (httpR.readyState === XMLHttpRequest.DONE && httpR.status === 200){
                //var key = document.getElementById("search-box").value;
                var r = httpR.responseText;
                //var s = document.getElementById("bio");
                //s.innerHTML = r;
                
                alert(r);
                //httpR.open('POST', url);
                //httpRequest.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
                //httpRequest.send('key=' + encodeURIComponent(key));
                //alert(r);
                }
                if (httpR.status === 404){
                    console.log('Not found.');
                }
            }
        
        httpR.open('GET', url, true);
        httpR.send();
    });

        
});

