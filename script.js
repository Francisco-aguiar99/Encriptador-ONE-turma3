const inputTexto = document.querySelector(".input-texto");
const mensagem = document.querySelector(".mensagem");
document.getElementById("div-aparece").style.display ='none';


// Entrada de dados
function btnEncriptar(){
    const textoEncriptado = encriptar(inputTexto.value)
    mensagem.value = textoEncriptado
    document.style.backgroundImage = "none"
    aparece()
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
    const textoDesencriptar = desencriptar(inputTexto.value);
    mensagem.value = textoEncriptado;
    /*mensagem.style.backgroundImage= 'none';
    aparece(); */
    
}

function btnDesencriptar(stringDesencriptar){
    let matrizCodigo = [["e","enter"], ["i", "imes"],["a", "ai"], ["o", "ober"],["u", "uft"]];
    stringDesencriptar = stringDesencriptar.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringDesencriptar.includes(matrizCodigo[i][1])){
            stringDesencriptar = stringDesencriptar.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])

        }
    }
    return stringDesencriptar;
}

//botão copiar

function copiar(){
    const msg = document.querySelector(".mensagem");
    msg.ariaSelected();
    navigator.clipboard.writeText(msg.value);
    msg.value = "";
}

function aparece(){
    document.getElementById("div-aparece").style.display = 'block';
}
