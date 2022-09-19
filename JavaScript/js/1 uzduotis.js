// var divas = document.getElementById("moku");
// divas.style.backgroundColor = "#00FF00";
// divas.style.width = "300px";
// divas.style.height = "300px";
// divas.style.margin = "0 auto";
// divas.style.marginTop = "30vh";
// divas.style.textAlign = "center"; 1 uzduotis
function addElement () {
    const divas = document.createElement("div");
    divas.id = 'moku';
    const tekstas = document.createTextNode("Valio pavyko");
    divas.appendChild(tekstas);
    const divas1 = document.getElementById("moku");
    document.body.insertBefore(divas, divas1);
    divas.style.width = "300px";
    divas.style.height = "300px";
    divas.style.margin = "0 auto";
}
function elementas(){
    const miktukas = document.createElement('button');
    miktukas.id = 'spaudaliukas';
}
addElement();
elementas();