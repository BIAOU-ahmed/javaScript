document.addEventListener("DOMContentLoaded", function () {

    var button = document.querySelector('button');
    console.log(button);
    button.addEventListener('click', hello);
    function hello() {
        var textEnter = document.querySelector('#test');
        var content = document.querySelector("#content");
        var texteDiv = document.createTextNode(textEnter.value);
        content.appendChild(texteDiv);

    }
    
});