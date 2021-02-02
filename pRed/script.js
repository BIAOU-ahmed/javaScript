document.addEventListener("DOMContentLoaded", function() {
    var newdata;
    window.localStorage.clear();
    const ingredient = [
        { "name": "banane", "image": "banane.jpg" },
        { "name": "ananas", "image": "ananas.jpg" },
        { "name": "pomme", "image": "pomme.jpg" },
        { "name": "chocolat", "image": "chocolat.jpg" },
        { "name": "cerise", "image": "cerise.jpg" }
    ]


    class Cards {
        constructor(ingredient, image) {
            this.ingredient = ingredient;
            this.image = image;

        }


        create() {
            var main = document.querySelector('#main_content');
            var card = document.createElement("div");
            var cardContent = document.createElement("div");
            var rounded = document.createElement("div");
            var title = document.createElement("h2");
            var ilustration = document.createElement("img");
            var content = document.createElement("div");
            var buttons = document.createElement("div");
            var firtButtons = document.createElement("button");
            var secondButtons = document.createElement("button");
            var like = document.createElement("i");
            var dislike = document.createElement("i");

            var x = Math.floor((Math.random() * 10) + 1);
            var y = Math.floor((Math.random() * 10) + 0);

            if (y <= 5) {
                card.className += "rotate-" + x;
            } else {
                card.className += "-rotate-" + x;
            }
            card.className += " sm:w-1/10 md:w-2/5 lg:w-2/6 xl:w-1/5  absolute h-1/4 mx-auto transform  flex items-center";
            cardContent.className = "text-3xl px-1 w-full h-full";
            rounded.className += "max-w-md bg-white grid  overflow-hidden ";
            title.className += "text-center";
            ilustration.className += "w-5/6 h-64  justify-self-center border-2 border-black"
            content.className += "px-6 py-4";
            buttons.className += "flex justify-between";
            firtButtons.className += "bg-red-600 rounded-full h-24 w-24 flex-col flex items-center text-xl justify-center";
            secondButtons.className += "bg-green-600 rounded-full h-24 w-24 flex-col flex items-center text-xl justify-center";
            secondButtons.id = "l"
            firtButtons.id = "r"
            like.className = "fas fa-times text-3xl";
            dislike.className = "fas fa-check text-3xl";
            var likeText = document.createTextNode("Sweep");
            var dislikeText = document.createTextNode("Keep");
            var titleText = document.createTextNode(this.ingredient);
            ilustration.src = './images/ingredients/' + this.image
            title.appendChild(titleText)
            firtButtons.appendChild(like);

            firtButtons.appendChild(likeText);
            secondButtons.appendChild(dislike);
            secondButtons.appendChild(dislikeText);
            buttons.appendChild(firtButtons);
            buttons.appendChild(secondButtons);
            content.appendChild(buttons)
            rounded.appendChild(content)
            rounded.insertBefore(ilustration, content)
            rounded.insertBefore(title, ilustration)


            cardContent.appendChild(rounded)
            card.appendChild(cardContent)
            main.appendChild(card)

        }

    }

    // readTextFile("./ingredient.json", function(text) {
    //     var data = JSON.parse(text);
    //     data.forEach(element => {
    //         var card = new Cards(element.name, element.image)
    //         card.create()
    //     });
    //     console.log(data);
    // });

    // var xmlhttp = new XMLHttpRequest();
    // var url = "./ingredient.json";

    // xmlhttp.onreadystatechange = function() {
    //     if (this.readyState == 4 && this.status == 200) {
    //         var myArr = JSON.parse(this.responseText);
    //         myFunction(myArr);
    //     }
    // };
    // xmlhttp.open("GET", url, true);
    // xmlhttp.send();
    // var news;

    // function myFunction(arr) {
    //     console.log(arr)
    //     news = arr;


    // }

    // ingredient.forEach(element => {
    //     var card = new Cards(element.name, element.image)
    //     card.create()
    // });

    var listKeep = [];

    var count = 0;

    function like(ty) {

        var s = event.currentTarget.parentNode.parentNode;
        var mainBody = document.querySelector('#main_content')
        var parent = s.parentNode.parentNode.parentNode
        var choice = document.createElement("div");
        var title = parent.querySelector('h2').textContent;
        var link = document.createElement("a");

        var t;
        if (ty == 1) {

            parent.className += " rotate-right"

            choice.className += "status dislike"
            t = document.createTextNode("Dislike");
        } else {
            parent.className += " rotate-left"
            choice.className += "status like"
            t = document.createTextNode("Like");
            listKeep.push(title);
            localStorage.setItem("names", JSON.stringify(listKeep));

        }

        link.innerHTML = " recette ";
        link.href = "recettes.html"
        link.style.textDecoration = "underline";

        choice.appendChild(t);
        s.appendChild(choice)

        var xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                var myObj = JSON.parse(this.responseText);
                // document.getElementById("demo").innerHTML = myObj.name;
                var nbOfRecettes = 0;
                var nbOfPossibleRecettes = 0;
                var listrecettes
                if (listKeep.length > 0) {
                    myObj.forEach(element => {
                        listrecettes = [];
                        console.log(element.ingredient)
                        var haveAll = true;
                        var haveOne = false;
                        listKeep.forEach(ing => {
                            if (!element.ingredient.includes(ing)) {
                                haveAll = false;

                            } else {
                                haveOne = true;
                            }
                        })
                        if (haveAll) {

                            nbOfRecettes++;
                        } else if (haveOne == true) {
                            nbOfPossibleRecettes++;
                        }

                    });
                }
                var bottomDiv = document.querySelector('#nextPage')
                bottomDiv.innerHTML = '<a class="inline-flex items-center h-10 px-4 m-2 text-lg text-indigo-100 transition-colors duration-150 bg-indigo-700 rounded-lg focus:shadow-outline hover:bg-indigo-800" href="./recettes.html">Liste de recettes</a>';
                // if (nbOfRecettes > 1) {
                //     link.innerHTML = " recettes ";
                // }
                // bottomDiv.appendChild(link);
                // bottomDiv.innerHTML += "&nbsp; correspondant à vos choix ont été trouvé.";
                // if (listKeep.length == 0) {
                //     bottomDiv.innerHTML = "Aucun ingredient n'a été choisi pour l'instant";
                // } else if (nbOfRecettes == 0) {
                //     bottomDiv.innerHTML = "Pas de recettes correspondant, mais  </br>";
                // }

                // if (nbOfPossibleRecettes != 0) {
                //     bottomDiv.innerHTML += nbOfPossibleRecettes + " autres &nbsp;";
                //     bottomDiv.appendChild(link);
                //     bottomDiv.innerHTML += "&nbsp; peuvent vous interesser"
                // }

                // pas de recettes corecpondant mais nb recettes qui pourrais vous coresponde
                //ou mais voici nb recettes qui pourrais vous interesser
                //si autres possibilité egale zeno ne rien mettre 
                // nb autres recettes qui pourrais vous interessez

            }
        };
        xmlhttp.open("GET", "recettes.json", true);
        xmlhttp.send();

        setTimeout(function() {

            parent.remove();

            parent.classList.remove("rotate-right");
            parent.classList.remove("rotate-left");
            console.log(parent)
            var trr = s.querySelector('.status');
            trr.remove()
            mainBody.prepend(parent)
        }, 2000);


        count++;
        var total = document.querySelectorAll('#main_content>div');
        console.log("total " + total.length)
        if (count == total.length) {
            alert("fini");
            count = 0;
            window.location.href = './recettes.html';
        }
    }



    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var myObj = JSON.parse(this.responseText);
            // document.getElementById("demo").innerHTML = myObj.name;

            const randomly = () => Math.random() - 0.1;
            const dynamicCard = [].concat(myObj).sort(randomly);
            console.log("nb ing " + myObj.length)
            myObj.forEach((element, index) => {

                var card = new Cards(dynamicCard[index].name, dynamicCard[index].image)
                card.create()
            });

            var test = document.querySelectorAll('#r');

            test.forEach(element => {
                element.addEventListener('click', function() { like(1); });
            });


            var test1 = document.querySelectorAll('#l');

            test1.forEach(element => {
                element.addEventListener('click', function() { like(2); });
            });
        }
    };
    xmlhttp.open("GET", "ingredient.json", true);
    xmlhttp.send();


    // read()
    // var oXHR

    // function read() {
    //     oXHR = new XMLHttpRequest();

    //     // Initiate request.
    //     //oXHR.onreadystatechange = reportStatus;

    //     if (oXHR.readyState == 4) { // Check if request is complete.

    //         data = JSON.parse(this.responseText);
    //         console.log(data)
    //     }
    //     oXHR.open("GET", "./data.json", true); // get json file.
    //     oXHR.send();

    // }


    // function reportStatus() {
    //     if (oXHR.readyState == 4) { // Check if request is complete.

    //         data = JSON.parse(this.responseText);

    //     }
    //     // console.log(data)
    //     // return data
    // }

    //return data;


    // function readTextFile(file, callback) {
    //     var rawFile = new XMLHttpRequest();
    //     rawFile.overrideMimeType("application/json");
    //     rawFile.open("GET", file, true);
    //     rawFile.onreadystatechange = function() {
    //         if (rawFile.readyState === 4 && rawFile.status == "200") {
    //             callback(rawFile.responseText);
    //             console.log(rawFile.responseText)
    //         }
    //     }
    //     rawFile.send(null);
    // }
    // var d;
    // readTextFile("./data.json", function(text) {
    //     var data = JSON.parse(text);
    //     d = data;
    //     console.log(data);
    // });
    // console.log(d)
});