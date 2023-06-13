let iconos = []
let selecciones = []

const tablero = document.getElementById("tablero");

document.addEventListener("DOMContentLoaded", (e) => {
    generarTablero()
})


function generarTablero() {
    let longitud = escudos.length;
    let tarjetas = []

    for (let i = 0; i < longitud * 2; i++) {
        tarjetas.push(`
        <div class="area-tarjeta" ">
            <div class="tarjeta" id="${i}">
                <div class="cara trasera" id="trasera${i}">
                    ${escudos[0]}
                </div>
                <div class="cara superior">
                    <span class="material-symbols-outlined">
                sports_soccer
                </span>   
                </div>
            </div>
        </div>        
        `)

        // cada 2 iteraciones elimina el primer escudo del array
        if (i % 2 == 1) {
            escudos.splice(0, 1)
        }
    }

    // Desordena el Array targetas de manera aleatoria
    tarjetas.sort(() => Math.random() - 0.5)
    tablero.innerHTML = tarjetas.join(" ");


    const tarjetasSeleccionadas = document.querySelectorAll('.tarjeta');
    tarjetasSeleccionadas.forEach((tar) => {
        tar.addEventListener("click", () => {
            console.log(tar.id);
            seleccionarTarjeta(tar.id);
        });
    })
}



function seleccionarTarjeta(id) {

    let tarjetaSeleccionada = document.getElementById(id);
    console.log(tarjetaSeleccionada)
    if (tarjetaSeleccionada.style.transform != "rotateY(180deg)") {
        tarjetaSeleccionada.style.transform = "rotateY(180deg)"
        selecciones.push(id)

    }
    if (selecciones.length == 2) {
        deseleccionar(selecciones)
        selecciones = []
    }
}

function deseleccionar(selecciones) {
    setTimeout(() => {
        let trasera1 = document.getElementById(selecciones[0])
        let trasera2 = document.getElementById(selecciones[1])

        console.log(trasera1.innerHTML);
        console.log(trasera2.innerHTML);

        const imgElement = trasera1.querySelector('img');
        const rutaImagen = imgElement.getAttribute('src');
        console.log(rutaImagen);

        const imgElement2 = trasera2.querySelector('img');
        const rutaImagen2 = imgElement2.getAttribute('src');
        console.log(rutaImagen2);


        if (rutaImagen != rutaImagen2) {
            let tarjeta1 = document.getElementById(selecciones[0])
            let tarjeta2 = document.getElementById(selecciones[1])
            tarjeta1.style.transform = "rotateY(0deg)"
            tarjeta2.style.transform = "rotateY(0deg)"
        } else {
            alert("acerto");
            trasera1.style.backgroundColor  = "red"
            trasera2.style.backgroundColor  = "red"
        }
    }, 1000);
}
