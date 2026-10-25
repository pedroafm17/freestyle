function attdata(){
    const datatual = new Date();
    const dataalvo = new Date("2026-07-22");
    const local = document.getElementById("dias");    

    const diferenca = dataalvo - datatual;
    const diasfaltando = Math.floor(diferenca/(1000* 60 * 60 *24*-1));
    local.textContent = `${diasfaltando+1}`
    const faltando = document.getElementById("faltar")
    if(diasfaltando+1 == 1){
        faltando.textContent = "Falta"
    }else{
        faltando.textContent = "Faltam"
    }
}

function attdata2(){
    const datatual = new Date();
    const dataalvo = new Date("2026-12-24");
    const local = document.getElementById("dias2")

    const diferenca = dataalvo-datatual;
    const diasfaltando = Math.floor(diferenca/(1000*60*60*24))

    local.textContent = `${diasfaltando+1}`;
    const faltando = document.getElementById("faltar")
    if(diasfaltando+1 == 1){
        faltando.textContent = "Falta"
    }else{
        faltando.textContent = "Faltam"
    }
}

function attdata3(){
    const datatual = new Date();
    const dataalvo = new Date("2026-12-18");
    const local = document.getElementById("dias3")

    const diferenca = dataalvo-datatual;
    const diasfaltando = Math.floor(diferenca/(1000*60*60*24))
    local.textContent = `${diasfaltando+1}`;
    const faltando = document.getElementById("faltar")
    if(diasfaltando+1 == 1){
        faltando.textContent = "Falta"
    }else{
        faltando.textContent = "Faltam"
    }
}

function attdata4(){
    const datatual = new Date();
    const dataalvo = new Date("2026-11-08");
    const local = document.getElementById("dias4")
    const faltando = document.getElementById("faltar")

    const diferenca = dataalvo-datatual;
    const diasfaltando = Math.floor(diferenca/(1000*60*60*24))

    local.textContent = `${diasfaltando+1}`;

    if(diasfaltando+1 == 1){
        faltando.textContent = "Falta"
    }else{
        faltando.textContent = "Faltam"
    }
}

attdata();
attdata2();
attdata3();
attdata4();