// function constructoraDePromesas(resolve, reject) {
//     setTimeout(() => bandera == 0 ? reject("la verdad es que está dando 0 y es un error") : resolve("está todo estupendo, es distinto de cero"), 3000)
// }

// function eventoFuturo() {
//     let promesaADevolver = new Promise(constructoraDePromesas)
//     return promesaADevolver
// }

// function mostrarResultado(resultado) {
//     alert(resultado)
// }

// function mostrarResultado2(resultado) {
//     alert("esto muestro si es negativo :" + resultado)
// }

// let bandera = 0
// eventoFuturo().then(mostrarResultado).catch(mostrarResultado2)


// const eventoFuturo = (res) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             res ? resolve("promesa resuelta") : reject("promesa rechazada")
//         }, 2000)
//     })

// }

// console.log(eventoFuturo(false))

// console.log("que onda perri 1")
// for (let letra of "hola") {
//     setTimeout(() => {
//         console.log(letra)
//     }, 3000);
// }
// console.log("que onda perri 2")
// for (let letra of "chau") {
//     setTimeout(() => {
//         console.log(letra)
//     }, 1000);
// }

// console.log("que onda perri 3")
// let contador = 0
// let referencia = setInterval(() => {
//     contador++
//     console.log("probando, iteración N: " + contador)
//     if (contador == 7) {
//         clearInterval(referencia)
//         console.log("proceso finalizado porque llegó al 7")
//     }
// }, 1500);

// function ejemploPromesasEventoFuturo(parametrin) {
//     let promesaGenerada = new Promise((funcionResolve, funcionReject) => {
//         if (parametrin) {
//             funcionResolve(parametrin)
//         } else {
//             funcionReject(parametrin)
//         }
//     })
//     return promesaGenerada
// }

// let ingresoUsuario = prompt("Ingrese Verdadero o Falso")
// if (ingresoUsuario == "Verdadero") {
//     ingresoUsuario = true
// }
// if (ingresoUsuario == "Falso") {
//     ingresoUsuario = false
// }
// console.log(ejemploPromesasEventoFuturo(ingresoUsuario))

// function ejemploPromesasEventoFuturo(parametrin) {
//     let promesaGenerada = new Promise((funcionResolve, funcionReject) => {
//         setTimeout(() => {
//             if (parametrin) {
//                 funcionResolve("parametrin")
//             } else {
//                 funcionReject(parametrin)
//             }
//         }, 3000);
//     })
//     return promesaGenerada
// }

// let ingresoUsuario = prompt("Ingrese Verdadero o Falso")
// if (ingresoUsuario == "Verdadero") {
//     ingresoUsuario = true
// }
// if (ingresoUsuario == "Falso") {
//     ingresoUsuario = false
// }

// let promesaAgarrada = ejemploPromesasEventoFuturo(ingresoUsuario)
// console.log(promesaAgarrada)
// setTimeout(() => {
//     console.log(promesaAgarrada)
// }, 4000);

// function ejemploPromesasEventoFuturo(parametrin) {
//     let promesaGenerada = new Promise((funcionResolve, funcionReject) => {
//         if (parametrin) {
//             funcionResolve("la promesa esta resuelta mi rey")
//         } else {
//             funcionReject("Es totalmente rechazada papu")
//         }
//     })
//     return promesaGenerada
// }

// let ingresoUsuario = prompt("Ingrese Verdadero o Falso")
// if (ingresoUsuario == "Verdadero") {
//     ingresoUsuario = true
// }
// if (ingresoUsuario == "Falso") {
//     ingresoUsuario = false
// }
// let descripcionError = ""
// let descripcionExito = ""
// let promesaAgarrada = ejemploPromesasEventoFuturo(ingresoUsuario)
// let resultadoFinal = "primero es esto"

// function copiarVariable(mensajeACopiar) {
//     resultadoFinal = mensajeACopiar
// }

// let variableAAfectar = 2

// function mostrarMensaje(mensaje) {
//     console.log(mensaje)
//     alert(mensaje)
// }

// promesaAgarrada.then(mostrarMensaje).catch(mostrarMensaje)

// function probarPromesas(parametroPrueba) {
//     return new Promise((resolve, reject) => {
//         if (parametroPrueba) {
//             resolve(1)
//         } else {
//             reject(0)
//         }
//     })
// }

// probarPromesas(false).then((result) => { console.log(result) }).catch((error) => { console.log(error) }).finally(() => { console.log("no importa cuando leas esto") })

//let arrayProductos = [{ id: 1, descripcion: "Juguera ATMA" }, { id: 2, descripcion: "Licuadora Philips" }, { id: 3, descripcion: "Microondas Samsung" }]
// let arrayProductos

// function recibirProductos() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (arrayProductos) {
//                 resolve(arrayProductos)
//             } else {
//                 reject("no hubo nada para recibir")
//             }
//         }, 5000)
//     })
// }

// function pintarProductos(arregloAPintar) {
//     for (let producto of arregloAPintar) {
//         let stringAPintar = "ID: " + producto.id + " - DESCRIPCIÓN: " + producto.descripcion
//         console.log(stringAPintar)
//     }
// }

//let productosRecibidos = []
// recibirProductos().then((resultado) => {
//         let arregloenJSON = JSON.stringify(resultado)
//         localStorage.setItem("arregloProductos", arregloenJSON)
//         console.log("arreglo almacenado en localStorage")
//         let arrayAPintarJSON = localStorage.getItem("arregloProductos")
//         let arrayAPintar = JSON.parse(arrayAPintarJSON)
//         pintarProductos(arrayAPintar)
//     }).catch((error) => { console.log(error) })
// setTimeout(() => {
//     let arrayAPintarJSON = localStorage.getItem("arregloProductos")
//     if (arrayAPintarJSON) {
//         let arrayAPintar = JSON.parse(arrayAPintarJSON)
//         pintarProductos(arrayAPintar)
//     } else {
//         console.log("no hay arreglo para pintar perro")
//     }
// }, 6000)


// async function escribirDatosDeServidor() {
//     let contenedorResultados = document.getElementById("contenedorResultados")
//     for (let i = 1; i < 4; i++) {
//         let promesaRespuestaServidor = await fetch(`https://jsonplaceholder.typicode.com/posts/${i}`)
//         let respuestaServidor = await promesaRespuestaServidor.json()
//         let itemNuevo = document.createElement("li")
//         itemNuevo.innerHTML = `
//         <h2>ID del contenido: ${respuestaServidor.id}</h2>
//         <h4>título del contenido: ${respuestaServidor.title}</h4>
//         <h6>Cuerpo del contenido: ${respuestaServidor.body}</h4>
//         `
//         contenedorResultados.append(itemNuevo)
//     }
// }

// escribirDatosDeServidor()

// async function modificarDatosServidorYMostrarResultado() {
//     let respuestaOriginalServidor = await fetch("https://jsonplaceholder.typicode.com/posts", {
//         method: "POST",
//         body: JSON.stringify({
//             title: "Titulo de prueba",
//             body: "Cuerpo de prueba",
//             userId: 70
//         }),
//         headers: { "Content-type": "application/json;charset=UTF-8" }
//     })
//     let traduccionRespuestaServidor = await respuestaOriginalServidor.json()
//     let itemNuevo = document.createElement("li")
//     itemNuevo.innerHTML = `
//     <h2>ID del contenido: ${traduccionRespuestaServidor.id}</h2>
//     <h4>título del contenido: ${traduccionRespuestaServidor.title}</h4>
//     <h6>Cuerpo del contenido: ${traduccionRespuestaServidor.body}</h4>
//     `
//     contenedorResultados.append(itemNuevo)
// }

// let contenedorResultados = document.getElementById("contenedorResultados")
// modificarDatosServidorYMostrarResultado()


async function escribirDatosDeServidor() {
    let contenedorResultados = document.getElementById("contenedorResultados")
    let promesaRespuestaServidor = await fetch(`json/datos.json`)
    let respuestaServidor = await promesaRespuestaServidor.json()
    for (let item of respuestaServidor) {
        let itemNuevo = document.createElement("li")
        itemNuevo.innerHTML = `
            <h2>Nombre: ${respuestaServidor.nombre}</h2>
            <h4>Apellido: ${respuestaServidor.apellido}</h4>
            <h6>Edad: ${respuestaServidor.edad}</h4>
            `
        contenedorResultados.append(itemNuevo)
    }
}

escribirDatosDeServidor()