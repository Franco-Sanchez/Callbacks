let contenidoGlobal = document.getElementById("contenido");
let modalBotonAgregar = document.getElementById("modalAgregar");

let inputNombre = document.getElementById("nombre");
let inputRaza = document.getElementById("raza");
let inputCorreo = document.getElementById("correo");
let inputTelefono = document.getElementById("telefono");
let inputPais = document.getElementById("pais");
let descrpcion = document.getElementById("descripcion")

function botonAgregar() {

    let botonAgregar = document.getElementById("btnAgregar");
    let cerrarModalAgregar = document.getElementById("btnCerrar")

    botonAgregar.addEventListener("click", () => {
        botonAgregar.style.display = "none";
        modalBotonAgregar.style.display = "block";
        contenidoGlobal.style ="background-color: #b9b9b9";
    });

    cerrarModalAgregar.addEventListener("click", () => {
        botonAgregar.style.display = "block";
        modalBotonAgregar.style.display = "none";
        contenidoGlobal.style = "background-color: white";
    });

    function opcionesAgregarModal() {

        let aceptar = document.getElementById("aceptarModalAgregar");
        let cancelar = document.getElementById("cancelarModalAgregar");

        aceptar.addEventListener("click", (e) => {
            
        });
    
        cancelar.addEventListener("click", () => {
            botonAgregar.style.display = "block";
            modalBotonAgregar.style.display = "none";
            contenidoGlobal.style = "background-color: white";
        })
    }
    
    opcionesAgregarModal();


}

botonAgregar();