document.addEventListener("DOMContentLoaded", function() {
    var j = JSON.parse(window.localStorage.getItem("names"))
    console.log(j)

    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var myObj = JSON.parse(this.responseText);
            // document.getElementById("demo").innerHTML = myObj.name;

            myObj.forEach(element => {

                console.log(element.ingredient)
                var haveAll = true;
                j.forEach(ing => {
                    if (!element.ingredient.includes(ing)) {

                        haveAll = false;
                    }
                })
                if (haveAll) {
                    // alert(element.name);
                    var recipes = new Recipes(element.name, element.image)
                    recipes.create()

                }

            });

        }

    };
    xmlhttp.open("GET", "recettes.json", true);
    xmlhttp.send();


    class Recipes {

        constructor(name, image) {
            this.name = name;
            this.image = image;
        }

        create() {
            var main = document.querySelector('#main_content');
            var mainContent = document.createElement("div");
            var content = document.createElement("div");
            var card = document.createElement("div");
            var cardImage = document.createElement("img");
            var cardBody = document.createElement("div");
            var TitleCard = document.createElement("div");
            var title = document.createElement("h3");

            mainContent.className = " h-2/4  flex items-center transform transition duration-500 hover:scale-105";
            content.className = "text-3xl px-1 w-full h-full";
            card.className = "max-w-md bg-white grid  overflow-hidden ";
            cardImage.className = "w-5/6 h-64 mt-3 justify-self-center border-2 border-black"

            cardBody.className = "px-6 py-4";
            TitleCard.className = "flex justify-between";
            cardImage.src = './images/recettes/' + this.image
            var titleText = document.createTextNode(this.name);
            title.appendChild(titleText)

            TitleCard.appendChild(title);
            cardBody.appendChild(TitleCard);
            card.appendChild(cardImage);
            card.appendChild(cardBody);
            content.appendChild(card);
            mainContent.appendChild(content)
            main.appendChild(mainContent);

        }
    }
});