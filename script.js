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
    if(atual.getHours()< 12 && atual.getHours() >= 5){
        document.getElementById("good").textContent = `Bom dia - ${horas}:${minutos}:${segundos} ${am}`;
    }else if(atual.getHours() >= 12 && atual.getHours() <= 18){
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