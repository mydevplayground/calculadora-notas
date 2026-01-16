const lista = document.getElementById('lista');
const medias_elemento = document.getElementById('media');
const status_elemento = document.getElementById('status');

let notas = [];

function adicionarNota(){
    const elemento = document.getElementById('nota');
    const nota = Number(elemento.value);

    if (!Number.isFinite(nota)) throw new Error('Apenas números são aceitos!');

    notas.push(nota);
    atualizarLista(nota);
    elemento.value = '';
}

function atualizarLista(nota) {
    let item = document.createElement('li');
    item.innerText = nota;
    lista.appendChild(item);
}

function calcularMedia(){
    if (!notas.length) return alert('Sem notas para calcular!');

    const media = notas.reduce((acc, n) => acc + n, 0) / notas.length;

    exibirResultado(media);
}

function exibirResultado(media){
    medias_elemento.innerText = media.toFixed(2);
    let status = '';

    if(media >=7){
        status = 'Aprovado';
    } else if (media >=4) {
        status = 'Recuperação'
    } else {
        status = 'Exame Final'
    }

    status_elemento.innerText = status;
}


function limparNotas(){
    notas = [];
    lista.innerHTML = ''
    medias_elemento.innerText = '';
    status_elemento.innerText = '';

}