function tocaSom (seleAudio) {
    const select = document.querySelector(seleAudio);

    if(select!=null&&select.localName==='audio'){
        select.play();       
    } else {
        alert('Não é um elemento válido');
    }
}
//para dar play no elemento audio relativo a tecla pressionada
const listaDeTeclas = document.querySelectorAll('.tecla');

//para gerar uma lista com todas as teclas
for (let contador = 0; contador < listaDeTeclas.length; contador++) {

    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`; //template string

    tecla.onclick = function () {
        tocaSom(idAudio);
    }
//e = evento
    tecla.onkeydown = function (e){
        if(e.code === 'Enter'||e.code === 'Space'){
            tecla.classList.add('ativa');
        }
    }

    tecla.onkeyup = function (e){
        if(e.code === 'Enter' || e.code === 'Space'){
            tecla.classList.remove('ativa');
        }
    }
}
