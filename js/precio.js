

document.getElementById("botonPagoCar").addEventListener("click", obtenerPrecioCar);
document.getElementById("botonPagoCam").addEventListener("click", obtenerPrecioCam);

function obtenerPrecioCar() {
    localStorage.setItem("precioCar",document.getElementById("precioPaqueteCar").innerHTML);
    localStorage.removeItem("precioCam");
    console.log(localStorage.getItem("precioCar"));
    console.log(localStorage.getItem("precioCam"));
}

function obtenerPrecioCam() {
    localStorage.setItem("precioCam",document.getElementById("precioPaqueteCam").innerHTML);
    localStorage.removeItem("precioCar");
    console.log(localStorage.getItem("precioCar"));
    console.log(localStorage.getItem("precioCam"));
}

