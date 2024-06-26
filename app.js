
let numeroSecreto = 0;
let numeroDeIntentos = 0;
let listaSecreta = [];
let numeroMaximo = 10;

function asignarTexto(elemento, texto) {
    let titulo = document.querySelector(elemento);
    titulo.innerHTML = texto;
    return;
}

function obtenerNumeroSecreto() {

    let obtenerSecreto = parseInt(Math.random() * numeroMaximo + 1);
    if (listaSecreta.length == numeroMaximo) {
        asignarTexto('p', 'ya se sortearon todos los numeros');

    } else {
        if (listaSecreta.includes(obtenerSecreto)) {
            return obtenerNumeroSecreto();


        } else {
            listaSecreta.push(obtenerSecreto);
            return obtenerSecreto;
        }
    }
}

function vaciarCaja() {
    return document.getElementById('valorUsuario').value = '';

}

function condicionesInicales() {
    asignarTexto('p', `indica un numero del 1 al ${numeroMaximo}`);
    asignarTexto('h1', 'Juego del numero secreto');
    numeroSecreto = obtenerNumeroSecreto();
    numeroDeIntentos = 0;
}

function reiniciarJuego() {
    vaciarCaja();
    condicionesInicales();
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');
    console.log(listaSecreta);
}


function verificarIntento() {
    let numeroUsuario = parseInt(document.getElementById('valorUsuario').value);
    numeroDeIntentos++;
    if (numeroSecreto === numeroUsuario) {
        asignarTexto('p', `Acertaste el numero en ${numeroDeIntentos} ${(numeroDeIntentos === 1) ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');

    } else {
        if (numeroSecreto > numeroUsuario) {
            asignarTexto('p', 'El numero secreto es mayor')
        } else {
            asignarTexto('p', 'EL numero secreto es menor ')
        }
        vaciarCaja();
    }
    return;
}

condicionesInicales();

let numerosLista = [20, 30, 40, 50, 60, 80, 98, 54, 8, 7];
let numeroLista2 = [1, 2, 3, 4, 5, 6, 8, 2, 5, 4];
let suma = [];
let contador = 0;
function medidor() {
    if (numerosLista.length > contador) {
        suma.push(numerosLista[contador] + numeroLista2[contador]);
        contador++;
        return medidor();

    } else {
        return suma;
    }
}
medidor();
console.log(suma)
