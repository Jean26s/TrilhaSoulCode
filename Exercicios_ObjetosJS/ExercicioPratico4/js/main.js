function myFunction(){
    const inpObj = document.getElementById("id1");
    if (!inpObj.checkValidity()){

        document.getElementById("demo").innerHTML = inpObj.validationMessage;

    }else{
        document.getElementById("demo").innerHTML = "Input OK!";
    }
}

function myFunction2(){
    let text;
    if (document.getElementById("id2").validity.rangeUnderflow){
        text ="Valor muito pequeno ";
    }else{
        text = "OK!"
    }
    document.getElementById("demo2").innerHTML = text;
    }

    function myFunction3(){
        window.history.back();
    }
    
    function myFunction4(){
        window.history.go(-2);
    }

    const x = document.getElementById("demo5");
    function getLocation(){
    if (navigator.geolocation){
        navigator.geolocation.getCurrentPosition(showPosition);

    }else{
        x.innerHTML ="Seu navegador nao possui suporte para Geolocalização ";
    }
    }
    
    function showPosition(position){
        x.innerHTML = "Latitude: " + position.coords.latitude +"<br> Longitude: " +position.coords.longitude;
    }


    