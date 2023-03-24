
let PrecioCarroGuardado=localStorage.getItem("precioCar");
let PrecioCamionetaGuardado=localStorage.getItem("precioCam");

function asignarDireccion(){
    if(PrecioCarroGuardado=="Auto - $100" || PrecioCamionetaGuardado=="Camioneta - $130"){
        document.getElementById("flechaRegresar").href="/detallesPaqueteES.html";
    } else if(PrecioCarroGuardado=="Auto - $150" || PrecioCamionetaGuardado=="Camioneta - $180"){
        document.getElementById("flechaRegresar").href="/detallesPaqueteES2.html";
    } else if(PrecioCarroGuardado=="Auto - $200" || PrecioCamionetaGuardado=="Camioneta - $230"){
        document.getElementById("flechaRegresar").href="/detallesPaqueteES3.html";
    } else if(PrecioCarroGuardado=="Auto - $400" || PrecioCamionetaGuardado=="Camioneta - $450"){
        document.getElementById("flechaRegresar").href="/detallesPaqueteES4.html";
    } else if(PrecioCarroGuardado=="Car - $100" || PrecioCamionetaGuardado=="Pickup - $130"){
        document.getElementById("flechaRegresar").href="/detallesPaqueteEN.html";
    } else if(PrecioCarroGuardado=="Car - $150" || PrecioCamionetaGuardado=="Pickup - $180"){
        document.getElementById("flechaRegresar").href="/detallesPaqueteEN2.html";
    } else if(PrecioCarroGuardado=="Car - $200" || PrecioCamionetaGuardado=="Pickup - $230"){
        document.getElementById("flechaRegresar").href="/detallesPaqueteEN3.html";
    } else if(PrecioCarroGuardado=="Car - $400" || PrecioCamionetaGuardado=="Pickup - $450"){
        document.getElementById("flechaRegresar").href="/detallesPaqueteEN4.html";
    } else {
        document.getElementById("flechaRegresar").href="/seleccionDePagoES.html";
    }
};


