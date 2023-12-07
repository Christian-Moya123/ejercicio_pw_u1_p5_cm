let suma = 0;

function generarNumeroAleatorio() {
    return Math.floor(Math.random() * 100);
}

function cambiarTexto(botonId) {
    const numeroAleatorio = generarNumeroAleatorio();
    suma += numeroAleatorio;

    document.getElementById(botonId).textContent = numeroAleatorio;
    document.getElementById('resultado').innerHTML = "Suma total: " +suma;
}
