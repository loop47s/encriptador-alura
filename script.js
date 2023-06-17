const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");
const copia = document.querySelector(".copiar");


function btnEncriptar(){
    const textoEncriptado =encriptar(textArea.value);
    mensaje.value=textoEncriptado;
    
    textArea.value="";
    mensaje.style.backgroundImage="none";
}

function btnDesencriptar(){
    const textoEncriptado =desencriptar(textArea.value);
    mensaje.value=textoEncriptado;
    textArea.value="";

}

function btnCopiar(){
    const textoEncriptado =encriptar(textArea.value);
    mensaje.value=textoEncriptado;
    
    textArea.value="";
    mensaje.style.backgroundImage="none";
}

function encriptar (stringEncriptado){
    
    let matrizCodigo = [["e","enter"], ["i","imes"], ["a","ai"], ["o","ober"], ["u","ufat"]];
    stringEncriptado = stringEncriptado.toLowerCase()
    stringEncriptado = stringEncriptado.normalize("NFD").replace(/[\u0300-\u036f]/g, "")
    

    for(let i=0; i<matrizCodigo.length; i++){
        if(stringEncriptado.includes(matrizCodigo[i][0])) {
            stringEncriptado=stringEncriptado.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1]);

        }    
    }
    return stringEncriptado;
}  

function desencriptar (stringDesencriptado){
    let matrizCodigo = [["e","enter"], ["i","imes"], ["a","ai"], ["o","ober"], ["u","ufat"]];
    stringDesencriptado = stringDesencriptado.toLowerCase()
    stringDesencriptado = stringDesencriptado.normalize("NFD").replace(/[\u0300-\u036f]/g, "")
    

    for(let i=0; i<matrizCodigo.length; i++){
        if(stringDesencriptado.includes(matrizCodigo[i][1])) {
            stringDesencriptado=stringDesencriptado.replaceAll(matrizCodigo[i][1],matrizCodigo[i][0]);

        }    

    }
    return stringDesencriptado;
}  

function copiar(){
    mensaje.select();
    navigator.clipboard.writeText(mensaje.value)
    mensaje.value = "";
    alert("Texto Copiado")
}