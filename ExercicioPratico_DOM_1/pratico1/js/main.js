document.getElementById("cont1").innerHTML = "Conteudo 1 com InnerHTML";
document.getElementById("cont2").innerHTML = "Conteudo 2 com InnerHTML";
document.getElementById("cont3").innerHTML = "Conteudo 3 com InnerHTML";

const element = document.getElementsByTagName("p");
document.getElementById("ext1").innerHTML = "Extrações =  " + element[4].innerHTML + " ," + element[5].innerHTML + " , " + element[6].innerHTML + " , " + element[7].innerHTML + " , " + element[8].innerHTML;


function validateForm(){
    let x = document.forms["myForm"]["fname"].value;
    if (x == ""){
        alert("Campo vazio, preencha!");
        return false;
    }
}

function changeText(id){
    id.innerHTML = "Botao alterado";
}

function changeColor(){
    document.getElementById("name").style.color ="blue";
}