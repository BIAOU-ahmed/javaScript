function exo1() {
    alert("hello");
}
function isEven(nb) {
    var result = false;
    if (nb % 2 === 0) {
        result = true;
    }
    return result;
}

function firstWorld(value) {
    var result = value.split(' ');

    return result[0];

}

function firstwordupper(value) {
    var inter = value.split(' ');

    var result = inter[0].toUpperCase();
    for (var i = 1; i < inter.length; i++) {
        result += " " + inter[i].toLowerCase();
    }
    return result;

}

function firstleter(value) {
    var result = value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();

    return result;

}

function camelcase(value) {
    var inter = value.split(' ');
    var result = inter[0];
    for (var i = 1; i < inter.length; i++) {
        result += inter[i].charAt(0).toUpperCase() + inter[i].slice(1)
    }

    return result;

}


function parcourirTableau() {
    var array = [1, 2, 3, 4, 5, 4, 3, 2, 1];

    for (var i = 0; i < array.length; i++) {
        let txt = alert(array[i]);
    }

}

function force(value) {
    var n = 0;
    var regex = "/\d/g";
    var reg = "/[a-z]/";

    if (regex.match(value)) {
        n += 10;
    }
    if (reg.match(value)) {
        n += 26;
    }
    return Math.round(value.length * Math.log(n) / Math.log(2));
}

function exo9(text) {

    var n = 0
    if (text.match(/[0-9]+/)) {
        n += 10
    }
    if (text.match(/[a-z]+/)) {
        n += 26
    }
    if (text.match(/[A-Z]+/)) {
        n += 26
    }
    var strength = Math.round(text.length * Math.log(n) / Math.log(2))
    return strength;
}
function exo6() {
    var text = prompt("Quel est le genre de votre tamagotchi ?");

    switch (text.toLowerCase()) {

        case "male":
            alert(text);
            break;
        case "mâle":
            alert(text);
            break;
        case "femelle":
            alert(text);
            break;
        default:
            exo6();
    }

}

function exo7() {
    var text = prompt("un mot de passe");

    if (exo9(text) > 104) {
        alert("bravo");
    } else {
        exo7();
    }

}

function month(mois) {
    switch (mois) {

        case 1:
            alert("janvier");
            break;
        case 2:
            alert("fevrier");
            break;
        case 3:
            alert("mars");
            break;
        case 4:
            alert("avril");
            break;
        case 5:
            alert("mai");
            break;
        case 6:
            alert("juin");
            break;
        case 7:
            alert("juillet");
            break;
        case 8:
            alert("aout");
            break;
        case 9:
            alert("septembre");
            break;
        case 10:
            alert("octobre");
            break;
        case 11:
            alert("novembre");
            break;
        case 12:
            alert("decembre");
            break;

        default:
            exo6();
    }
}

function aujourdhui(){
    let date1 = new Date();

    let dateLocale = date1.toLocaleString('fr-FR', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric'
    });

    alert(dateLocale)
}
function numberToLetters(){
    
}
month(3);
aujourdhui();
//console.log(force("123"));
/*
parcourirTableau();
console.log(firstwordupper("veuillez FaiRe une PhraSe"));
console.log(camelcase("hello world"));
console.log(firstleter("hello World"));
console.log(firstWorld("hello world"));
console.log(isEven(2));
console.log(isEven(5));
console.log(isEven(0));
*/