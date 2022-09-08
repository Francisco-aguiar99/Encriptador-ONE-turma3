const inputTexto = document.querySelector(".input-texto");
const mensagem = document.querySelector(".mensagem");



// Entrada de dados
function btnEncriptar(){
    const textoEncriptado = encriptar(inputTexto.value)
    mensagem.value = textoEncriptado;
}


function encriptar(stringEncriptada){
    let matrizCodigo = [["e","enter"], ["i", "imes"],["a", "ai"], ["o", "ober"],["u", "uft"]]
    stringEncriptada = stringEncriptada.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringEncriptada.includes(matrizCodigo[i][0])){
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])

        }
    }
    return stringEncriptada;
}


// saida de dados
function btnDesencriptar(){
    const textoEncriptado = desencriptar(inputTexto.value)
    mensagem.value = textoEncriptado;
}
//[["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]]

function desencriptar(stringEncriptada){
    let matrizCodigo = [["e","enter"], ["i", "imes"], ["u", "ft"], ["o", "ober"], ["a", "ai"]]
    stringEncriptada = stringEncriptada.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringEncriptada.includes(matrizCodigo[i][1])){
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])

        }
    }
    return stringEncriptada;
    
}

//botão copiar

function copiar() {

    var mensagem = document.querySelector(".mensagem");
    mensagem.select();

    navigator.clipboard.writeText(mensagem.value);
    mensagem.value = "";
}




/*
function copiar(){
    const msg = document.querySelector(".mensagem");
    msg.ariaSelected();
    navigator.clipboard.writeText(msg.value);
    msg.value = "";
}
*/