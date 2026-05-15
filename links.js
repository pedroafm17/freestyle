var links = [];

function adicionar_link(){

    if(localStorage.minhaurl){
        links = JSON.parse(localStorage.getItem('minhaurl')); //recupera chave antes digitada.
    }

    let nome = document.getElementById("video").value;
    let url = document.getElementById("urlink").value;

    if(document.getElementById("video").value == "" || document.getElementById("urlink").value == ""){
        window.alert("Preenche com os dois ai")
    }else{
    
    let url = document.getElementById("urlink").value;
    
    if(url.trim() !== ""){
    links.push({ //criando objetoos
        nome: nome,
        url: url
    });
    }
    localStorage.minhaurl = JSON.stringify(links);
    console.log(links);
    document.getElementById("video").value = "";
    document.getElementById("urlink").value = "";   
    mostrarlinks()
    }
}

function mostrarlinks(){
    let local_links = document.getElementById("meuslinks");
    
    local_links.innerHTML = "";

    for(var i in links){
        let video = document.createElement("a"); //to criando um /a
        video.className = "barraalinks";

        video.href = links[i].url; // .url pois agora criei objetos.
        video.innerText = links[i].nome;
        local_links.append(video);
        local_links.append(document.createElement("br"));
    }
}

if(localStorage.minhaurl){
    links = JSON.parse(localStorage.getItem("minhaurl"));
}
mostrarlinks(); //pra exibir sempre

function apagarstorage(){
    if(!document.getElementById("apagarlinks")){
        const divapagar = document.createElement("div");
        const botaoaceitar = document.createElement("button");
        const botaorecusar = document.createElement("button")
        divapagar.id = "apagarlinks";
        divapagar.className = "container";
        divapagar.innerHTML = "<h2>Deseja realmente apagar a lista?</h2>";
        botaoaceitar.className = "btn btn-primary";
        botaorecusar.className = "btn btn-primary";
        botaorecusar.addEventListener("click", () =>{
            location.reload("links");
        })
        botaoaceitar.addEventListener("click", ()=>{
            localStorage.clear(),
            location.reload();
        });
        botaorecusar.innerText = "Não, manter links";
        botaoaceitar.innerText = "Sim, apagar";
        divapagar.appendChild(botaoaceitar);
        divapagar.appendChild(document.createElement("br"));
        divapagar.appendChild(botaorecusar);
        localapagar.appendChild(divapagar);       
    } 
}
// localStorage.clear(), location.reload()