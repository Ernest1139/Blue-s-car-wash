
const FechaHoy = new Date();
const fechaUTC = FechaHoy.toUTCString();

document.getElementById("fechaHoy").innerHTML=fechaUTC;

if(localStorage.getItem("precioCar")==null){
    document.getElementById("servicioComprado").innerHTML=localStorage.getItem("precioCam");
}else if(localStorage.getItem("precioCam")==null){
    document.getElementById("servicioComprado").innerHTML=localStorage.getItem("precioCar");
} else {
    ddocument.getElementById("servicioComprado").innerHTML="$ $ $"
}


