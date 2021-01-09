function exo1() {
    alert(isEven(8));
}

function isEven(nb) {
    var result = false;
    if (nb % 2 === 0) {
        result = true;
    }
    return result;
}

function isEven2(nb) {

    return (nb % 2 === 0);
}

function firstWorld(value) {
    var result = value.split(' ');

    return result[0];

}

function exo2() {
    let p = prompt("Phrase ?");
    alert(firstWorld(p));
}

function firstWorld2(value) {


    return value.split(' ')[0];

}

function firstWordUpper(value) {
    var inter = value.split(' ');

    var result = inter[0].toUpperCase();
    for (var i = 1; i < inter.length; i++) {
        result += " " + inter[i].toLowerCase();
    }
    return result;

}

function exo3() {
    let p = prompt("Phrase ?");
    alert(firstWordUpper(p));
}

function firstleter(value) {
    var result = value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();

    return result;

}

function exo4() {
    let p = prompt("Phrase ?");
    alert(firstleter(p));
}

function camelCase(value) {
    var inter = value.split(' ');
    var result = inter[0].toLowerCase();
    for (var i = 1; i < inter.length; i++) {
        result += firstleter(inter[i]);
    }

    return result;

}

function exo5() {
    let p = prompt("Phrase ?");
    alert(camelCase(p));
}

function parcourirTableau() {
    var array = [1, 2, 3, 4, 5, 4, 3, 2, 1];

    for (let i = 0; i < array.length; i++) {
        alert(array[i]);
    }

}

function exo6() {
    parcourirTableau();
}

function force(value) {
    var n = 0;
    var regex = /\d/g;
    var regexLower = /[a-z]/;
    var regexUpper = /[A-Z]+/;
    var regexCharSpe = /[!#%_?*$\\]/;

    if (value.match(regex)) {
        n += 10;
    }
    if (value.match(regexLower)) {
        n += 26;
    }
    if (value.match(regexUpper)) {
        n += 26;
    }
    if (value.match(regexCharSpe)) {
        n += 8;
    }
    console.log(n);
    return Math.round(value.length * Math.log2(n));
}

function exo7() {
    var text = prompt("Quel est votre mot de passe");
    alert(force(text));
}

function tamagoGender(text) {


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

function exo8() {
    var text = prompt("Quel est le genre de votre tamagotchi ?");
    tamagoGender(text);
}

function strengthPassword() {
    var text = prompt("un mot de passe");

    if (exo9(text) > 104) {
        alert("bravo");
    } else {
        strengthPassword();
    }

}

function exo9() {
    strengthPassword()
}

/* function month(mois) {
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
} */

function month(monthNb) {
    var m;
    var array = ["Janvier", "Fevrier", "Mars", "Avril", "Mai", "Juin", "Juillet", "Aout", "Septembre", "Octobre", "novembre", "decembre"]
    if (monthNb > array.length || monthNb < 1) {
        console.log('erreur');
    } else {
        m = array[monthNb - 1]
    }
    return m;
}

function exo10() {
    var nb = prompt("le mois en nombre");
    month(nb);
}

function aujourdhui() {
    let date1 = new Date();

    let dateLocale = date1.toLocaleString('fr-FR', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        /*   hour: 'numeric',
          minute: 'numeric',
          second: 'numeric' */
    });

    alert(dateLocale)
}

function numberToLetters() {
    var number = prompt("entrez un nombre");
    var result = "";
    var nbinf = ["zero", "un", "deux", "trois", "quatre", "cinq", "six", "sept", "huit", "neuf", "dix", "onze", "douze", "treize", "quatorze", "quinze", "seize"]



    do {
        console.log(result);
        console.log(number + ' ' + String(number).length);
        if (number.length == 4) {
            var indexd = number.split('')[0];
            console.log(indexd);
            if (indexd == '1') {
                result += 'mille';
                number = number % 1000;
            } else {
                result += ' ' + nbinf[indexd] + ' mille';
                number = number % (100 * parseInt(indexd));
            }
            console.log(result);
        } else if (String(number).length == 3) {
            var indexd = String(number).split('')[0];
            console.log(indexd);
            if (indexd == '1') {
                result += 'cent';
                number = number % 100;
            } else {
                result += ' ' + nbinf[indexd] + ' cent';
                console.log((100 * parseInt(indexd)));
                number = number % (100 * parseInt(indexd));
            }
            console.log(result);
        } else if (number <= 10) {

            if (result == null) {
                result += nbinf[number];
            } else {
                if (number == 1) {
                    result += " et " + nbinf[number];
                } else {
                    result += "-" + nbinf[number];
                }


            }

            number -= number
        } else if (number <= 16) {
            console.log("test15")
            result += " " + nbinf[number];
            number -= number
        } else if (number <= 19) {
            result += " dix";
            number = number % 10;
        } else if (number < 30) {
            result += " vingt";
            number = number % 20;
        } else if (number < 40) {
            result += " trente";
            number = number % 30;
        } else if (number < 50) {
            result += " quarante";
            number = number % 40;
        } else if (number < 60) {
            result += " cinquante";
            number = number % 50;
        } else if (number < 80) {
            console.log("in 60");
            result += " soixante";
            number = number % 60;
            console.log(number);
        } else if (number < 100) {
            result += " quatre-vingts";
            number = number % 80;
        }
    } while (number > 0);


    alert(result);
}
//month(3);
//aujourdhui();
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