/* ------ CALLBACK ------ */

let num1 = Number(prompt("Ingrese el primer numero"));
let num2 = Number(prompt("Ingrese el segundo numero"));
let total = 0;

function obtenerMultiplicacion(callback) {
    setTimeout(function() {
        total = num1 + num2
        callback(total)
    }, 3000);
}

obtenerMultiplicacion(function(callback) {
    console.log(`El resultado de la multiplicacion es: ${total}`);
});

/* ------ PROMISE ------ */

const pintadoPantalla = new Promise(function(resolve, reject) {
    // let pintado = false;
     let pintado = true;

    if(pintado) {
        resolve("Aparece el contenido");
    } else {
        reject("No aparece el contenido");
    }
});

pintadoPantalla.then(function(value) {
    console.log(`Mensaje: ${value}`)
});

pintadoPantalla.catch(function(e) {
    console.log(`Mensaje: ${e}`)
})

/* ------ CALLBACK HELL ------ */

// Por más que las llamadas asíncronas tengan el mismo tiempo, 
// al depender de otras, tienen que esperar que culmine la anterior para que puedan ejecutarse.

function usuario(callback) {
    setTimeout(() => {
        const usuario = ["Franco", "Renato", "Ricardo"];
        callback(usuario);
    }, 5000);
};

function numeroID(callback) {
    setTimeout(() => {
        const numeroID = [123, 456, 789];
        callback(numeroID)
    }, 1000);
};

function equipo(callback) {
    setTimeout(() => {
        const equipo = ["AL", "U", "SC"];
        callback(equipo)
    }, 1000);
};

function temporada(callback) {
    setTimeout(() => {
        const temporada = [1998, 1999, 2000]
        callback(temporada);
    }, 1000);
};

usuario(function(usuario) {
    console.log("Usuarios", usuario);
    numeroID(function(numeroID) {
        console.log("ID's", numeroID);
        equipo(function(equipo) {
            console.log("Equipos", equipo);
            temporada(function(temporada) {
                console.log("Temporadas", temporada);
            });
        });
    });
});



