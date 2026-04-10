// const url = 

const modal = document.getElementById('modal');
function Abrir(){
    modal.style.display = "block";
}
function Fechar(){
    modal.style.display = "none";
}

const form =document.getElementById('form');
form.addEventListener('submit', e => {
    e.preventDefault();
    const frase = {
        nome: form.nome.value,
        texto: form.texto.value
    }

    fetch(url + '/frases', {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(frase)
    })
})