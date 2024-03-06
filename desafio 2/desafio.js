function tocarumsom(idElementoAudio){
    document.querySelector(idElementoAudio).play();
}
const listadeteclas = document.querySelectorAll('.tecla');


for(let contador=0;listadeteclas.length > contador;contador++){

    const tecla = listadeteclas[contador];
    const instrumento = tecla.classList[1];
    const IdaAudio = `#som_${instrumento}`

    console.log(IdaAudio);

    tecla.onclick = function(){
        tocarumsom(IdaAudio);
    }
    console.log(IdaAudio)
  tecla.onkeydown = function(event){

    if(event.code == 'Enter' || event.code === 'Space' ){
      tecla.classList.add('ativa')
    }
   
   
   
  }
  tecla.onkeyup = function(){
    tecla.classList.remove('ativa');
  }
}




