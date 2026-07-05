const atual = new Date();
let am;

function atualizarRelogio() {
    const agora = new Date();
    const segundos = agora.getSeconds();
    const minutos = agora.getMinutes();
    const horas = agora.getHours();
    if(atual.getHours() < 12){
        am = "AM";
    }else{
        am = " "
    
    }
    if(agora.getHours()< 12 && agora.getHours() >= 5){
        document.getElementById("good").textContent = `Bom dia - ${horas}:${minutos}:${segundos} ${am}`;
    }else if(agora.getHours() >= 12 && agora.getHours() < 18){
        document.getElementById("good").textContent = `Boa tarde - ${horas}:${minutos}:${segundos} ${am}`;
    }else{
        document.getElementById("good").textContent = `Boa noite - ${horas}:${minutos}:${segundos} ${am}`;
    }  
  }
  setInterval(atualizarRelogio,1000);
  atualizarRelogio();

// abridor de link

function abrirlinks(){
    window.location.href='links.html';
}

function abrircontador(){
    window.location.href='contador.html';
}

function abriros(){
    window.location.href='os.html';
}
function abrirapps(){
    window.location.href='apps.html';
}
function abrirdiarios(){
    window.location.href='diarios.html';
}

function abrirdwl(){
    window.location.href='dwl.html';
}