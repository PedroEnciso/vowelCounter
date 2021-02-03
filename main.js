let vowels = 0;
let a = 0;
let e = 0;
let i = 0;
let o = 0;
let u = 0;



function getText() {
    if (document.getElementById('input').value == "") {
        alert("Oops, you forgot to write something!")
        return;
    }
    let inputText = document.getElementById('input').value;
    document.getElementById('input').value = "";
    for (b = 0; b < inputText.length; b++) {
        char = inputText.charAt(b);
        isVowel(char);
    }

    if (vowels == 0) {
        alert("There aren't any vowels. What a lame entry.")
    }
    else if (vowels == 1) {
        vowel = whichVowel();
        if (vowel == 'u') { alert("I only found " + vowels + " vowel.\nIt was a " + vowel + "."); }
        else { alert("I only found " + vowels + " vowel.\nIt was an " + vowel + "."); }
    }
    else {
        alert("I found " + vowels + " vowels!\nA: " + a + "\nE: " + e + "\nI: " + i + "\nO: " + o + "\nU: " + u);
    }
    resetCounters();
}

function isVowel(char) {
    switch (char) {
        case 'a':
            a++;
            vowels++;
            break;
        case 'e':
            e++;
            vowels++;
            break;
        case 'i':
            i++;
            vowels++;
            break;
        case 'o':
            o++;
            vowels++;
            break;
        case 'u':
            u++;
            vowels++;
            break;
    }
}

function resetCounters() {
    vowels = 0;
    a = 0;
    e = 0;
    i = 0;
    o = 0;
    u = 0;
}

function whichVowel() {
    if (a > 0) {return 'a';}
    if (e > 0) {return 'e';}
    if (i > 0) {return 'i';}
    if (o > 0) {return 'o';}
    if (u > 0) {return 'u';}
}