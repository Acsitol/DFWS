function clickButton7(){
    const phoneme = document.getElementById("phonemeCV");
    document.getElementById("undoCV").value = document.getElementById("phonemelistCV").value;
    document.getElementById("phonemelistCV").value += phoneme.value + "\n";
    document.getElementById("phonemeCV").value = "";
}
function clickButton9(){
    document.getElementById("phonemelistCV").value = document.getElementById("undoCV").value;
}
function clickButton8(){
    document.getElementById("phonemelistCV").value = "";
    document.getElementById("undoCV").value = "";
}
function clickButton1(){
    const phoneme = document.getElementById("translate");
    document.getElementById("undotranslate").value = document.getElementById("translatelist").value;
    document.getElementById("translatelist").value += phoneme.value + "\n";
    document.getElementById("translate").value = "";
}
function clickButton3(){
    document.getElementById("translatelist").value = document.getElementById("undoCV").value;
}
function clickButton2(){
    document.getElementById("translatelist").value = "";
    document.getElementById("undotranslate").value = "";
}
function clickButton10(){
    const m = document.getElementById("numw").value;
    const gettext = document.getElementById("phonemelistCV").value;
    const a = Math.floor((Math.random() * Number(m)) + 0);
    const onen = gettext.split("\n");
    const one = onen[a];
    document.getElementById("wordlist").value = one;
    document.getElementById("numt").value = a;
}
function clickButton4(){
    const ten = document.getElementById("translatelist").value;
    const ofn = ten.split("\n");
    const a = document.getElementById("numt").value;
    const of = ofn[a];
    document.getElementById("answer").value =of;
}
