const atual = new Date();

document.getElementById("good").textContent = `Hoje: ${atual.getDate()}/ ${atual.getMonth()+1}/ ${atual.getFullYear()}`;

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
    document.getElementById("good").textContent = `Hora certa ${horas}:${minutos}:${segundos} ${am}`;
  }
  
  setInterval(atualizarRelogio,1000);
  atualizarRelogio();

// abridor de link

function abrirlinks(){
    window.location.href='links.html';
}