const corda = document.querySelectorAll('input[type="button"]')
const forca = document.querySelector('input[type="tel"]');

for(let contador = 0;contador < corda.length ; contador++){
    let numeros = corda[contador]
    numeros.onclick = function(){
    forca.value += numeros.value
    }
    
    numeros.onkeydown = function(){
        numeros.classList.add("ativa")
    }
    numeros.onkeyup = function(){
        numeros.classList.remove("ativa")
    }
}