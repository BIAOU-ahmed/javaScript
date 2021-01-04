document.addEventListener("DOMContentLoaded", function() {
    var data;
    const ingredient = [
        { "name": "banane", "image": "banane.jpg" },
        { "name": "ananas", "image": "ananas.jpg" },
        { "name": "cerise", "image": "cerise.jpg" }
    ]


    class Cards {
        constructor(ingredient, image) {
            this.ingredient = ingredient;
            this.image = image;

        }


        create() {
            var m = document.querySelector('#container');
            var m = document.querySelector('#container');
            var div = document.createElement("div");
            var titre = document.createElement("h2");
            var div2 = document.createElement("div");
            var div3 = document.createElement("div");
            var btn1 = document.createElement("button");
            var btn2 = document.createElement("button");
            var ingImage = document.createElement("img");
            ingImage.src = './images/' + this.image
            div.className += "buddy";
            div2.className += "avatar";
            div3.className += "button";
            div2.appendChild(ingImage)

            var t = document.createTextNode("Hello ");
            var ts = document.createTextNode(" World");
            var tstitre = document.createTextNode(this.ingredient);
            titre.appendChild(tstitre)
            btn1.appendChild(ts);
            btn2.appendChild(t);
            btn1.id = "r";
            btn2.id = "l";
            div3.appendChild(btn1);
            div3.appendChild(btn2);
            div.appendChild(titre);
            div.appendChild(div2);
            div.appendChild(div3);
            m.appendChild(div);
        }

    }



    ingredient.forEach(element => {
        var card = new Cards(element.name, element.image)
        card.create()
    });




    var count = 0;

    function like(ty) {

        var s = event.currentTarget.parentNode.parentNode;
        var mainBody = document.querySelector('#container')
            // var parent = s.parentNode.parentNode.parentNode
        var choice = document.createElement("div");

        var t;
        if (ty == 1) {

            s.className += " rotate-right"
            choice.className += "status dislike"
            t = document.createTextNode("Dislike");
        } else {
            s.className += " rotate-left"
            choice.className += "status like"
            t = document.createTextNode("Like");

        }
        console.log(s)
        choice.appendChild(t);
        s.appendChild(choice)

        setTimeout(function() {

            s.remove();

            s.classList.remove("rotate-right");
            s.classList.remove("rotate-left");
            console.log(s)
            var trr = s.querySelector('.status');
            trr.remove()
            mainBody.prepend(s)
        }, 1000);
        count++;
        var total = mainBody.querySelectorAll('.buddy');
        if (count == total.length) {
            alert("fini");
            count = 0;
            read();

            // console.log("data")
            console.log("ee " + data)
        }
    }

    var test = document.querySelectorAll('#r');

    test.forEach(element => {
        element.addEventListener('click', function() { like(1); });
    });


    var test1 = document.querySelectorAll('#l');

    test1.forEach(element => {
        element.addEventListener('click', function() { like(2); });
    });



    // read()
    var oXHR

    function read() {
        oXHR = new XMLHttpRequest();

        // Initiate request.
        //oXHR.onreadystatechange = reportStatus;

        if (oXHR.readyState == 4) { // Check if request is complete.

            data = JSON.parse(this.responseText);
            console.log(data)
        }
        oXHR.open("GET", "./data.json", true); // get json file.
        oXHR.send();

    }


    function reportStatus() {
        if (oXHR.readyState == 4) { // Check if request is complete.

            data = JSON.parse(this.responseText);

        }
        // console.log(data)
        // return data
    }

    //return data;


    function readTextFile(file, callback) {
        var rawFile = new XMLHttpRequest();
        rawFile.overrideMimeType("application/json");
        rawFile.open("GET", file, true);
        rawFile.onreadystatechange = function() {
            if (rawFile.readyState === 4 && rawFile.status == "200") {
                callback(rawFile.responseText);
            }
        }
        rawFile.send(null);
    }

    readTextFile("./data.json", function(text) {
        var data = JSON.parse(text);
        console.log(data);
    });

});