window.onload = function() {

let nameField = document.getElementById('name');
let factField = document.getElementById('fact');

document.getElementById('factSubmitButton').addEventListener('click', function (event) {
    
    if (nameField.value === '' || factField.value.trim().length === 0) {
        event.preventDefault();
        requiredField.innerText = "Missing a required field.";
    }
});
}