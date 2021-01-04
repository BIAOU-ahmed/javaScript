document.addEventListener("DOMContentLoaded", function() {
    var total = 0;
    var listElement = document.querySelectorAll('#left>ul>li');

    //console.log(panier)
    listElement.forEach(element => {
        element.addEventListener('click', add);

    });

    class Products {
        constructor(type, price, number) {
            this.type = type;
            this.price = price;
            this.number = number;

        }
    }

    function add() {
        //window.localStorage.clear();
        var text = event.target.textContent.split(' ')[0]
        var price = event.target.textContent.split(' ')[1].split('')[0]

        var nb = 1
        if (window.localStorage.getItem(text) != null) {
            var j = JSON.parse(window.localStorage.getItem(text))
            nb = Number(j.number) + 1
        }
        var product = new Products(text, price, nb);
        window.localStorage.setItem(text, JSON.stringify(product))
        console.log(window.localStorage.getItem(text))
        alert("le produt " + text + " a été ajoué au panier")
            //window.localStorage.clear();
    }


    start();

    function start() {


        var content = document.querySelector('#right>ul');
        for (var i = 0; i < localStorage.length; i++) {
            var localvalue = localStorage.getItem(localStorage.key(i));
            console.log(localvalue)

            var j = JSON.parse(localvalue)
            var nbof = Number(j.price) * Number(j.number);
            content.innerHTML += '<li> <span class="mr-5">' + j.type + '</span>  <label >' + Number(j.number) +
                ' </label> X ' + Number(j.price) + '€ = <label id="somme">' + nbof +
                '</label>€<button class="ml-2">-</button><button class="ml-2">+</button><button class="bg-danger ml-2">X</button></li>';

            total += nbof;
        }
        var totalLabel = document.querySelector('#result');
        totalLabel.innerHTML = total + "€";

        var panier = content.querySelectorAll('li>:nth-child(6)');

        panier.forEach(element => {
            console.log('ee')
            element.addEventListener('click', deletep);

        });
        var addButton = content.querySelectorAll('li>:nth-child(5)');

        addButton.forEach(element => {

            element.addEventListener('click', rise);


        });
        var addButton = content.querySelectorAll('li>:nth-child(4)');

        addButton.forEach(element => {

            element.addEventListener('click', decreases);


        });
    }



    function deletep() {
        var textEnter = event.target;
        var nb = 1;

        var content = textEnter.querySelector('li');
        var product = document.querySelectorAll('li');
        product.forEach(element => {
            //console.log(element.querySelector('span').textContent);
            var datain = element.querySelectorAll('button')

            datain.forEach(ele => {
                if (ele == textEnter) {

                    var valueIn = element.querySelector('span').textContent;
                    console.log(valueIn)
                    element.remove();

                    var j = JSON.parse(window.localStorage.getItem(valueIn))
                    total -= Number(j.price * j.number);
                    var totalLabel = document.querySelector('#result');
                    totalLabel.innerHTML = total + "€";
                    window.localStorage.removeItem(valueIn);
                }
            })

        });


    }

    function rise() {
        var textEnter = event.target;
        var nb = 1;

        var content = textEnter.querySelector('li');
        var product = document.querySelectorAll('li');
        product.forEach(element => {
            //console.log(element.querySelector('span').textContent);
            var datain = element.querySelectorAll('button')

            datain.forEach(ele => {
                if (ele == textEnter) {

                    var valueIn = element.querySelector('span').textContent;
                    var j = JSON.parse(window.localStorage.getItem(valueIn))
                    var price = j.price;
                    var nb = j.number + 1
                    var product = new Products(valueIn, price, nb);
                    window.localStorage.setItem(valueIn, JSON.stringify(product))
                    var numb = element.querySelector('label');
                    var numbTotal = element.querySelector('#somme');
                    console.log(numbTotal)
                    numb.innerHTML = nb
                    numbTotal.innerHTML = nb * price;
                    total += Number(price);
                    var totalLabel = document.querySelector('#result');
                    totalLabel.innerHTML = total + "€";
                }
            })


        });
    }

    function decreases() {
        var textEnter = event.target;
        var nb = 1;

        var content = textEnter.querySelector('li');
        var product = document.querySelectorAll('li');
        product.forEach(element => {
            //console.log(element.querySelector('span').textContent);
            var datain = element.querySelectorAll('button')

            datain.forEach(ele => {
                if (ele == textEnter) {

                    var valueIn = element.querySelector('span').textContent;
                    var j = JSON.parse(window.localStorage.getItem(valueIn))
                    var price = j.price;
                    var nb = j.number - 1
                    if (nb >= 0) {
                        var product = new Products(valueIn, price, nb);
                        window.localStorage.setItem(valueIn, JSON.stringify(product))
                        var numb = element.querySelector('label');
                        var numbTotal = element.querySelector('#somme');
                        console.log(numbTotal)
                        numb.innerHTML = nb
                        numbTotal.innerHTML = nb * price;
                        total -= Number(price);
                        var totalLabel = document.querySelector('#result');
                        totalLabel.innerHTML = total + "€";
                    }

                }
            })


        });
    }

});