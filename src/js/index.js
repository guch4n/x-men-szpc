//alert('olá'); // Serve para emitir um alerta POP UP na tela.
//console.log(document); // Na aba console do Dev Tools do navegador mostrará essa mensagem
const itemCiclope = document.getElementById('ciclope'); // Através do CONST é possivel declarar uma variavel a qual será constante, sendo impossivel reatribui-la, diferente do LET o qual é possivel altera-la durante o codigo
//console.log(itemCiclope);

//console.log(document.querySelectorAll('.personagem')); //console.log irá mostrar todos os "Query" que estão listados com o ID: Personagem

// OBJETIVO 1 - Quando apssar o mouse me cima do personagem devemos selecioná-lo
// passo 1 - pegar os personagens no JS pra poder verificar quando o usuário passar o mouse em cima de um deles

const personagens = document.querySelectorAll('.personagem'); // irá pegar todos os ID personagem e irá atribuir em uma variavel

// passo 2 - adicionar a classe "SELECIONADO" no personagem que o usuário passar o cursor do mouse
personagens.forEach(personagem => {
    personagem.addEventListener('mouseenter', () => {

        visualizacaoPorCel();

                // passo 3 - verificar se já existe um personagem selecionado, se sim, devemos remover a seleção dele

                removerSelecaoPersonagem(); // neste caso não precisa colocar o "." antes da classe selecionado, pois este metodo tambem é uma classe e reconhece

        personagem.classList.add('selecionado');

        // OBJETIVO 2 - Quando passar o mouse em cima do personagem na listagem, trocar a imagem, o nome e a descrição do personagem grande
        // passo 1 - pegar o elemento do personagem grande para adicionar as informações nele
        alterarImagemPersonagemSelecionado(personagem);

        // passo 3 - alterar o nome do personagem grande
        alterarNomePersonagemSelecionado(personagem);

        // passo 4 - alterar a descrição do personagem grande
        alterarDescricaoPersonagem(personagem);
    });
})
function alterarDescricaoPersonagem(personagem) {
    const descricaoPersonagem = document.getElementById('descricao-personagem');
    descricaoPersonagem.innerText = personagem.getAttribute('data-description');
}

function alterarNomePersonagemSelecionado(personagem) {
    const nomePersonagem = document.getElementById('nome-personagem');
    nomePersonagem.innerText = personagem.getAttribute('data-name');
}

function alterarImagemPersonagemSelecionado(personagem) {
    const imagemPersonagemGrande = document.querySelector('.personagem-grande');

    // passo 2 - alterar a imagem do personagem grande
    const idPersonagem = personagem.attributes.id.value; //serve para pegar os atributos (nome) do ID do personagem
    imagemPersonagemGrande.src = `./src/imagens/card-${idPersonagem}.png`; // a crase serve para poder adicionar uma variavel em um texto que seja uma string


}

function visualizacaoPorCel() {
    if (window.innerWidth < 450) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
}

function removerSelecaoPersonagem() {
    const personagemSelecionado = document.querySelector('.selecionado'); // aqui é criada uma variavel que vai procurar o elemento com a classe ".selecionado", por fim armazenando o seu valor em personagemSelecionado

    //console.log(personagemSelecionado);
    personagemSelecionado.classList.remove('selecionado');
}

