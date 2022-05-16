var botaoBase64 = document.getElementById("base64");
var botaoCifraC = document.getElementById("cifraC");
var chaveCifraDiv = document.getElementById("chaveCifraDiv");
var textoToEncode = document.getElementById("toEncode");
var textoToDecode = document.getElementById("toDecode");
var chaveCifra = parseInt(document.getElementById("chaveCifra").value);
var array = []

botaoBase64.addEventListener("click", function() {
    if (botaoBase64.checked) {
        var textoOutraOp = document.getElementById("cifraCtexto");
        var texto = document.getElementById("base64texto");
        texto.style.color = "red";
        textoOutraOp.style.color = "";
        chaveCifraDiv.style.display = "none";
    }
});

botaoCifraC.addEventListener("click", function() {
    if (botaoCifraC.checked) {
        var textoOutraOp = document.getElementById("base64texto");
        var texto = document.getElementById("cifraCtexto");
        texto.style.color = "red";
        textoOutraOp.style.color = "";
        chaveCifraDiv.style.display = "block";
    }
});

function encode() {
    if (botaoBase64.checked) {
        var encodedText = btoa(textoToEncode.value);
        textoToDecode.value = encodedText;
    } else if (botaoCifraC.checked) {
        var encodedText = ''
        chaveCifra = parseInt(document.getElementById("chaveCifra").value);
        for (i = 0; i < textoToEncode.value.length; i++) {
            array[i] = textoToEncode.value.charAt(i)
            array[i] = array[i].charCodeAt(0);
            array[i] += chaveCifra
            encodedText += String.fromCharCode(array[i])
        }
        textoToDecode.value = encodedText
    }
}

function decode() {
    if (botaoBase64.checked) {
        var decodedText = atob(textoToDecode.value);
        textoToEncode.value = decodedText;
    } else if (botaoCifraC) {
        var decodedText = ''
        chaveCifra = parseInt(document.getElementById("chaveCifra").value);
        for (i = 0; i < textoToDecode.value.length; i++) {
            array[i] = textoToDecode.value.charAt(i)
            array[i] = array[i].charCodeAt(0);
            array[i] -= chaveCifra
            decodedText += String.fromCharCode(array[i])
        }
        textoToEncode.value = decodedText
    }

}