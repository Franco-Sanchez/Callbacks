window.onload = function() {
    localStorage.clear();
}

let contenidoGlobal = document.getElementById("contenido");
let modalBotonAgregar = document.getElementById("modalAgregar");

let inputNombre = document.getElementById("nombre");
let inputRaza = document.getElementById("raza");
let inputCorreo = document.getElementById("correo");
let inputTelefono = document.getElementById("telefono");
let inputPais = document.getElementById("pais");
let descripcion = document.getElementById("descripcion");  

let nuevoBotonAgregar = document.getElementById("nuevoBtnAgregar");


function botones() {

    let botonAgregar = document.getElementById("btnAgregar");
    let cerrarModalAgregar = document.getElementById("btnCerrar");

    botonAgregar.addEventListener("click", () => {
        
        botonAgregar.style = "display: none";
        modalBotonAgregar.style = "display: block";
        contenidoGlobal.style = "background-color: #b9b9b9";
    });

    cerrarModalAgregar.addEventListener("click", () => {

        botonAgregar.style = "display: block";
        modalBotonAgregar.style = "display: none";
        contenidoGlobal.style = "background-color: white";
        if(localStorage.key("mascota")) {
            botonAgregar.style = "display: none";
        };
    });

    function opcionesAgregarModal() {

        let aceptarAgregar = document.getElementById("aceptarModalAgregar");
        let cancelarAgregar = document.getElementById("cancelarModalAgregar");
    
        aceptarAgregar.addEventListener("click", (e) => {
    
            guardarMascota();
            document.getElementById("modalAgregarFormulario").reset();
            botonAgregar.style = "display: none";
            modalBotonAgregar.style = "display: none";
            contenidoGlobal.style = "background-color: white";
            nuevoBotonAgregar.style = "display: block";
            e.preventDefault()
    
        });
    
        cancelarAgregar.addEventListener("click", (e) => {
    
            botonAgregar.style = "display: block";
            modalBotonAgregar.style = "display: none";
            contenidoGlobal.style = "background-color: white";
            if(localStorage.key("mascota")) {
                botonAgregar.style = "display: none";
            };
            e.preventDefault();
        });
    };
    
    opcionesAgregarModal();

    function nuevoBtnAgregar() {

        nuevoBotonAgregar.addEventListener("click", () => {
            
            modalBotonAgregar.style = "display: block";
            botonAgregar.style = "display: none";
            contenidoGlobal.style = "background-color: #b9b9b9";
        });
    };

    nuevoBtnAgregar();

}

botones();

function guardarMascota() {

    let objAgregarMascota = {
        nombre: inputNombre.value,
        raza: inputRaza.value,
        correo: inputCorreo.value,
        telefono: inputTelefono.value,
        pais: inputPais.value,
        descripcion: descripcion.value   
    } 

    if(!localStorage.key("mascota")) {
        let arrMascotas = [];
        arrMascotas.push(objAgregarMascota);
        localStorage.setItem("mascota", JSON.stringify(arrMascotas));
    }else {
        let arrMascotas = JSON.parse(localStorage.getItem("mascota"))
        arrMascotas.push(objAgregarMascota);
        localStorage.setItem("mascota", JSON.stringify(arrMascotas));
    };
};