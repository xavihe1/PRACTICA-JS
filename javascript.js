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
}