// $(document).ready(function() {

//     $(".tt").on("dd", function() {
//         $('.buddy').addClass('rotate-left').delay(700).fadeOut(1);
//         $('.buddy').find('.status').remove();

//         $('.buddy').append('<div class="status like">Like!</div>');
//         if ($('.buddy').is(':last-child')) {
//             console.log("eeee")
//             $('.buddy:nth-child(1)').removeClass('rotate-left rotate-right').fadeIn(300);
//         } else {
//             $('.buddy').next().removeClass('rotate-left rotate-right').fadeIn(400);
//             console.log('test')
//         }
//     });

//     $(".buddy").on("swipeleft", function() {
//         $(this).addClass('rotate-right').delay(700).fadeOut(1);
//         $('.buddy').find('.status').remove();
//         $(this).append('<div class="status dislike">Dislike!</div>');

//         if ($(this).is(':last-child')) {
//             $('.buddy:nth-child(1)').removeClass('rotate-left rotate-right').fadeIn(300);
//             alert('OUPS');
//         } else {
//             $(this).next().removeClass('rotate-left rotate-right').fadeIn(400);
//         }
//     });

// });

function test22() {
    alert("ee")
}

function tes() {

    var s = event.currentTarget.parentNode.parentNode;
    s.className += " rotate-left"

    var div = document.createElement("div");
    div.className += "status like"
    var t = document.createTextNode("Hello World");
    div.appendChild(t);
    s.appendChild(div)

    var t1 = document.querySelectorAll('.rotate-left')
    var t3 = document.querySelectorAll('.rotate-right')
    var t2 = document.querySelectorAll('#container>div')
    console.log("global" + t2.length)
    console.log("roted" + (Number(t1.length) + Number(t3.length)))
        //console.log(s.nextSibling)
    if (Number(t2.length) === Number(t1.length) + Number(t3.length)) {
        console.log("in right")
        t1.forEach(element => {
            element.classList.remove("rotate-left");
            var trr = element.querySelector('.status');
            trr.remove()
            console.log(trr)
        });
        t3.forEach(element => {
            element.classList.remove("rotate-right");
            var trr = element.querySelector('.status');
            trr.remove()
            console.log(trr)
        });

    } else {
        //s.remove()
    }
    // } else {
    //     console.log('test' + s.nextSibling)
    //     s.nextSibling.style.display = "block";

    // }
    // s.querySelector('.status').remove();
}

function tes1() {

    var s = event.currentTarget.parentNode.parentNode;
    s.className += " rotate-right"

    var div = document.createElement("div");
    div.className += "status like"
    var t = document.createTextNode("World");
    div.appendChild(t);
    s.appendChild(div)
    var t3 = document.querySelectorAll('.rotate-left')
    var t1 = document.querySelectorAll('.rotate-right')
    var t2 = document.querySelectorAll('#container>div')
        //console.log("global" + t2.length)
        // console.log("roted" + t1.length)
        //console.log(s.nextSibling)

    console.log("global" + t2.length)
    console.log("roted" + (Number(t1.length) + Number(t3.length)))
    if (Number(t2.length) === Number(t1.length) + Number(t3.length)) {
        console.log("in left")
        setTimeout(function() {

            t1.forEach(element => {
                element.classList.remove("rotate-right");
                var trr = element.querySelector('.status');
                trr.remove()
                console.log(trr)
            });
            t3.forEach(element => {
                element.classList.remove("rotate-left");
                var trr = element.querySelector('.status');
                trr.remove()
                console.log(trr)
            });
        }, 1000);


    } else {
        //s.remove()
    }
    // } else {
    //     console.log('test' + s.nextSibling)
    //     s.nextSibling.style.display = "block";

    // }
    // s.querySelector('.status').remove();
}



function starts(ing) {
    var m = document.querySelector('#container');
    var div = document.createElement("div");
    var titre = document.createElement("h2");
    var div2 = document.createElement("div");
    var div3 = document.createElement("div");
    var btn1 = document.createElement("button");
    var btn2 = document.createElement("button");
    var ingImage = document.createElement("img");
    ingImage.src = './images/banane.jpg'
    div.className += "buddy";
    div2.className += "avatar";
    div3.className += "button";
    div2.appendChild(ingImage)
        //div2.style.backgroundImage = "url('./images/banane.jpg')";
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


function creates() {
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