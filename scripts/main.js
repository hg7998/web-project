window.onload = function () {
    document.getElementById('dogsOrCatsSubmit').addEventListener('click', function (event) {
        if (document.getElementById('Cats').checked) {
            document.getElementById('dogsOrCats').innerText = 'Wrong choice.'
            //PLAY STEVE CARREL "NO" GIF//
            
            /*let i = 5;
            var timer = setInterval(function () {
                if (i <= 0) {
                    clearInterval(timer);
                }
                document.getElementById('dogsOrCats').innerText = 'Wrong choice. You will be redirected shortly... ' + i;
                i--;
            }, 1000);

            setTimeout(function () {
                window.close();
            }, 6000); */
        }
        else if (document.getElementById('Dogs').checked) {
            document.getElementById('dogsOrCats').innerText = 'You made the right choice!'
        }
    });

};