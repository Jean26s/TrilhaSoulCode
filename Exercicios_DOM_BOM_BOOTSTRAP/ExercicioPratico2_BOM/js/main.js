document.getElementById("t1").innerHTML = screen.width + " px";
document.getElementById("t2").innerHTML = screen.height + " px"

document.getElementById("p1").innerHTML = screen.colorDepth;

document.getElementById("c1").innerHTML = window.location.pathname;
document.getElementById("c2").innerHTML = window.location.port;


const x = document.getElementById("geo");
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



