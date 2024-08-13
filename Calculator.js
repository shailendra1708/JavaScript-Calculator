let inputBox = document.getElementById('Total');
let buttons = document.querySelectorAll("button");
let string = ' ';
let buttonsArray = Array.from(buttons);

buttonsArray.forEach(function (btn) {
    btn.addEventListener('click', function (event) {

        if (event.target.innerHTML == "DEL") {
            string = string.substring(0, string.length - 1);
            inputBox.value = string;
        }
        else if (event.target.innerHTML == "AC") {
            string = " ";
            inputBox.value = string;
        }
        else if (event.target.innerHTML == "=") {
            string = eval(string);
            inputBox.value = string;
        }
        else {
            string += event.target.innerHTML;
            inputBox.value = string;
        }
    });
});


