let juego = ["piedra", "papel", "tijera"]
let img_juego = ["./img/piedra.png", "./img/papel.png", "./img/tijera.png"]
let opciones = [
    { opcion1: "piedra", opcion2: "papel", mensaje: "Perdiste" },
    { opcion1: "piedra", opcion2: "tijera", mensaje: "Ganaste" },
    { opcion1: "piedra", opcion2: "piedra", mensaje: "Empate" },
    { opcion1: "tijera", opcion2: "piedra", mensaje: "Perdiste" },
    { opcion1: "tijera", opcion2: "tijera", mensaje: "Empate" },
    { opcion1: "tijera", opcion2: "papel", mensaje: "Ganaste" },
    { opcion1: "papel", opcion2: "piedra", mensaje: "Ganaste" },
    { opcion1: "papel", opcion2: "papel", mensaje: "Empate" },
    { opcion1: "papel", opcion2: "tijera", mensaje: "Perdiste" },
]

let form = document.querySelector(".opciones")
let reset = document.querySelector(".btn")

function numeroAleatorio(min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min) + min);
}
let ganadas = 0, perdidas = 0

form.addEventListener("click", e => {
    let opci = e.target.classList[1]
    let img = e.target.src
    console.log(img)
    console.log(opci)
    let opcion = numeroAleatorio(0, 3)
    if ((opci && img) !== undefined) {
        document.querySelector(".jugador").src = img
        document.querySelector(".maquina").src = img_juego[opcion]
        opciones.forEach(opc => {
            if (opci == opc.opcion1 && juego[opcion] == opc.opcion2) {
                // alert()
                if (opc.mensaje == "Ganaste") {
                    ganadas++;
                    document.querySelector(".puntos_jugador").innerHTML = `Ganados: ${ganadas}`
                } if (opc.mensaje == "Perdiste") {
                    perdidas++;
                    document.querySelector(".puntos_perdidos").innerHTML = `Perdidas: ${perdidas}`
                }
                document.querySelector(".text-generado").innerHTML = opc.mensaje
            }
        })
    }
})

reset.addEventListener("click", () => {
    ganadas = 0;
    document.querySelector(".puntos_jugador").innerHTML = `Ganados: ${ganadas}`
    perdidas = 0;
    document.querySelector(".puntos_perdidos").innerHTML = `Perdidas: ${perdidas}`
})

