document.getElementById('dogsOrCatsSubmit').addEventListener('click', function (event) {
    event.preventDefault();
    if (document.getElementById('Cats').checked) {
        document.getElementById('dogsOrCatsResponse').innerText = 'Wrong choice.'
        
        /*let i = 5;
        document.getElementById('dogsOrCatsResponse').innerText = 'Wrong choice. You will be redirected shortly... ';
        
        var timer = setInterval(function () {
            if (i <= 0) {
                clearInterval(timer);
            }
            document.getElementById('dogsOrCatsResponse').innerText = 'Wrong choice. You will be redirected shortly... ' + i;
            i--;
        }, 1000);

        setTimeout(function () {
            /*window.close();
        }, 6000); */
    }
    else if (document.getElementById('Dogs').checked) {
        document.getElementById('dogsOrCatsResponse').innerText = 'You made the right choice!'
    }
});
