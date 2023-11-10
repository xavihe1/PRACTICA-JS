const iteracionsMax = 10;
let numSecreto = generateSecretNum();
let iteracions = 1;

function generateSecretNum() {
    let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    let secretNum = '';

    for (let i = 0; i < 5; i++) {
        let randomNum = Math.floor(Math.random() * nums.length);
        secretNum += nums.splice(randomNum, 1)[0];
    }
    return secretNum;
}

const cartaElements = document.querySelectorAll('.carta');

if (numSecreto.length === 5 && cartaElements.length >= 5) {
    for (let i = 0; i < 5; i++) {
        cartaElements[i].textContent = numSecreto[i];
    }
}

function intentosRestantes() {
    const intentosRestantesElement = document.getElementById('intentosRestantes');
    const remainingAttempts = iteracionsMax - iteracions;
    intentosRestantesElement.textContent = remainingAttempts;
}

function comprobarNum() {
    const inputElement = document.getElementById('01234');
    const inputValue = inputElement.value;

    if (inputValue.length === 5) {
        if (inputValue === numSecreto) {
            document.getElementById('informacion').innerHTML = '¡Has adivinado el número!';
        } else {
            document.getElementById('informacion').innerHTML = 'Incorrecto, sigue intentando.';
        }
    } else {
        document.getElementById('informacion').innerHTML = 'Ingrese un número de 5 dígitos';
    }

    iteracions++
    intentosRestantes();
//Generem un numero aleatori de 5 digits
function generarNumAleatori() {
    let numeroAleatori = "";
    for (let i = 0; i < 5; i++) {
        numeroAleatori += Math.floor(Math.random() * 10);
    }
    return numeroAleatori;
}

//Iniciem les variables 
let numeroAleatori = generarNumAleatori();
let intentosRestantes = 5;

//Comprovem el numero que ha posat l'usuari
function comprovarNum() {
    const inputElement = document.getElementById("01234");
    const numeroUsuari = inputElement.value;

    if (numeroUsuari.length !== 5 || isNaN(numeroUsuari)) {
        alert("Por favor, ingresa un número de 5 dígitos.");
        return;
    }


    compararNumeros(numeroUsuari);

    //Reduim el nombre d'intents en 1 per cada cop que l'usuari ingresa un numero
    intentosRestantes--;


    document.getElementById("intentosRestantes").innerText = intentosRestantes;


    if (intentosRestantes === 0) {
        alert("¡Has agotado tus intentos! El número secreto era " + numeroAleatori + ".");
        reiniciarJuego();
    }
}

//Comparem els numeros i actualitzem el resultat
function compararNumeros(numeroUsuari) {
    const resultadoElement = document.getElementById("resultado");

    const filaResultado = document.createElement("div");
    filaResultado.className = "result";

    for (let i = 0; i < 5; i++) {
        const resultCube = document.createElement("div");
        resultCube.className = "result-cube";

        if (numeroUsuari[i] === numeroAleatori[i]) {
            resultCube.style.backgroundColor = "green";
        } else if (numeroAleatori.includes(numeroUsuari[i])) {
            resultCube.style.backgroundColor = "yellow";
        } else {
            resultCube.style.backgroundColor = "gray";
        }

        filaResultado.appendChild(resultCube);
    }

    resultadoElement.appendChild(filaResultado);

    //Verifiquem si s'ha encertat el numero aleatori
    if (numeroUsuari === numeroAleatori) {
        alert("¡Felicidades! Has adivinado el número secreto.");
        reiniciarJuego();
    }
}

//Reiniciem el joc
function reiniciarJuego() {
    numeroAleatori = generarNumAleatori();
    intentosRestantes = 5;
    document.getElementById("intentosRestantes").innerText = intentosRestantes;

    //Esborrem el resultat anterior
    const resultadoElement = document.getElementById("resultado");
    while (resultadoElement.firstChild) {
        resultadoElement.removeChild(resultadoElement.firstChild);
    }
}
}