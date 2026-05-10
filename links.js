const localtitulo = document.getElementById("titulolink");
const titulo = document.createElement("h1");
titulo.textContent = "Youtube";
localtitulo.appendChild(titulo);

function adicionar_link(){
    // Captura o que é digitado 
    let site = document.getElementById("nomelink").value;
    let url = document.getElementById("urlink").value;
    let video = document.getElementById("video").value;

    //define titulo como let site e o conteúdo (paragrafo) da url como let url
    const titulosite = document.createElement("h1");
    const paragrafourl = document.createElement("a");
    const videonome = document.createElement("h2")

    //altera o conteúdo
    titulosite.textContent = site;
    paragrafourl.href = url;
    paragrafourl.textContent = `Ir para ${video}`
    videonome.textContent = video;

    //Cria a DIV
    const divlink = document.createElement("div");
    divlink.className = "container";

    //adiciona cada um à div
    divlink.appendChild(titulosite);
    divlink.appendChild(document.createElement("hr"));
    divlink.appendChild(videonome);
    divlink.appendChild(paragrafourl);

    //coloca no corpo do texto.

    if(site == "" || url == "" || video == ""){
        window.alert("Tá vazio pai, como tu vai guardar?");
        return;
    }else{
        document.body.appendChild(divlink);
        document.getElementById("nomelink").value= ""; //pega o Input e zera
        document.getElementById("urlink").value= "";
        document.getElementById("video").value= "";
    }
}