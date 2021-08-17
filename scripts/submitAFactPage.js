window.onload = function () {

const factSubmitButton = document.getElementById("factSubmitButton");
let nameField = document.getElementById('name');
let factField = document.getElementById('fact');

    factSubmitButton.addEventListener('click', function (event) {

        if (nameField.value === '' || factField.value.trim().length === 0) {
            event.preventDefault();
            requiredField.innerText = "Missing a required field.";
        }

        else {
            alert("Thank you for submitting a fact!");
        }

    });
}