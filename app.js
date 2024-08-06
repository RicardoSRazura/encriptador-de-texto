const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".resultado");
const elementosOcultos = document.querySelectorAll(".mensaje.ocultar");
const btnCopiar = document.querySelector(".btn-copiar")

// La letra "e" es convertida para "enter"
// La letra "i" es convertida para "imes"
// La letra "a" es convertida para "ai"
// La letra "o" es convertida para "ober"
// La letra "u" es convertida para "ufat"

function btnEncriptar(){
    const textoEncriptado = encriptar(textArea.value);
    mensaje.value = textoEncriptado
    textArea.value = "";
    mensaje.style.backgroundImage = 'none';
    ocultarElementos();
    btnCopiar.style.display = "block";
}

function encriptar(stringEncriptado){
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncriptado = stringEncriptado.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringEncriptado.includes(matrizCodigo[i][0])){
            stringEncriptado = stringEncriptado.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }

    return stringEncriptado;
}

// funciones de desencriptar

function btnDesencriptar(){
    const textoEncriptado = desencriptar(textArea.value);
    mensaje.value = textoEncriptado
    textArea.value = "";
    
}

function desencriptar(stringDesencriptado){
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringDesencriptado = stringDesencriptado.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringDesencriptado.includes(matrizCodigo[i][1])){
            stringDesencriptado = stringDesencriptado.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }
    }

    return stringDesencriptado;
}

function ocultarElementos(){
    elementosOcultos.forEach(element => {
        element.style.display = "none";
    });
}

function copiarTexto(){
    if (mensaje.value) {
        navigator.clipboard.writeText(mensaje.value)
            .then(() => {
                console.log("Texto copiado al portapapeles");
            })
            .catch(err => {
                console.error('Error al copiar el texto: ', err);
            });
    } else {
        alert("No hay texto para copiar");
    }
}
