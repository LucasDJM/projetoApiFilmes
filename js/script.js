//DOM

const frmPesquisa = document.querySelector("form");
const apiKey = '137d4298';


//eventos

frmPesquisa.onsubmit = (ev) => {
    ev.preventDefault();
    
    const pesquisa = ev.target.pesquisa.value;

    if(pesquisa ==""){
        alert("preencha o campo!");
        return;
    }
    fetch(`http://www.omdbapi.com/?s=${pesquisa}&apikey=${apiKey}`)
    .then(result => result.json()).then(json => carregaLista(json));
}

const carregaLista = (json) => {
    const lista = document.querySelector("div.lista");
    lista.innerHTML = "";

    if (json.Response == 'False'){
        alert('Nenhum filme encontrado');
        return;
    }

    json.Search.forEach(element => {
        console.log(element);

       let item = document.createElement("div");
        item.classList.add("item");

        item.innerHTML = `<img src="${element.Poster}"/><h2>${element.Title}</h2> `

        lista.appendChild(item);
    })
}