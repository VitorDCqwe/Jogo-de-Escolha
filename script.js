function escolha(opcao) {
    let titulo = document.getElementById("title");
    let imagem = document.getElementById("scene-img");
    let historia = document.getElementById("story");
    let botoes = document.querySelectorAll(".choice");
    if (opcao === 'equipar') {
        titulo.innerText = "Uma Descoberta nem tão boa...";
        imagem.src = "Cena2.1.png";
        historia.innerText = "Você procura algumas armas e acha uma pistola de plasma, mas acaba achando um robô também. O que você faz?";
        botoes[0].innerText = "Você tenta enfrentar o robô."
        botoes[0].setAttribute("onclick", "escolha('enfrentar')");
        botoes[1].innerText = "Você foge de fininho."
        botoes[1].setAttribute("onclick", "escolha('fugir')");
    }
}