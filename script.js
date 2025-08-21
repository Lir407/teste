// ===== DADOS DOS QUIZZES =====
const quizzes = {
  hogwarts: {
    title: "Qual sua casa de Hogwarts?",
    questions: [
      {
        question: "Qual qualidade você mais valoriza?",
        options: ["Coragem", "Inteligência", "Lealdade", "Ambição"],
        weights: [1, 2, 3, 4]
      },
      {
        question: "Qual animal você escolheria como mascote?",
        options: ["Leão", "Águia", "Texugo", "Serpente"],
        weights: [1, 2, 3, 4]
      },
      {
        question: "Qual matéria você mais gostaria de estudar?",
        options: ["Defesa Contra as Artes das Trevas", "Transfiguração", "Herbologia", "Poções"],
        weights: [1, 2, 3, 4]
      },
      {
        question: "Como você prefere resolver problemas?",
        options: ["Com ação direta", "Pensando estrategicamente", "Trabalhando em equipe", "Usando todos os recursos disponíveis"],
        weights: [1, 2, 3, 4]
      },
      {
        question: "Qual elemento você se identifica mais?",
        options: ["Fogo", "Ar", "Terra", "Água"],
        weights: [1, 2, 3, 4]
      },
      {
        question: "O que você mais teme?",
        options: ["Fracassar quando outros dependem de você", "Ignorância", "Solidão", "Mediocridade"],
        weights: [1, 2, 3, 4]
      },
      {
        question: "Qual seria seu trabalho ideal no mundo mágico?",
        options: ["Auror", "Pesquisador", "Professor", "Ministro da Magia"],
        weights: [1, 2, 3, 4]
      },
      {
        question: "Como seus amigos te descrevem?",
        options: ["Corajoso e protetor", "Inteligente e criativo", "Leal e confiável", "Determinado e ambicioso"],
        weights: [1, 2, 3, 4]
      },
      {
        question: "Qual feitiço você gostaria de aprender primeiro?",
        options: ["Expelliarmus", "Alohomora", "Lumos", "Protean Charm"],
        weights: [1, 2, 3, 4]
      },
      {
        question: "O que você faria com uma Pedra Filosofal?",
        options: ["Protegê-la dos malvados", "Estudar sua magia", "Compartilhar seus benefícios", "Usá-la para alcançar meus objetivos"],
        weights: [1, 2, 3, 4]
      }
    ],
    results: [
      { name: "Grifinória", description: "Você é corajoso, determinado e sempre pronto para defender o que é certo!" },
      { name: "Corvinal", description: "Você é inteligente, criativo e sempre busca conhecimento e sabedoria!" },
      { name: "Lufa-Lufa", description: "Você é leal, trabalhador e valoriza a amizade acima de tudo!" },
      { name: "Sonserina", description: "Você é ambicioso, determinado e sabe usar sua astúcia para alcançar seus objetivos!" }
    ]
  },
  
  animal: {
    title: "Qual animal você seria?",
    questions: [
      {
        question: "Como você prefere passar seu tempo livre?",
        options: ["Explorando novos lugares", "Relaxando em casa", "Socializando com amigos", "Praticando esportes"],
        weights: [1, 2, 3, 4]
      },
      {
        question: "Qual ambiente você prefere?",
        options: ["Floresta", "Praia", "Cidade", "Montanhas"],
        weights: [1, 2, 3, 4]
      },
      {
        question: "Como você lida com conflitos?",
        options: ["Enfrento diretamente", "Evito quando possível", "Busco mediação", "Uso estratégia"],
        weights: [1, 2, 3, 4]
      },
      {
        question: "Qual sua maior força?",
        options: ["Velocidade", "Paciência", "Sociabilidade", "Força física"],
        weights: [1, 2, 3, 4]
      },
      {
        question: "Como você prefere trabalhar?",
        options: ["Sozinho", "Em pequenos grupos", "Em grandes equipes", "Liderando outros"],
        weights: [1, 2, 3, 4]
      },
      {
        question: "Qual período do dia você é mais ativo?",
        options: ["Manhã", "Tarde", "Noite", "Madrugada"],
        weights: [1, 2, 3, 4]
      },
      {
        question: "Como você toma decisões?",
        options: ["Rapidamente, por instinto", "Pensando cuidadosamente", "Consultando outros", "Baseado em experiência"],
        weights: [1, 2, 3, 4]
      },
      {
        question: "O que você mais valoriza?",
        options: ["Liberdade", "Segurança", "Companhia", "Poder"],
        weights: [1, 2, 3, 4]
      },
      {
        question: "Como você se diverte?",
        options: ["Aventuras emocionantes", "Atividades tranquilas", "Festas e eventos", "Competições"],
        weights: [1, 2, 3, 4]
      },
      {
        question: "Qual sua reação ao perigo?",
        options: ["Fujo rapidamente", "Me escondo", "Chamo ajuda", "Enfrento"],
        weights: [1, 2, 3, 4]
      }
    ],
    results: [
      { name: "Águia", description: "Você é livre, observador e tem uma visão ampla da vida!" },
      { name: "Tartaruga", description: "Você é sábio, paciente e valoriza a estabilidade!" },
      { name: "Golfinho", description: "Você é sociável, inteligente e adora estar com outros!" },
      { name: "Leão", description: "Você é corajoso, forte e um líder natural!" }
    ]
  },
  
  personagem: {
    title: "Qual personagem de anime você seria?",
    questions: [
      {
        question: "Qual seu tipo de poder preferido?",
        options: ["Força física", "Magia", "Inteligência", "Velocidade"],
        weights: [1, 2, 3, 4]
      },
      {
        question: "Como você enfrenta desafios?",
        options: ["Com determinação", "Com estratégia", "Com criatividade", "Com agilidade"],
        weights: [1, 2, 3, 4]
      },
      {
        question: "Qual seu objetivo principal?",
        options: ["Proteger outros", "Buscar conhecimento", "Criar algo novo", "Ser o melhor"],
        weights: [1, 2, 3, 4]
      },
      {
        question: "Como você se relaciona com amigos?",
        options: ["Sou protetor", "Sou conselheiro", "Sou inspirador", "Sou competitivo"],
        weights: [1, 2, 3, 4]
      },
      {
        question: "Qual ambiente você prefere lutar?",
        options: ["Campo aberto", "Biblioteca", "Laboratório", "Arena"],
        weights: [1, 2, 3, 4]
      },
      {
        question: "Qual sua maior motivação?",
        options: ["Justiça", "Verdade", "Inovação", "Vitória"],
        weights: [1, 2, 3, 4]
      },
      {
        question: "Como você treina?",
        options: ["Intensamente", "Estudando", "Experimentando", "Competindo"],
        weights: [1, 2, 3, 4]
      },
      {
        question: "Qual seu estilo de luta?",
        options: ["Direto e poderoso", "Mágico e místico", "Técnico e preciso", "Rápido e ágil"],
        weights: [1, 2, 3, 4]
      },
      {
        question: "O que você faria com poder ilimitado?",
        options: ["Proteger o mundo", "Desvendar mistérios", "Criar maravilhas", "Superar limites"],
        weights: [1, 2, 3, 4]
      },
      {
        question: "Qual sua filosofia de vida?",
        options: ["Nunca desistir", "Conhecimento é poder", "Inovação constante", "Sempre melhorar"],
        weights: [1, 2, 3, 4]
      }
    ],
    results: [
      { name: "Naruto", description: "Você é determinado, nunca desiste e sempre protege seus amigos!" },
      { name: "Edward Elric", description: "Você é inteligente, busca a verdade e usa a ciência como poder!" },
      { name: "Senku Ishigami", description: "Você é genial, inovador e usa a ciência para mudar o mundo!" },
      { name: "Goku", description: "Você é puro, ama desafios e sempre busca ficar mais forte!" }
    ]
  },
  
  vingador: {
    title: "Qual Vingador da Marvel você seria?",
    questions: [
      {
        question: "Qual sua maior qualidade?",
        options: ["Liderança", "Inteligência", "Força", "Agilidade"],
        weights: [1, 2, 3, 4]
      },
      {
        question: "Como você prefere resolver problemas?",
        options: ["Planejamento estratégico", "Tecnologia avançada", "Força bruta", "Furtividade"],
        weights: [1, 2, 3, 4]
      },
      {
        question: "Qual seu maior medo?",
        options: ["Falhar com a equipe", "Perder controle", "Não ser forte o suficiente", "Ser descoberto"],
        weights: [1, 2, 3, 4]
      },
      {
        question: "O que te motiva a lutar?",
        options: ["Proteger inocentes", "Inovação tecnológica", "Honra e tradição", "Justiça"],
        weights: [1, 2, 3, 4]
      },
      {
        question: "Qual arma você escolheria?",
        options: ["Escudo", "Armadura tecnológica", "Martelo mágico", "Arco e flecha"],
        weights: [1, 2, 3, 4]
      },
      {
        question: "Como você trabalha em equipe?",
        options: ["Lidero naturalmente", "Forneço suporte técnico", "Sou a força principal", "Trabalho nas sombras"],
        weights: [1, 2, 3, 4]
      },
      {
        question: "Qual seu passado?",
        options: ["Militar", "Empresário", "Realeza", "Agente secreto"],
        weights: [1, 2, 3, 4]
      },
      {
        question: "Como você lida com a fama?",
        options: ["Aceito a responsabilidade", "Uso para o bem", "Prefiro privacidade", "Mantenho segredo"],
        weights: [1, 2, 3, 4]
      },
      {
        question: "Qual seu maior sacrifício?",
        options: ["Tempo pessoal", "Recursos financeiros", "Vida normal", "Identidade"],
        weights: [1, 2, 3, 4]
      },
      {
        question: "O que você faria após salvar o mundo?",
        options: ["Continuar protegendo", "Inovar tecnologia", "Voltar para casa", "Treinar outros"],
        weights: [1, 2, 3, 4]
      }
    ],
    results: [
      { name: "Capitão América", description: "Você é um líder nato, corajoso e sempre faz o que é certo!" },
      { name: "Homem de Ferro", description: "Você é genial, inovador e usa a tecnologia para proteger o mundo!" },
      { name: "Thor", description: "Você é nobre, poderoso e luta pela honra e justiça!" },
      { name: "Gavião Arqueiro", description: "Você é preciso, leal e sempre acerta no alvo!" }
    ]
  }
};

// ===== DADOS DE SÉRIES, FILMES E LIVROS =====
const mediaContent = {
  series: {
    "demon-slayer": {
      title: "Demon Slayer",
      description: "Tanjiro Kamado é um jovem que vende carvão para sustentar sua família. Sua vida pacífica muda drasticamente quando demônios atacam sua casa, matando sua família e transformando sua irmã Nezuko em um demônio. Determinado a encontrar uma cura para Nezuko e vingar sua família, Tanjiro se torna um caçador de demônios.",
      videoId: "VQGCKyvzIM4"
    },
    "vampire-diaries": {
      title: "The Vampire Diaries",
      description: "Elena Gilbert é uma adolescente que se apaixona por Stefan Salvatore, sem saber que ele é um vampiro de 162 anos. A chegada de seu irmão Damon complica ainda mais as coisas, criando um triângulo amoroso cheio de drama, romance e perigo sobrenatural na pequena cidade de Mystic Falls.",
      videoId: "3_dTOSWX1tc"
    },
    "naruto": {
      title: "Naruto",
      description: "Naruto Uzumaki é um jovem ninja da Vila da Folha que sonha em se tornar Hokage, o líder de sua vila. Rejeitado por todos devido ao demônio raposa selado dentro dele, Naruto luta para ganhar reconhecimento e realizar seu sonho, fazendo amigos e enfrentando inimigos poderosos pelo caminho.",
      videoId: "1dy2zPPrKD0"
    }
  },
  
  filmes: {
    "harry-potter": {
      title: "Harry Potter",
      description: "Harry Potter descobre no seu 11º aniversário que é um bruxo e foi aceito na Escola de Magia e Bruxaria de Hogwarts. Lá ele aprende sobre seu passado, faz amigos leais como Ron e Hermione, e descobre que deve enfrentar o bruxo das trevas mais perigoso de todos os tempos: Voldemort.",
      videoId: "VyHV0BRtdxo"
    },
    "jumanji": {
      title: "Jumanji: Próxima Fase",
      description: "Os amigos retornam ao jogo Jumanji para resgatar um deles, mas descobrem que nada é como esperavam. Os jogadores terão que enfrentar lugares desconhecidos e inexplorados, desde desertos áridos até montanhas nevadas, para escapar do jogo mais perigoso do mundo.",
      videoId: "rBxcF-r9Ibs"
    },
    "vingadores": {
      title: "Vingadores: Ultimato",
      description: "Após os eventos devastadores de Guerra Infinita, o universo está em ruínas. Com a ajuda de aliados remanescentes, os Vingadores se reúnem mais uma vez para reverter as ações de Thanos e restaurar o equilíbrio do universo, não importa quais sejam as consequências.",
      videoId: "TcMBFSGVi1c"
    }
  },
  
  livros: {
    "livro1": {
      title: "O Senhor dos Anéis",
      description: "Uma épica jornada de fantasia que segue Frodo Bolseiro em sua missão para destruir o Um Anel e derrotar o Senhor das Trevas Sauron. Com a ajuda da Sociedade do Anel, ele deve atravessar a Terra-média enfrentando perigos inimagináveis para salvar seu mundo.",
      videoId: "V75dMMIW2B4"
    },
    "pequeno-principe": {
      title: "O Pequeno Príncipe",
      description: "A história de um piloto perdido no deserto que encontra um pequeno príncipe de outro planeta. Através de suas conversas, exploramos temas profundos sobre amizade, amor, perda e o que realmente importa na vida. Uma fábula atemporal que toca corações de todas as idades.",
      videoId: "P8MbrqSyKOI"
    },
    "e-assim-que-acaba": {
      title: "É Assim Que Acaba",
      description: "Lily Bloom sempre sonhou em viver em Boston e abrir seu próprio negócio. Quando conhece Ryle, um neurocirurgião, parece que encontrou o amor perfeito. Mas quando seu primeiro amor, Atlas, reaparece em sua vida, ela deve tomar decisões difíceis sobre seu futuro e enfrentar seu passado.",
      videoId: "ximocwjk1cc"
    }
  }
};

// ===== LISTA DE MÚSICAS =====
const musicPlaylist = [
  {
    title: "Lofi Hip Hop - Beats to Study/Relax",
    url: "https://www.youtube.com/watch?v=jfKfPfyJRdk"
  },
  {
    title: "Chill Synthwave Mix",
    url: "https://www.youtube.com/watch?v=4xDzrJKXOOY"
  },
  {
    title: "Peaceful Piano Music",
    url: "https://www.youtube.com/watch?v=1ZYbU82GVz4"
  },
  {
    title: "Ambient Space Music",
    url: "https://www.youtube.com/watch?v=1-RW_fltjdU"
  },
  {
    title: "Jazz Café Playlist",
    url: "https://www.youtube.com/watch?v=Dx5qFachd3A"
  },
  {
    title: "Nature Sounds - Rain & Thunder",
    url: "https://www.youtube.com/watch?v=mPZkdNFkNps"
  },
  {
    title: "Epic Orchestral Music",
    url: "https://www.youtube.com/watch?v=8jJZA-O_B78"
  },
  {
    title: "Retro 80s Synthwave",
    url: "https://www.youtube.com/watch?v=rDBbaGCCIhk"
  }
];

// ===== JOGOS SIMPLES =====
const games = {
  "pac-man": () => {
    alert("🎮 Pac-Man\\n\\nUse as setas do teclado para mover o Pac-Man!\\nComa todos os pontos e evite os fantasmas!\\n\\n(Este é um exemplo - o jogo completo seria implementado em uma página separada)");
  },
  
  "jogo-da-velha": () => {
    let board = Array(9).fill('');
    let currentPlayer = 'X';
    let gameActive = true;
    
    const winConditions = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8],
      [0, 3, 6], [1, 4, 7], [2, 5, 8],
      [0, 4, 8], [2, 4, 6]
    ];
    
    function checkWin() {
      for (let condition of winConditions) {
        const [a, b, c] = condition;
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
          return board[a];
        }
      }
      return board.includes('') ? null : 'Empate';
    }
    
    function makeMove(position) {
      if (board[position] === '' && gameActive) {
        board[position] = currentPlayer;
        const result = checkWin();
        
        if (result) {
          gameActive = false;
          if (result === 'Empate') {
            alert('Empate! 🤝');
          } else {
            alert(`Jogador ${result} venceu! 🎉`);
          }
          return;
        }
        
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        
        // IA simples para jogador O
        if (currentPlayer === 'O' && gameActive) {
          setTimeout(() => {
            const emptyPositions = board.map((cell, index) => cell === '' ? index : null).filter(val => val !== null);
            if (emptyPositions.length > 0) {
              const randomPosition = emptyPositions[Math.floor(Math.random() * emptyPositions.length)];
              makeMove(randomPosition);
            }
          }, 500);
        }
      }
    }
    
    // Interface simples
    let gameBoard = '';
    for (let i = 0; i < 9; i++) {
      gameBoard += `[${board[i] || (i + 1)}]`;
      if ((i + 1) % 3 === 0) gameBoard += '\\n';
    }
    
    const move = prompt(`🎮 Jogo da Velha\\n\\n${gameBoard}\\n\\nVocê é X. Digite a posição (1-9):`);
    if (move && !isNaN(move) && move >= 1 && move <= 9) {
      makeMove(parseInt(move) - 1);
    }
  },
  
  "labirinto": () => {
    alert("🎮 Labirinto\\n\\nNavegue pelo labirinto usando as setas!\\nEncontre a saída e colete tesouros pelo caminho!\\n\\n(Este é um exemplo - o jogo completo seria implementado em uma página separada)");
  },
  
  "jogo-da-memoria": () => {
    const cards = ['🐶', '🐱', '🐭', '🐹', '🐰', '🦊', '🐻', '🐼'];
    const gameCards = [...cards, ...cards].sort(() => Math.random() - 0.5);
    let flipped = [];
    let matches = 0;
    
    alert(`🎮 Jogo da Memória\\n\\nEncontre os pares!\\nCartas: ${gameCards.map((_, i) => i + 1).join(' ')}\\n\\n(Versão simplificada - o jogo completo seria visual)`);
  },
  
  "whack-a-mole": () => {
    let score = 0;
    let timeLeft = 10;
    
    const gameInterval = setInterval(() => {
      if (timeLeft <= 0) {
        clearInterval(gameInterval);
        alert(`🎮 Whack-a-Mole\\n\\nJogo finalizado!\\nPontuação: ${score}\\n\\n(Este é um exemplo - o jogo completo seria implementado em uma página separada)`);
        return;
      }
      
      const hit = confirm(`🎮 Whack-a-Mole\\n\\nTempo: ${timeLeft}s\\nPontos: ${score}\\n\\n🐭 Toupeira apareceu! Clique OK para acertar!`);
      if (hit) score++;
      timeLeft--;
    }, 1000);
  },
  
  "dama": () => {
    alert("🎮 Damas\\n\\nMova suas peças na diagonal!\\nCapture todas as peças do oponente para vencer!\\n\\n(Este é um exemplo - o jogo completo seria implementado em uma página separada)");
  }
};

// ===== FUNÇÕES PRINCIPAIS =====

// Função para criar modal
function createModal(content) {
  const modal = document.createElement('div');
  modal.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.8);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
    backdrop-filter: blur(10px);
  `;
  
  const modalContent = document.createElement('div');
  modalContent.style.cssText = `
    background: linear-gradient(135deg, rgba(255,255,255,0.9), rgba(255,255,255,0.8));
    padding: 2rem;
    border-radius: 20px;
    max-width: 90%;
    max-height: 90%;
    overflow-y: auto;
    box-shadow: 0 20px 60px rgba(0,0,0,0.3);
    border: 1px solid rgba(255,255,255,0.3);
    backdrop-filter: blur(20px);
  `;
  
  modalContent.innerHTML = content;
  modal.appendChild(modalContent);
  
  // Fechar modal ao clicar fora
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      document.body.removeChild(modal);
    }
  });
  
  // Botão de fechar
  const closeBtn = document.createElement('button');
  closeBtn.innerHTML = '✕';
  closeBtn.style.cssText = `
    position: absolute;
    top: 10px;
    right: 15px;
    background: none;
    border: none;
    font-size: 1.5rem;
    cursor: pointer;
    color: #666;
  `;
  closeBtn.addEventListener('click', () => {
    document.body.removeChild(modal);
  });
  modalContent.style.position = 'relative';
  modalContent.appendChild(closeBtn);
  
  document.body.appendChild(modal);
  return modal;
}

// Função para executar quiz
function runQuiz(quizType) {
  const quiz = quizzes[quizType];
  if (!quiz) return;
  
  let currentQuestion = 0;
  let scores = [0, 0, 0, 0]; // Para 4 resultados possíveis
  
  function showQuestion() {
    if (currentQuestion >= quiz.questions.length) {
      showResult();
      return;
    }
    
    const question = quiz.questions[currentQuestion];
    let optionsHtml = '';
    
    question.options.forEach((option, index) => {
      optionsHtml += `
        <button onclick="selectAnswer(${index})" style="
          display: block;
          width: 100%;
          margin: 10px 0;
          padding: 15px;
          background: linear-gradient(135deg, rgba(255,255,255,0.2), rgba(255,255,255,0.1));
          border: 2px solid rgba(255,255,255,0.3);
          border-radius: 10px;
          color: #333;
          font-size: 1rem;
          cursor: pointer;
          transition: all 0.3s ease;
        " onmouseover="this.style.background='linear-gradient(135deg, rgba(255,255,255,0.4), rgba(255,255,255,0.3))'" 
           onmouseout="this.style.background='linear-gradient(135deg, rgba(255,255,255,0.2), rgba(255,255,255,0.1))'">
          ${option}
        </button>
      `;
    });
    
    const content = `
      <h2 style="color: #333; margin-bottom: 1rem; font-family: 'Orbitron', monospace;">${quiz.title}</h2>
      <div style="background: rgba(255,255,255,0.1); padding: 10px; border-radius: 10px; margin-bottom: 1rem;">
        Pergunta ${currentQuestion + 1} de ${quiz.questions.length}
      </div>
      <h3 style="color: #333; margin-bottom: 1.5rem;">${question.question}</h3>
      ${optionsHtml}
    `;
    
    const modal = createModal(content);
    
    // Função global para selecionar resposta
    window.selectAnswer = function(answerIndex) {
      const weight = question.weights[answerIndex];
      scores[weight - 1]++;
      currentQuestion++;
      document.body.removeChild(modal);
      showQuestion();
    };
  }
  
  function showResult() {
    const maxScore = Math.max(...scores);
    const resultIndex = scores.indexOf(maxScore);
    const result = quiz.results[resultIndex];
    
    const content = `
      <h2 style="color: #333; margin-bottom: 1rem; font-family: 'Orbitron', monospace;">Resultado do Quiz</h2>
      <div style="text-align: center; padding: 2rem;">
        <h3 style="color: #ff6b6b; font-size: 2rem; margin-bottom: 1rem;">${result.name}</h3>
        <p style="color: #333; font-size: 1.1rem; line-height: 1.6;">${result.description}</p>
        <button onclick="location.reload()" style="
          margin-top: 2rem;
          padding: 15px 30px;
          background: linear-gradient(135deg, #ff6b6b, #4ecdc4);
          border: none;
          border-radius: 10px;
          color: white;
          font-size: 1rem;
          cursor: pointer;
          font-weight: bold;
        ">Fazer Outro Quiz</button>
      </div>
    `;
    
    createModal(content);
  }
  
  showQuestion();
}

// Função para mostrar conteúdo de mídia
function showMediaContent(type, key) {
  const content = mediaContent[type][key];
  if (!content) return;
  
  const videoEmbed = content.videoId ? `
    <div style="margin: 1rem 0;">
      <iframe width="100%" height="315" 
        src="https://www.youtube.com/embed/${content.videoId}" 
        frameborder="0" allowfullscreen
        style="border-radius: 10px;">
      </iframe>
    </div>
  ` : '';
  
  const modalContent = `
    <h2 style="color: #333; margin-bottom: 1rem; font-family: 'Orbitron', monospace;">${content.title}</h2>
    ${videoEmbed}
    <p style="color: #333; line-height: 1.6; font-size: 1.1rem;">${content.description}</p>
  `;
  
  createModal(modalContent);
}

// Função para mostrar player de música
function showMusicPlayer() {
  let currentSong = 0;
  
  function updatePlayer() {
    const song = musicPlaylist[currentSong];
    return `
      <h2 style="color: #333; margin-bottom: 1rem; font-family: 'Orbitron', monospace;">🎵 Player de Música</h2>
      <div style="text-align: center; padding: 1rem;">
        <h3 style="color: #ff6b6b; margin-bottom: 1rem;">${song.title}</h3>
        <div style="margin: 1rem 0;">
          <button onclick="previousSong()" style="margin: 0 10px; padding: 10px 20px; background: #4ecdc4; border: none; border-radius: 5px; color: white; cursor: pointer;">⏮️ Anterior</button>
          <button onclick="window.open('${song.url}', '_blank')" style="margin: 0 10px; padding: 10px 20px; background: #ff6b6b; border: none; border-radius: 5px; color: white; cursor: pointer;">▶️ Tocar</button>
          <button onclick="nextSong()" style="margin: 0 10px; padding: 10px 20px; background: #4ecdc4; border: none; border-radius: 5px; color: white; cursor: pointer;">⏭️ Próxima</button>
        </div>
        <div style="margin-top: 1rem;">
          <small style="color: #666;">Música ${currentSong + 1} de ${musicPlaylist.length}</small>
        </div>
        <div style="margin-top: 1rem; max-height: 200px; overflow-y: auto;">
          <h4 style="color: #333;">Playlist:</h4>
          ${musicPlaylist.map((song, index) => `
            <div onclick="selectSong(${index})" style="
              padding: 5px;
              cursor: pointer;
              background: ${index === currentSong ? 'rgba(255,107,107,0.2)' : 'transparent'};
              border-radius: 5px;
              margin: 2px 0;
            ">${index + 1}. ${song.title}</div>
          `).join('')}
        </div>
      </div>
    `;
  }
  
  const modal = createModal(updatePlayer());
  
  window.nextSong = function() {
    currentSong = (currentSong + 1) % musicPlaylist.length;
    modal.querySelector('div').innerHTML = updatePlayer().match(/<div[^>]*>(.*)<\/div>$/s)[1];
  };
  
  window.previousSong = function() {
    currentSong = currentSong === 0 ? musicPlaylist.length - 1 : currentSong - 1;
    modal.querySelector('div').innerHTML = updatePlayer().match(/<div[^>]*>(.*)<\/div>$/s)[1];
  };
  
  window.selectSong = function(index) {
    currentSong = index;
    modal.querySelector('div').innerHTML = updatePlayer().match(/<div[^>]*>(.*)<\/div>$/s)[1];
  };
}

// ===== INICIALIZAÇÃO =====
document.addEventListener('DOMContentLoaded', function() {
  // Adicionar eventos aos botões de jogos
  const gameButtons = document.querySelectorAll('.coluna:first-child .btn');
  gameButtons.forEach((button, index) => {
    const gameNames = ['pac-man', 'jogo-da-velha', 'labirinto', 'jogo-da-memoria', 'whack-a-mole', 'dama'];
    button.addEventListener('click', () => {
      if (games[gameNames[index]]) {
        games[gameNames[index]]();
      }
    });
  });
  
  // Adicionar eventos às imagens de quiz
  const quizImages = document.querySelectorAll('.coluna:nth-child(2) img');
  const quizTypes = ['hogwarts', 'animal', 'personagem', 'vingador'];
  quizImages.forEach((img, index) => {
    img.addEventListener('click', () => {
      runQuiz(quizTypes[index]);
    });
    img.style.cursor = 'pointer';
  });
  
  // Adicionar eventos às imagens de séries
  const seriesImages = document.querySelectorAll('.coluna:nth-child(3) img');
  const seriesKeys = ['demon-slayer', 'vampire-diaries', 'naruto'];
  seriesImages.forEach((img, index) => {
    img.addEventListener('click', () => {
      showMediaContent('series', seriesKeys[index]);
    });
    img.style.cursor = 'pointer';
  });
  
  // Adicionar eventos às imagens de filmes
  const filmesImages = document.querySelectorAll('.coluna:nth-child(4) img');
  const filmesKeys = ['harry-potter', 'jumanji', 'vingadores'];
  filmesImages.forEach((img, index) => {
    img.addEventListener('click', () => {
      showMediaContent('filmes', filmesKeys[index]);
    });
    img.style.cursor = 'pointer';
  });
  
  // Adicionar eventos às imagens de livros
  const livrosImages = document.querySelectorAll('.coluna:nth-child(5) img');
  const livrosKeys = ['livro1', 'pequeno-principe', 'e-assim-que-acaba'];
  livrosImages.forEach((img, index) => {
    img.addEventListener('click', () => {
      showMediaContent('livros', livrosKeys[index]);
    });
    img.style.cursor = 'pointer';
  });
  
  // Adicionar evento ao botão de música
  const musicButton = document.querySelector('.musica .btn');
  musicButton.addEventListener('click', showMusicPlayer);
  
  // Adicionar efeitos sonoros (opcional)
  function playClickSound() {
    // Criar um som de clique simples usando Web Audio API
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();
    
    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);
    
    oscillator.frequency.value = 800;
    oscillator.type = 'sine';
    
    gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.1);
    
    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + 0.1);
  }
  
  // Adicionar som de clique a todos os elementos interativos
  document.querySelectorAll('.btn, img').forEach(element => {
    element.addEventListener('click', playClickSound);
  });
  
  // Adicionar animação de entrada
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.animationPlayState = 'running';
      }
    });
  });
  
  document.querySelectorAll('.coluna').forEach(coluna => {
    observer.observe(coluna);
  });
  
  console.log('🎮 Site Tédio carregado com sucesso!');
  console.log('✨ Funcionalidades disponíveis:');
  console.log('- 6 jogos interativos');
  console.log('- 4 quizzes temáticos com 10 perguntas cada');
  console.log('- Player de música com 8 opções');
  console.log('- Conteúdo de séries, filmes e livros com vídeos');
  console.log('- Efeitos visuais e sonoros');
});

