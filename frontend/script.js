const url = "https://quem-escreveu.onrender.com/frases"

//-----------------ABRIR/FECHAR MODAL--------------------//

const modal = document.getElementById('modal');
function Abrir() {
    modal.style.display = "flex";
    modal.style.alignItems = "center";
}
function Fechar() {
    modal.style.display = "none";
}

//-----------------CADASTRAR UMA FRASE--------------------//

const form = document.getElementById('form');
form.addEventListener('submit', e => {
    e.preventDefault();

    const frase = {
        nome: form.nome.value,
        texto: form.texto.value
    }

    fetch(url + '/cadastrar', {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(frase)
    })
    .then(res => res.json())
    .then(data => {
        console.log("Salvou:", data);

        Fechar();
        form.reset();

        carregarFrases();
    })
    .catch(err => {
        console.error("Erro:", err);
    });
});

//-----------------CARREGAR/CRIAR CARD DA FRASE--------------------//
const container = document.getElementById('container');


function carregarFrases() {
    fetch(url + '/listar')
        .then(res => res.json())
        .then(data => {
            container.innerHTML = "";

            data.forEach(frase => {
                container.innerHTML += `
                    <div class="card" data-nome="${frase.nome}">
                        <p>${frase.texto}</p>
                    </div>
                `;
            });
        })
        .catch(err => console.error(err));
}
carregarFrases();