// document.getElementById("precioAPagar").innerHTML=localStorage.getItem("precioCar");


console.log(localStorage.getItem("precioCar"));
console.log(localStorage.getItem("precioCam"));

if(localStorage.getItem("precioCar")==null){
    document.getElementById("precioAPagar").innerHTML=localStorage.getItem("precioCam");
}else if(localStorage.getItem("precioCam")==null){
    document.getElementById("precioAPagar").innerHTML=localStorage.getItem("precioCar");
} else {
    document.getElementById("precioAPagar").innerHTML="$ $ $"
}


