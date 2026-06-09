function attdata(){
    const datatual = new Date();
    const dataalvo = new Date("2026-07-22");
    const local = document.getElementById("dias");

    const diferenca = dataalvo - datatual;
    const diasfaltando = Math.floor(diferenca/(1000* 60 * 60 *24));
    local.textContent = `${diasfaltando+1}`
}

function attdata2(){
    const datatual = new Date();
    const dataalvo = new Date("2026-12-24");
    const local = document.getElementById("dias2")

    const diferenca = dataalvo-datatual;
    const diasfaltando = Math.floor(diferenca/(1000*60*60*24))

    local.textContent = `${diasfaltando+1}`;
}

function attdata3(){
    const datatual = new Date();
    const dataalvo = new Date("2026-12-18");
    const local = document.getElementById("dias3")

    const diferenca = dataalvo-datatual;
    const diasfaltando = Math.floor(diferenca/(1000*60*60*24))

    local.textContent = `${diasfaltando+1}`;
}

attdata();
attdata2();
attdata3();