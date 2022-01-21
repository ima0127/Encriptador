
/* Reglas de encriptación: 
"e" es convertido para "enter" 
"i" es convertido para "imes"
"a" es convertido para "ai"
"o" es convertido para "ober"
"u" es convertido para "ufat"
Solo letras minusculas
No se permite acentuación de palabras 
*/

/* Reglas de desencriptación: 
"enter" es convertido para "e" 
"imes" es convertido para "i"
"ai" es convertido para "a"
"ober" es convertido para "o"
"ufat" es convertido para "u"
Solo letras minusculas
No se permite acentuación de palabras   
*/




    let e = "enter";
    let i = "imes";
    let a = "ai";
    let o = "ober";
    let u = "ufat";

    let enter = "e";
    let imes = "i";
    let ai = "a";
    let ober = "o";
    let ufat = "u";

function encriptar(){
    

   
    let inputEntrada = document.getElementById("input-texto").value;
    inputEntrada = inputEntrada.toLowerCase()
    .replaceAll("e", "enter")
    .replaceAll("i", "imes")
    .replaceAll("o", "ober")
    .replaceAll("a", "ai")
    .replaceAll("u", "ufat");
    let msg = document.getElementById("msg");
    msg.value = inputEntrada;

    

}

function desencriptar(){
    

   
    let inputEntrada = document.getElementById("input-texto").value;
    inputEntrada = inputEntrada.toLowerCase()
    .replaceAll("enter", "e")
    .replaceAll("imes", "i")
    .replaceAll("ober", "o")
    .replaceAll("ai", "a")
    .replaceAll("ufat", "u");

    let msg = document.getElementById("msg");
    msg.value = inputEntrada;
}

document.getElementById("btn-clear").addEventListener("click", clear);
function clear() {
    let msg = document.getElementById("input-texto");
    msg.value = "";
}


function copy() {
    
    var copyText = document.getElementById("msg");
  
    
    copyText.select();
    copyText.setSelectionRange(0, 99999); 
    navigator.clipboard.writeText(copyText.value);
    alert("Copied the text: " + copyText.value);
  }