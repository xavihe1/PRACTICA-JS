//Generem el numero de 5 digits
function generarNumeroAleatorio() {
    return Math.floor(10000 + Math.random() * 90000);
}

var numeroSecreto = generarNumeroAleatorio();
var intentosRestantes = 5;
console.log(numeroSecreto)

//Comprovem el nombre ingresat per l'usuari
function comprovarNum() {
    var inputNumero = document.getElementById('01234').value;
    
    if (inputNumero.length !== 5 || isNaN(inputNumero)) {
        alert('Por favor, introduce un número de 5 dígitos.');
        return;
    }

    //Restem intets
    intentosRestantes--;

    
    document.getElementById('intentosRestantes').textContent = intentosRestantes;

    
    if (intentosRestantes === 0) {
        alert('¡Te has quedado sin intentos, el numero secreto era: ' + numeroSecreto);
        location.reload(); 
        return;
    }

    
    var resultadoDiv = document.getElementById('resultado');
    var filaDiv = document.createElement('div');
    filaDiv.className = 'result';

    
    for (var i = 0; i < 5; i++) {
        var celdaDiv = document.createElement('div');
        celdaDiv.className = 'result-cube';

        
        if (inputNumero[i] === numeroSecreto[i]) {
            celdaDiv.style.backgroundColor = 'green';
        } else if (numeroSecreto.includes(inputNumero[i])) {
            celdaDiv.style.backgroundColor = 'yellow';
        } else {
            celdaDiv.style.backgroundColor = 'gray';
        }

        
        celdaDiv.textContent = inputNumero[i];
        filaDiv.appendChild(celdaDiv);
    }

    
    resultadoDiv.appendChild(filaDiv);
}


document.getElementById('intentosRestantes').textContent = intentosRestantes;