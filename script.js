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
    else if (opcao === 'sobreviventes') {
        titulo.innerText = "Uma Esperança...?";
        imagem.src = "Cena2.1.2.png";
        historia.innerText = "Você sai do laboratório e vê o Sol depois de tanto tempo. Após algumas horas, você encontra um grupo de sobreviventes. O que você faz?";
        botoes[0].innerText = "Você se junta a eles."
        botoes[0].setAttribute("onclick", "escolha('juntar')");
        botoes[1].innerText = "Você segue sozinho."
        botoes[1].setAttribute("onclick", "escolha('sozinho')");
    }
    else if (opcao === 'enfrentar') {
        titulo.innerText = "Uma pessima escolha";
        imagem.src = "Cena2.1.1.png";
        historia.innerText = "'Por que eu fiz isso? Eu não sou mais forte que uma máquina.', essas são as últimas coisas que você pensa após ser espancado até a morte pelo robô que você tentou enfrentar. Sua visão começa a escurecer e você começa a perder os sentidos, você lembra de toda a sua vida e pensa, ' Até que  não foi tão ruim', então, você morre. Game Over.";
        botoes.forEach(botao => botao.computedStyleMap.display = "none");
    }
    else if (opcao === 'fugir') {
        titulo.innerText = "Uma fuga para um novo dia";
        imagem.src = "Cena2.2.1.png";
        historia.innerText = "Você sai do laboratório e vê a luz do Sol depois de tantos anos. Você encontra sobreviventes e se junta a eles, conseguindo sobreviver para vivenciar mais um dia. Final Feliz";
        botoes.forEach(botao => botao.computedStyleMap.display = "none");
    }
    else if (opcao === 'sozinho') {
        titulo.innerText = "Uma pessima escolha";
        imagem.src = "Cena2.2.2.png";
        historia.innerText = "Você está sozinho em um mundo dominado por robôs, o que você acha que consegue fazer? Você só consegue sobreviver por alguns dias antes de ficar sem suprimentos. Quando sai para tentar achar mais, um robô te acha e você vê seu coração explodindo. Game Over";
        botoes.forEach(botao => botao.computedStyleMap.display = "none");
    }
    else if (opcao === 'juntar') {
        titulo.innerText = "A Escolha Certa";
        imagem.src = "Cena2.2.1.png";
        historia.innerText = "Você se junta a eles e consegue sobreviver para vivenciar mais um dia. Final Feliz";
        botoes.forEach(botao => botao.computedStyleMap.display = "none");
    }
}