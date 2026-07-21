import '../index.css';
import './gamedevtutorial.css';
import Header from '../../Components/Header/Header.js'
import Navbar from '../../Components/Header/Navbar.js';
import Leftbar from '../../Components/LeftBar/Leftbar.js';
import RightBar from '../../Components/RightBar/RightBar.js';
import Footer from '../../Components/Footer/Footer.js';

import unityinstallhub from './Images/unityhubinstall.png';
import installvs from './Images/vscodeinstall.png';
import unityhubstart from './Images/unityhubstart.png';
import classandobject from './Images/classandobject.jpg';
import heranca from './Images/heranca.png';
import composition from './Images/composition.png';
import firstscript1 from './Images/firstscript1.png';
import firstscript2 from './Images/firstscript2.png';
import firstscript3 from './Images/firstscript3.png';
import firstscript4 from './Images/firstscript4.png';
import firstscript5 from './Images/firstscript5.png';
import firstscript6 from './Images/firstscript6.png';
import firstscript7 from './Images/firstscript7.png';

function GameDevTutorial() {
  const scrollToSection = (id) => {
  document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
};
  return (
    <div className="mainContainer">
      <Header></Header>
      <Navbar></Navbar>
        <div className="mainContent">
            <Leftbar></Leftbar>
            <div className="middle-content">
              <div className='box mainContent-box gamedevbox'>
                <h3>Introdução</h3>
                <p>Em uma das empresas de desenvolvimento de jogos que trabalhei uma das visões da empresa era fomentar o cenário de desenvolvimento de jogos do Brasil, e eu peguei um pouco dessa visão para mim!</p>
                <p>Abaixo você vai encontrar um tutorial (que vai ser mais atualizado conforme o tempo) de como começar a sua jornada de desenvolvimento de jogos (majoritariamente para programadores, mas com dicas em geral para todas as areas).</p>
                <p>Na primeira seção você vai encontrar um sumário que vai te levar ao conteúdo desejado na pagina, basta clicar para pular para onde quiser caso queira pular direito para algum conteúdo ou relembrar algo lá na frente em um momento de necessidade! :D</p>
              </div>
              <div className='box mainContent-box gamedevbox'>
                <h3>Sumário</h3>
                <span onClick={() => scrollToSection('primeirospassos')}><h2>Primeiros Passos</h2></span>
                <span onClick={() => scrollToSection('ferramentas')} ><p className='gamedevSubtitle'>--Escolhendo suas Ferramentas</p></span>
                <span onClick={() => scrollToSection('ferramentascomplementares')}><p className='gamedevSubtitle'>--Ferramentas Complementares</p></span>
                <span onClick={() => scrollToSection('instalando')}><p className='gamedevSubtitle'>--Instalando Ferramentas Necessárias</p></span>
                <span onClick={() => scrollToSection('POO')}><h2>Programação Orientada a Objetos</h2></span>
                <span onClick={() => scrollToSection('whatispoo')}><p className='gamedevSubtitle'>--O que é Programação Orientada a Objetos</p></span>
                <span onClick={() => scrollToSection('classandobject')}><p className='gamedevSubtitle'>--Classes e Objetos</p></span>
                <span onClick={() => scrollToSection('heranca')}><p className='gamedevSubtitle'>--Herança</p></span>
                <span onClick={() => scrollToSection('interfaces')}><p className='gamedevSubtitle'>--Interfaces</p></span>
                <span onClick={() => scrollToSection('composicao')}><p className='gamedevSubtitle'>--Composição</p></span>
                <span onClick={() => scrollToSection('startingunity')}><h2>Iniciando na Unity</h2></span>
                <span onClick={() => scrollToSection('unitygeneral')}><p className='gamedevSubtitle'>--Visão Geral</p></span>
                <span onClick={() => scrollToSection('unitycomponents')}><p className='gamedevSubtitle'>--Componentes da Unity</p></span>
                <span onClick={() => scrollToSection('monobehaviourbasics')}><p className='gamedevSubtitle'>--Funções Básicas de um Monobehaviour</p></span>
                <span onClick={() => scrollToSection('unityfirstscript')}><p className='gamedevSubtitle'>--Criando Nosso Primeiro Script</p></span>
                <span onClick={() => scrollToSection('traduzindoideias')}><h2>Traduzindo Ideias em Códigos</h2></span>
                <span onClick={() => scrollToSection('breakingproblem')}><p className='gamedevSubtitle'>--Quebrando o Problema</p></span>
                <span onClick={() => scrollToSection('organizingcode')}><p className='gamedevSubtitle'>--Organizando o Código</p></span>
                <span onClick={() => scrollToSection('console')}><p className='gamedevSubtitle'>--Debug.Log e Console</p></span>
                <span onClick={() => scrollToSection('erroscomuns')}><p className='gamedevSubtitle'>--Erros Comuns de Iniciante</p></span>
              </div>
              <div className='box mainContent-box gamedevbox link' id='primeirospassos'>
                <h3>Primeiros Passos</h3>
                <h3 className='gamedevTitle link' id='ferramentas'>Escolhendo suas Ferramentas</h3>
                <p>Primeiramente começamos escolhendo quais ferramentas vamos utilizar, nenhuma é simplesmente superior à outra, vai da escolha de cada um e cada uma delas serve um propósito!</p>
                <p>Mais abaixo irei falar sobre outras ferramentas para areas de gamedev, mas saiba que para começar tudo que precisamos é de uma Engine escolhida e um editor de texto baixado! (e até mesmo o bloco de notas serve! só não recomendo kkkjk)</p>
                <p>A primeira escolha que devemos fazer é qual Engine iremos utilizar (este tutorial falará muito e especificidades sobre Unity, mas ele também é um bom material para quem vai utilizar outras engines de desenvolvimento por falar muito sobre as bases).</p>
                <p>Existem inumeras engines para desenvolvimento de jogos, porém para facilitar sua escolha falaremos de 3 principais!</p>
                <h4>Unity</h4><p>A mais popular de todas, apesar de ser uma disputa acirrada com a próxima engine, além de extremamente versátil a Unity tem uma comunidade GIGANTESCA e possui muitos tutoriais que são uma excelente ajuda para todos os níveis (além de ser a engine que mais falarei aqui)</p>
                <h4>Unreal</h4><p>Potente, ótima para 3D, bonita e a engine que mais possui oportunidades no mercado quando o assunto é empresas grandes. Porém, devido a linguagem, acredito ser uma engine de entrada um pouco dificil</p>
                <h4>Godot</h4><p>Uma ÓTIMA engine para começar, principalmente se seu objetivo for ser um hobby ou trabalhar consigo mesmo! é uma engine completa além de ser open source.</p>
                <p></p>
                <p>Baseado em qual engine você escolheu ja temos um caminho para seguir - para Unity e Godot você vai focar primariamente em C# e para Unreal C++ como linguagens de programação.</p>
                <p>Para edição de texto algo como Visual Studio Code é o mais simples de se escolher! facil de instalar, de usar e de customizar</p>
                <h3 className='gamedevTitle link' id='ferramentascomplementares'>Ferramentas Complementares</h3>
                <p>Se planeja fazer arte isso depende do tipo de arte que vai fazer</p>
                <p>* Se planeja fazer pixelart Libresprite é perfeito, além de open source.</p>
                <p>* Também temos Krita ou Inkspace para 2D sem ser Pixelart.</p>
                <p>Para som é um pouco mais complexo, temos Audacity como opção gratis; além dele podemos olhar para FMOD ou FL Studio.</p>
                <h3 className='gamedevTitle link' id='instalando'>Instalando Ferramentas Necessárias</h3>
                <p>Começamos instalando a nossa Engine, como dito anteriormente vamos seguir esse tutorial utilizando a Unity.</p>
                <p>Neste <a href='https://docs.unity.com/en-us/hub/install-hub'>Link</a> você abre a página de download do Unity Hub, um gerenciador de instalações da Unity</p>
                <img className='tutorialimage' src={unityinstallhub}></img>
                <p>Basta clicarmos em qual sistema operacional estamos utilizando:</p>
                <p>Windows é mais simples ele vai pedir para acessar a pagina de download (unity.com/download), criar uma conta da unity e clicar no link de download.</p>
                <p>Para linux basta seguir as instruções passo a passo colando os comandos em destaque no terminal</p>
                <p>Para baixar o VSCode basta seguir <a href='https://code.visualstudio.com/download?_exp_download=fb315fc982'>Este</a> link e escolher o seu sistema operacional como mostra a imagem abaixo:</p>
                <img className='tutorialimage' src={installvs}></img>
                <p></p>
                <p>Após abrir o unity hub ele pedirá para que você faça login na sua conta unity, após isso ele exibirá a página inicial onde ele já vai mostrar uma sugestão de instalar a versão mais nova da unity no seu computador!</p>
                <img className='tutorialimage' src={unityhubstart}></img>
                <p>Mas, caso você tenha um computador mais velhinho - como o meu - eu aconselho a ir em instalações, então ele mostrará que você não tem nenhuma instalação feita e lá você consegue baixar algumas versões passadas (eu recomendo SEMPRE baixar versões com 'LTS' no nome, que são as versões Long Term Support, ou seja, as manutenções e atualizações dessa versão continuam acontecendo por um boom tempo), ou até mesmo versões muito anteriores (no momento ele só da de sugestão a versão 6.0 da unity, mas podemos ir em Archive e achar versões anteriores pelo site)</p>
                <p>Ao terminar de instalar, basta ir em projetos e criar um novo projeto, começe um projeto 2D e espere até que ele seja criado</p>
              </div>

              <div className='box mainContent-box gamedevbox link' id='POO'>
                <h3>Programação Orientada a Objetos</h3>
                <h3 className='gamedevTitle link' id='whatispoo'>O Que é Programação Orientada a Objetos</h3>
                <p>Como isso é uma introdução básica que visa ser proveitosa até mesmo para quem é completo iniciante, vamos dar apenas uma descrição geral sobre o que é a Programação Orientada a Objetos:</p>
                <p>Quando você programa um jogo você precisa representar coisas do mundo real no código (um personagem, uma arma, um inimigo, etc). A Programação Orientada a Objetos(POO) é a forma que faremos isso!</p>
                <p>A POO é um paradigma que se baseia em estruturar o software a partir de Classes[moldes] e Objetos[instâncias desses moldes], simulando coisas do mundo real com suas próprias características[atributos] e comportamentos [métodos].</p>
                <p>Pense em um Inimigo no seu jogo. Ele tem características: vida, dano, etc. E tem comportamentos: andar, atacar, morrer, etc. Na POO, você cria uma Classe que define tudo isso, e cada inimigo que aparece na tela é um Objeto criado a partir dessa classe.</p>
                <h3 className='gamedevTitle link' id='classandobject'>Classes e Objetos</h3>
                <p>Como dissemos anteriormente em orientação a objetos nós dividimos o nosso código em classes e objetos. De forma geral classes são a "forma" com a qual vamos criar nossos objetos; Pensando em uma linguagem de jogos (mario, por exemplo) temos que uma classe seria "Inimigos", onde a gente teria atributos(informações dos inimigos, como vida, velocidade) e ações(andar, pular, etc), ja um objeto de inimigo seria um Goomba onde a gente definiria a vida como sendo 1, a velocidade como X e utilizariamos apenas a ação de andar; ou até mesmo o Bowser onde teriamos uma vida maior e talvez até ações a mais que um inimigo teria</p>
                <img className='tutorialimage' src={classandobject}></img>
                <p>Então temos que: Classes são a fabrica de carros; nela criamos atributos e funções que vão definir os nossos objetos. Então quando precisamos criar um objeto (um carro) nós dizemos para a nossa fabrica como queremos que esse objeto seja</p>
                <p>Já os Objetos são instancias dessas classes, depois de definirmos modelo, nome, velocidade, cavalos etc do nosso carro, a nossa fabrica nos dá um carro pronto, esse seria o Objeto da classe Carro que criamos</p>
                <p>Mas, voltando para jogos, se qualquer parte do código pode alterar a vida do Goomba diretamente, isso pode causar bugs difíceis de rastrear. É aí que entra o encapsulamento </p>
                <p>Dentro das nossas classes é importante que nossos atributos e métodos sejam bem encapsulados, o que quer dizer que eles são protegidos de alterações externas. Nós criamos atributos e metodos privados dentro da Classe e criamos funções publicas específicas para que códigos externos possam alterar os atributos do nosso objeto somente onde nós permitirmos</p>
                <p>então se a nossa Classe Inimigos (e por consequenia o nosso Inimigo Goomba) tem o atributo <br></br><br></br><i>private int vida</i><br></br><br></br>que não pode ser alterado diretamente por códigos externos, nós também criaremos uma função <br></br><br></br><i>public void TomarDano(int dano)</i><br></br><br></br> que recebe um valor de dano e subtrai da vida dos nossos inimigos, e que pode ser chamado de forma externa ao Inimigo sem alterar seus atributos diretamente</p>
                <p>Assim, se a vida do Goomba chegar a um valor inválido ou se algum outro bug acontecer, sabemos exatamente onde procurar: só o TomarDano pode alterar ela</p>
                <h3 className='gamedevTitle link' id='heranca'>Herança</h3>
                <img className='tutorialimage' src={heranca}></img>
                <p>A Herança é um dos pilares da POO, ela permite que uma Classe seja filha de outar Classe, isso quer dizer que: a Classe filha vai herdar todos os atributos e métodos da sua classe mãe, evitando reescrita de código.</p>
                <p>Vamos continuar com o nosso exemplo de jogos, vamos dizer que no nosso Mário temos alguns tipos diferentes de inimigos distintos, o Goomba apenas anda e o inimigo chamado Irmão martelo não anda, mas ele pula e joga martelos de longe.<br></br>Ambos são inimigos, mas não compartilham todos os seus métodos(ações), logo devemos usar herança para resolver isso!</p>
                <p>Então nos temos a Classe Inimigo que possui os nossos atributos como vida, velocidade e metodos como TomarDano, tudo isso será herdado pelas nossas novas classes Filhas.</p>
                <p>Criamos então a Classe InimigoPatrulha e InimigoPulo que herdam da classe Inimigo todos os seus atributos e métodos e nestas classes especificas nós criaremos os métodos de seus comportamentos, então em InimigoPatrulha criamos o metodo Patrulhar e em InimigoPulo criamos os metodos de Pular e JogarMartelo.</p>
                <p>Então nossos Objetos são criados à partir das classes InimigoPatrulha e InimigoPulo.</p>
                <p>Mas então temos um problema, quando nosso personagem der dano em um inimigo, devemos testar chamar o método TomarDano em todos as Classes herdadas diferentes de inimigos até acharmos a qual o nosso inimigo atingido pertence?</p>
                <p>Não! é aí que entra o polimorfismo! Como ambas estas classes herdam da mesma classe mãe, podemos tratar qualquer inimigo como sendo do tipo Inimigo e chamar TomarDano(), independente de ser um InimigoPatrulha ou InimigoPulo.</p>
                <p>Podemos também na classe mãe marcamos um método com <i>virtual</i>, indicando que as filhas podem reescrever esse comportamento. Nas classes filhas usamos <i>override</i> para personalizar esse método, e mesmo assim, o código externo só precisa conhecer a classe Inimigo para acessar o método.</p>
                <h3 className='gamedevTitle link' id='interfaces'>Interfaces</h3>
                <p>As interfaces são outro conceito importante para POO, na Unity você vai encontrar interfaces desde cedo como IEnumerator para coroutines. Por isso vale entender o conceito antes de seguir em frente.</p>
                <p>Interfaces são como um "contrato" de que uma Classe vai implementar certos métodos, é quase que uma herança onde todos os métodos devem ser <i>override</i>; a grande diferença é que uma Classe pode implementar diversas interfaces, mas só pode herdar de uma classe mãe.</p>
                <p>Uma interface não implementa nenhum método em si, ela é só uma 'lista de métodos/comportamentos' que, se sua classe implementa essa Interface ela deve ter todos eles dentro dela.</p>
                <p>Dentro de jogos podemos pensar em algo como criar uma Interface IDestrutivel, que exige os métodos LevarDano(int dano) e Destruir() sejam criados nas Classes que implementarem esta interface.<br></br>Ao criarmos Classes de objetos no cenário que podem ser destruidos e implementarmos essa interface seremos obrigados a criar os métodos necessários para que o objeto seja destruído</p>
                <p>Lembra que uma classe só pode herdar de uma mãe? Uma parede e um inimigo não compartilham herança, mas ambos podem ser destruídos. Com a interface IDestrutivel, os dois implementam o contrato sem precisar de uma classe mãe em comum.</p>
                <h3 className='gamedevTitle link' id='composicao'>Composição</h3>
                <p>A Composição é fundamental no desenvolvimento de jogos! Com a Composição criamos uma relação de "Tem um", é uma técnica em que uma Classe é construida utilizando instâncias de outras classes, o que permite reutilização de código e criar estruturas mais complexas com maior flexibilidade.</p>
                <p>Logo iremos para a unity e você vai perceber que todo Objeto que criamos na cena é um resultado de uma Composição, visto que um GameObject na unity tem uma posição, tem um gráfico, etc</p>
                <img className='tutorialimage' src={composition}></img>
                <p>De forma prática, usando nossos inimigos como exemplo, nós criaremos os scripts de InimigoPatrulha e InimigoPulo e, nos inimigos da cena um Goomba terá um Objeto da classe InimigoPatrulha em si, tera uma posição no mundo(Transform), terá um gráfico à ser renderizado(SpriteRenderer), terá um script responsável pela animação, etc, etc</p>
                <p>Dessa maneira, caso você precise alterar partes do comportamento do inimigo, podemos alterar apenas seu componente, sem precisar reescrever toda a estrutura do Inimigo</p>
                <p>Uma regra prática: prefira Composição quando a relação é "tem um", e herança quando a relação é "é um".<br></br> 
                Um Goomba É UM Inimigo: herança faz sentido.<br></br>
                Mas um Goomba TEM UM gráfico, TEM UMA posição no mundo: composição faz sentido</p>
              </div>
              <div className='box mainContent-box gamedevbox link' id='startingunity'>
                <h3>Iniciando na Unity</h3>
                <h3 className='gamedevTitle link' id='unitygeneral'>Visão Geral</h3>
                <p>Esta é a visão padrão da Unity assim que baixamos uma nova versão, apesar de que a gente consegue (e deve) mudar esse layout para facilitar a nossa vida:<br></br>
                <ul>
                  <li>À esquerda temos a hierarquia, que é onde ficam listado todos os objetos da nossa cena</li>  
                  <li>Ao centro temos a Scene View, onde montamos nossa cena arrastando objetos, e a Game View, que mostra exatamente o que o jogador vai ver quando o jogo rodar</li>
                  <li>Abaixo temos a parte de projeto e console, que é o lugar onde vemos todos os arquivos do nosso projeto (e onde criamos nossos scripts, clicando com o botão direito->Criar->C# Script) e o Console onde verificamos erros e logs</li>
                  <li>À direita temos o inspetor, que é o que mostra os detalhes do objeto que temos selecionados</li>
                </ul></p>
                <img className='tutorialimage'  src={heranca}></img>
                <p>E este é o layout que eu uso normalmente:<br></br>Hierarquia e Inspetor à direita, Projeto e Console abertos ao mesmo tempo abaixo</p>
                <img className='tutorialimage' src={heranca}></img>
                <p>Após selecionar um objeto na hierarquia conseguimos ver no inspetor os seus detalhes, ali podemos ver que um objeto é composto por vários componentes, como transform, SpriteRenderer etc que são instancias de scripts da unity, ou seja, são objetos da Classe Transform, SpriteRenderer etc que compoẽ o nosso GameObject, ou podemos dizer que o nosso GameObject <b>tem um</b> Transform e <b>tem um</b> SpriteRenderer.</p>
                <img className='tutorialimage' src={heranca}></img>
                <p>Nos próximos tópicos vamos explorar esses componentes com um pouco mais de profundidade, entendendo o que cada um faz e como usá-los nos nossos scripts.</p>
                <h3 className='gamedevTitle link' id='unitycomponents'>Componentes da Unity</h3>
                <p>A Unity nos oferece uma infinidade de Componentes que são essenciais na nossa jornada de GameDev e que compoẽ grande parte do funcionamento do nosso jogo, desde simulações de física até organização de itens em um menu.
                  <br></br>Os GameObjets + os Componentes que a Unity nos oferece (e os Componentes que iremos criar) são a aplicação prática da composição que vimos no capítulo anterior!
                  <br></br>Neste tópico iremos comentar sobre alguns dos principais desses componentes:
                </p>
                <p><b>Transform</b>
                <br></br>O principal componente da Unity e aquele que guarda posição/rotação do seu GameObject no mundo; Mesmo quando criamos um GameObject vazio na Unity ele sempre terá pelo menos um Transform atrelado a ele!
                <br></br>Apesar de muitos iniciantes cometerem esse erro, nós não devemos alterar as propriedades do Transform para mexer o nosso GameObject (apesar de que, para rotacionar - pelo menos em 2D - nós geralmente mexemos na rotação do objeto diretamente)
                <br></br>Alterar o Transform diretamente ignora o sistema de física da Unity, causando comportamentos estranhos como objetos atravessando paredes ou colisões não sendo detectadas!</p>
                <p><b>Rigidbody</b>
                <br></br>Já que falamos sobre não alterar o Transform anteriormente para mexer o objeto, já iremos introduzir o componente responsável por simular física no nosso objeto!
                <br></br>Quando colocamos Rigidbody2D(ou Rigidbody para jogos 3D) nós estamos dizendo para a Unity que o nosso GameObject <b>tem</b> física, e ela faz as preparações necessárias para isso (para que esse objeto se mova etc), logo se um objeto no seu jogo se move, ele DEVE ter um Rigidbody atrelado a ele!</p>
                <p><b>Collider</b>
                <br></br>Collider(e Collider2D) são a segunda metade da física dos objetos da Unity, se o Rigidbody faz com que seu GameObject tenha física, os Colliders fazem com que eles tenham <i>colisão</i>.
                <br></br>Colliders vem em diferentes formas e definimos a base dessa forma ao criarmos eles e podemos editar seu tamanho(e em alguns casos seu formato) para termos o desenho que precisarmos.
                <br></br>Além disso colliders podem ser de dois tipos, trigger ou não trigger(collider Real), isso influencia se queremos que o nosso objeto realmente bata em oturos objetos ou apenas precisamos detectar se ele passou por oturo objeto. (Ou seja, colliders triggers são usados para chamar alguam função quando seu objeto tocar em algo, pense uma bala atingindo seu inimigo; Já colliders reais servem para que objetos se toquem de verdade, pense o chão e o seu personagem)
                </p>
                <p><b>SpriteRenderer</b>
                <br></br>Se estamos falando de 2D é um dos componentes visuais principais para o seu jogo, nele é onde você definirá a sprite do seu personagem, ou seja, o gráfico que será exibido na Cena</p>
                <p><b>Animator</b>
                <br></br>Componente responsável pela animação do seu GameObject, como ciclo de caminhada, etc.
                <br></br>Ele gerencia quais animações tocar e quando transicionar entre elas, por exemplo, quando o personagem para de andar e começa a pular.</p>
                <p><b>AudioSource</b>
                <br></br>Componente responsável pela reprodução de sons dentro do seu jogo.
                <br></br>Para funcionar, ele precisa de um AudioClip, que é o arquivo de áudio em si, atribuído a ele</p>
                <p>Existem diversos outros Componentes e a melhor forma de descobri-los é através da <a href='https://docs.unity3d.com/Manual/index.html' target='blank'>documentação da Unity</a></p>
                <h3 className='gamedevTitle link' id='monobehaviourbasics'>Funções Básicas de um Monobehaviour</h3>
                <p>Este é um tópico rápido, apenas para vermos algumas funções básicas de um Monobehaviour antes de criarmos nosso primeiro script e nos assustarmos com tudo que está escrito!</p>
                <p><b>Mas o que é um Monobehaviour?</b>
                <br></br>Monobehaviour é uma Classe Mãe, da qual os scripts que você cria na Unity herdam dela!
                <br></br>Isso faz com que seus scripts já tenha algumas funções e atributos que podem ser utilizados no desenvolvimento do seu jogo, e é isto que iremos explorar nesse tópico!</p>
                <p>
                  <b>Awake</b>
                  <br></br>Awake é chamado uma vez quando a Unity carrega uma instancia do componente do script, ou seja, é chamado uma vez quando a Unity carrega o objeto na cena pela primeira vez (seja ao carregar a cena ou ao ativar o script). É a primeira função que é rodada de um script.
                  <br></br>Awake roda apenas uma vez durante toda a vida do objeto, mesmo que ele seja desativado e reativado posteriormente
                </p>
                <p>
                  <b>Start</b>
                  <br></br>Start é uma função chamada uma vez no frame em que o script é ativado e sempre roda depois da função Awake (A Função Start de um script só roda depois de TODOS os Objetos na cena terem rodado a sua função Awake).
                </p>
                <p>
                  <b>Update</b>
                  <br></br>Update é uma função chamada a cada frame e começa a rodar depois da função Start().
                </p>
                <p>
                  <b>OnEnable/OnDisable</b>
                  <br></br>Funções que rodam quando um Objeto fica disponivel e ativo ou indisponivel e inativo; A função OnEnable roda ENTRE a função de Awake e a função de Start
                  <br></br>Úteis quando você desativa e reativa objetos com frequência, como um pool de inimigos. OnEnable pode voltar o estado do objeto ao inicial, e OnDisable pode pausar comportamentos desnecessários
                </p>
                <p>Awake -> OnEnable -> Start -> Update (a cada frame)</p>
                <h3 className='gamedevTitle link' id='unityfirstscript'>Criando Nosso Primeiro Script</h3>
                <p>Neste tópico iremos criar o nosso primeiro script da Unity para movimentar um GameObject. Vale ressaltar que aqui você vai ouvir falar de algumas funções que não está familiar ainda, mas que, no módulo seguinte iremos abordar como encontrar essas funções e como traduzir as suas ideias em código!</p>
                <p>Vamos começar criando um GameObject na nossa cena, basta clicar com o botão direito na hierarquia e clique em 2D Object -> Sprites ->Square
                  <br></br>Isso irá criar em nossa cena um quadrado, que sera um GameObject que tem os componentes Transform(que define sua posição) e um SpriteRenderer(que define seu gráfico).
                  <br></br>Por fim, como queremos criar um script para o nosso quadrado se mexer, vamos adicionar um Rigidbody2D à ele, e como será um movimento top-down, colocar 0 no valor da gravidade
                </p>
                <p>Já temos nosso primeiro GameObject setado na cena e podemos começar com o nosso primeiro script!
                  <br></br>Agora clicamos com o botão direito na janela de Projeto e criamos uma pasta para os nossos Scripts e depois clicamos com o botão direito e vamos em Create -> C# Script e vamos nomea-lo PlayerMovement.
                  <br></br>Após criar o script, arraste-o da janela de Projeto para o seu GameObject na hierarquia, ou clique em Add Component no Inspetor e busque pelo nome do script
                  <br></br>Ao abrir o nosso script pela primeira vez nos deparamos com algumas funções que discutimos no tópico anterior:
                </p>
                <img className='tutorialimage' src={firstscript1} alt='imagem mostrando script inicial ao se criar uma classe da Unity'></img>
                <p>Agora o nosso script irá mover o nosso personagem, mas como fazemos isso?
                  <br></br>Vamos utilizar o Componente responsável pela simulação de física do objeto que adicionamos anteriormente, o Rigidbody2D.
                  <br></br>Primeiro criamos uma variavel do tipo 'Rigidbody2D' e damos à ela um nome, como 'myRb'.
                </p>
                <img className='tutorialimage' src={firstscript2} alt='imagem mostrando script da Unity com uma váriavel do tipo Rigidbody2D criada com o nome myRb'></img>
                <p>
                  <br></br>Depois disso precisamos que essa variável 'myRb' esteja falando do Rigidbody2D do nosso GameObject do jogador, e existem algumas maneiras para se fazer isso, uma ruinzinha, um ok e uma ideal.
                  <ul>
                    <li><b>A opção ruinzinha:</b>Podemos criar essa variável com o prefixo <i>'public'</i>e vamos arrastar o nosso Rigidbody2D para o campo do 'myRb' quando colocarmos o script no GameObject do jogador</li>
                    <li><b>A opção ok:</b>Podemos criar essa variável com o prefixo <i>[SerializeField]</i>, funciona básicamente com o 'public' para definir quem é o 'myRb' mas a nossa variável permanece privada</li>
                    <li><b>A opção ideal:</b>Para esse caso, como o Rigidbody2D E o nosso script de movimento estão Compondo o nosso GameObject, podemos pegar a referencia deste Rigidbody2D por código utilizando a função GetComponent</li>
                  </ul>
                </p>
                <p>A função GetComponent é uma função dos GameObjects e retorna uma referencia de um componente do Tipo que você especificar!
                  <br></br>Por ser uma função de GameObjects, ela pode ser rodada tanto no GameObject que seu script está atrelado quanto à outros GameObjects que você tiver a referência no script!
                  <br></br>O nosso código então, ficaria algo assim:
                </p>
                <img className='tutorialimage' src={firstscript3} alt='imagem mostrando a variavel myRb e dentro da função Start a chamada myRb = GetComponent<RB2D>()'></img>
                <p>Para movimentar o nosso Rigidbody2D existem alguns meios, todos com seus pontos positivos e negativos que serão explorados em módulos futuros; Mas de modo geral é algo mais sobre preferência.
                  <br></br>No meu dia a dia eu utilizo Velocity, que altera a velocidade do nosso Rigidbody fazendo com que ele se mova.
                  <br></br>O velocity pode ser alterado dessa maneira:
                </p>
                <img className='tutorialimage' src={firstscript4} alt='imagem mostrando myRb.velocity=new vector2(1f,0f) dentro da função update'></img>
              <p>Com isso nosso GameObject esta se movendo para sempre para a direita!</p>
              <p>Mas queremos controlar esse movimento e não ir para um lado desenfreado.
                <br></br>Então iremos mover de acordo com os inputs do jogador, para fazer isso iremos usar o método antigo; Atualmente a preferencia por facilidade de atualizações e de trazer diferentes métodos de inputs para o projeto é o NewInputsystem da Unity, mas falaremos mais sobre ele em tópicos para a frente.</p>
              <p>
                Para fazer isso iremos, dentro do Update - ou seja, a cada frame - ouvir se o jogador apertou a tecla necessária e, se sim, o GameObject irá se mover!
                <br></br>Para simplificar, faremos o movimento em uma direção por vez, lidar com movimento diagonal corretamente envolve conceitos que abordaremos em módulos futuros (como a utilização do NewInputSystem). 
                <br></br>A função que é disparada quando o jogador aperta uma tecla é a Input.GetKeyDown ou Input.GetButtonDown.
                <br></br>A grande diferença das duas é que enquanto GetKeyDown você vai passar uma referência direta de uma tecla utilizando KeyCode, o GetButtonDown você vai passar uma referência de input que pode ser configurada e alterada na Unity (algo como 'fire').
              </p>
              <img className='tutorialimage' src={firstscript5} alt='imagem mostrando o getkeydownD sendo checado no update para mover o player para a direita'></img>
              <p>Assim ficaria o nosso script para esperar quando o jogador apertar para a direita para começar a se mover para a direita.</p>
              <p>Mas você vai perceber que o seu jogador continua se movendo mesmo depois de soltar a tecla, isso é por que mudamos sua velocidade mas não voltamos ela para 0 quando o jogador parou de pressionar a tecla.
                <br></br>Então fazemos isso após definir seus movimentos para todas as direções, utilizando um else e setando sua velocidade para (0,0)
              </p>
              <img className='tutorialimage' src={firstscript6} alt='imagem mostrando todos os getkeydown para cada direção e o else parando o jogador'></img>
              <p>Com isso temos o nosso jogador se movendo pela cena e parando quando o jogador para de se mover, além de termos criado o nosso primeiro script de jogos na Unity!</p>
              <p>Uma dica: use Debug.Log(myRb.velocity) dentro do Update para ver no Console a velocidade do objeto em tempo real, você vai usar muito isso para debugar seus scripts.</p>
              <img className='tutorialimage' src={firstscript7} alt='imagem mostrando o debug.log após o else dos movimentos no update'></img>
              <p>No próximo módulo vamos aprender como encontrar funções como velocity e GetComponent por conta própria, uma habilidade essencial para continuar evoluindo.</p>
              </div>
             <div className='box mainContent-box gamedevbox link' id='traduzindoideias'>
                <h3>Traduzindo Ideias em Códigos</h3>
                <p>Esta é uma seção de extrema importância para o seu desenvolvimento como programador e  - principalmente - como programador de jogos.
                  <br></br>A idéia desta seção é ser um tópico geral sobre como partir de uma idealização que você tem de um jogo e transformar essa idéia em conceitos Unity e colocar isso em código.
                  <br></br><br></br>Saber a sintaxe do C# e conhecer os componentes da Unity não é suficiente para fazer um jogo, a parte mais difícil é olhar para uma ideia na sua cabeça e saber por onde começar.Esta seção existe para resolver exatamente isso: como partir de uma ideia e transformar isso em código funcionando na Unity. É uma habilidade que nenhum tutorial de feature específica vai te ensinar, e que separa quem consegue fazer jogos de quem fica preso esperando o tutorial certo aparecer</p>
                <h3 className='gamedevTitle link' id='breakingproblem'>Quebrando o Problema</h3>
                <p>Esse é o tópico que motivou a existência deste livro no formato que ele tem hoje. Desde que me tornei um desenvolvedor de jogos bom eu queria escrever 2 mini livros, um manual de sobrevivência de game jams (que teremos uma seção sobre mais a frente) e um sobre como escapar o tutorial hell no desenvolvimento de jogos - que é quando você faz as coisas à partir de um tutorial, mas quando vai desenvolver por si só você não consegue - que seria em grande parte este tópico.</p>
                <p>Aqui você vai aprender a como pensar como um desenvolvedor de jogos e como quebrar suas idéias de mecanicas em scripts e componentes da Unity; mas para você conseguir pensar em quais componentes você precisa com mais facilidade quando for programar mais para frente, uma coisa é essencial: prática!</p>
                <p>Então vamos começar, tomando o nosso exemplo anterior de um inimigo sem nome e em formato de cogumelo que patrulha de um ponto A até um ponto B, como partimos da idealização dele e pensamos em tudo que precisamos?</p>
                <p>Para isso precisamos ir quebrando todos os comportamentos do inimigo até suas minimas partes:
                  <br></br>O nosso inimigo irá patrulhar de um ponto até outro, logo o nosso inimigo vai se mover e se ele vai se mover precisamos de um Rigidbody2D adicionado à ele e um Collider2D para que ele não atravesse o chão!
                  <br></br>Se nosso inimigo vai se mover, existe algum componente da Unity que faça essa movimentação do inimigo? se a gente não sabe esta resposta devemos pesquisar e uma pesquisa rápida na documentação confirma que não existe um componente pronto para isso, logo devemos criar nosso script EnemyMovement e adicionar no GameObject do inimigo
                  <br></br>Se o nosso inimigo vai se mover entre dois pontos fixos, quais informações devemos ter para esse movimento?
                  <br></br><br></br>- A localização dos pontos A e B pelos quais o inimigo vai patrulhar, e se falamos de localização, estamos falando de Transform
                  <br></br>- O ponto que o inimigo está se movimentando em direção no momento
                  <br></br>- O Rigidbody2D do nosso inimigo que irá movimentar o seu GameObject
                  <br></br>- Um parametro serializado no nosso script de EnemyMovement de velocidade, para ajustarmos o quão rapido esse inimigo vai patrulhar diretamente do Inspector
                </p>
                <p>O nosso código, que você pode desenvolver como um exercício, fica algo como:
                  <br></br><i>// EnemyMovement
                    <br></br>// Atributos: objetivo, transformA, transformB, velocidade(com serializefield), rigidbody
                    <br></br>// Awake: pegar referência do Rigidbody
                    <br></br>// Update: mover em direção ao objetivo atual
                    <br></br>//se chegou no objetivo, trocar para o outro transform</i>
                </p>
                <p>Veja como foi rápido e simples de pegar uma mecânica que queremos desenvolver e ir quebrando ela em pontos menores e menores até chegarmos em quais componentes vamos precisar e depois olhar para estes componentes e o que eles fazem e pensar em quais parametros seriam necessários neles para que o nosso comportamento funcionasse!
                  <br></br>
                  <br></br>Por isso é de suma importancia que, ao programar qualquer mecânica de jogos ou até mesmo de outras areas de programação, que a gente pare por um momento para pensar e planejar quais vão ser os passos que vamos tomar e para esquematizar como vai funcionar a nossa mecânica.
                  <br></br>Adotar esse tipo de mentalidade e de estrutura de desenvolvimento também vai nos blindando de cair no tutorial hell que mencionamos anteriormente, pois iremos desde o principio estar pensando em como as coisas funcionam nos seus pequenos detalhes!
                </p>
                <p>Vamos seguir o nosso exemplo, o nosso inimigo sem nome deve morrer ao ser pisado por cima pelo nosso jogador, como vamos esquematizar isso?</p>
                <p>Para isso o nosso inimigo irá precisar colidir com algo, o nosso inimigo ja tem um collider que é o componente que lida com colisões, então vamos criar um script simples e chamá-lo de EnemyCombat.
                  <br></br>Nesse script simples (que poderia ser quebrado mais, mas para facilitar apenas focarmos no como 'raciocinar' ou como 'quebrar o problema') o que precisaremos para todo o combate do inimigo?
                  <br></br>O nosso inimigo possui um componente de colisões, mas como detectar essa colisão? isso seria um tópico a ser pesquisado na documentação!
                  <br></br>Sabendo como detectar colisões, como definimos que essa colisão foi com o nosso Jogador? ou até mesmo se foi com a parte debaixo do pé dele?, ou seja, como detectar não só com quem, mas a direção da minha colisão?
                  <br></br>Após pesquisar todas essas perguntas, garanto que você ja vai ter um script simples de EnemyCombat esquematizado na sua cabeça!
                </p>
                <p>Novamente o nosso script final ficará como desafio para você desenvolver, mas seu esqueleto seria mais ou menos assim:
                  <br></br>
                  <i>
                    //EnemyCombat
                    <br></br>//Atributos: vida(não necessário no nosso exemplo acima)
                    <br></br>//Detecção de colisão
                    <br></br>//------se a colisão for com o jogador
                    <br></br>//----------se a colisão for por cima, diminuir vida/morrer
                    <br></br>//----------senão playerHealth.DamagePlayer()
                  </i>
                  <br></br>
                  <br></br>Por fim eu adicionei mais um conceito no script de combate do inimigo, que seria se ele enconstar no player (e não for na direção de um pisão na cabeça) ele deve dar dano!
                  <br></br>Você tinha pensado nesse comportamento enquanto pesquisava as perguntas anteriores?
                </p>
                <p>Nesse tópico eu segui uma linha de raciocínio simples para mostrar como desenvolver o pensamento necessário para um desenvolvedor de jogos, até aqui pensamos em um inimigo isolado, mas jogos raramente têm um só tipo de inimigo, e é aí que entra outra habilidade essencial: <b>refatorar</b> os códigos simples que vamos desenvolvendo! 
                  <br></br><br></br>Claro que nos exemplos usados pensamos em um só inimigo e talvez no nosso jogo final teremos mais alguns tipos, então deveriamos pensar em como mudar os nossos códigos atuais para termos um script mãe de “EnemyMovement” por exemplo, que se separa em scripts filhos de “EnemyPatrol” e “EnemyFollow”, quais funções e parametros ficariam na script mãe, quais seriam exclusivos de cada filho.
                  <br></br><br></br>Algo Como:<i>
                    <br></br>// EnemyMovement (mãe)
                    <br></br>// Atributos: rigidbody, velocidade
                    <br></br>// EnemyPatrol (filha): pontos A e B
                    <br></br>// EnemyFollow (filha): referência do alvo a seguir
                  </i></p>
                <p>Então mesmo sabendo como fazer a linha de pensamento do simples, também devemos ser capazes de expandir isso trazendo os conceitos organizacionais mais intermediários, para não só o nosso jogo ficar mais organizado no futuro, mas também para ele poder crescer sem problemas!</p>

                <h3 className='gamedevTitle link' id='organizingcode'>Organizando o Código</h3>
                <p>Para começar, vamos falar de algo simples mas muito deixado de lado pelos iniciantes que é se importar com a estrutura do seu projeto.
                  <br></br>Além de termos os nossos códigos bem organizados, nós precisamos que a estrutura do nosso projeto inteira seja organizada, para que a gente consiga buscar coisas mais facilmente na nossa estrutura de pastas!
                </p>
                <p>Para fazer isso de maneira simples podemos seguir algumas regrinhas básicas que já farão toda a diferença nos seus projetos. Pode parecer desnecessário quando o projeto tem 5 arquivos, mas quando ele tiver 200, cada minuto procurando o que você precisa é tempo roubado do desenvolvimento real
                  <br></br>basta:
                  <i>
                  <br></br>-Criar uma pasta para os tópicos grandes (ex: Scripts, Artes, Sons, etc)
                  <br></br>-Criar subpastas de acordo com a especificidade (ex: Scripts/Player/Movimento/PlayerMove.cs ou Scripts/Player/Combate/PlayerHealth.cs ou Artes/Spritesheets/Player [ou podemos imaginar como Artes/Player/Spritesheets])
                  <br></br>-Mesmo que tenhamos duas opções de escolha (como o ultimo exemplo acima), SEGUIR O MESMO PADRÃO PELO PROJETO TODO!!!(ou seja, se criamos Artes/Spritesheets/Player, teremos obrigatóriamente Artes/Spritesheets/Enemy e não Artes/Enemy/Spritesheets)
                  </i>
                </p>
                <p>Com isso teremos um projeto muito mais organizado e fácil de se navegar!</p>
                <p>Organizamos as pastas, mas a organização não para por aí, ela também vale dentro da própria lógica de quando dividir um comportamento em scripts separados.
                  <br></br>Pensando nos scripts, com todas estas pastas e subpastas de mecânicas e comportamentos, quando devemos criar um novo script para um comportamento e quando devemos apenas adicionar no nosso script 'PlayerCombat.cs' por exemplo?</p>
                <p>Devemos pensar então em um principio de responsabilidade UNICA para o nossos scripts (também conhecido como SRP, ou Single Responsability Principle), isso é um princípio bem famoso da POO e é o S do SOLID, que são 5 princípios de desenvolvimento que buscamos seguir para escrever código limpo e escalável em POO, e que iremos fazer um deep dive na parte de tópicos avançados do livro.</p>
                <p>Mas o que isso quer dizer?
                  <br></br>Isso é simples, devemos pensar que um script nosso deve ser responsavél por apenas UMA coisa, ou seja, não teremos um script Enemy.cs que cuida do movimento, vida, combate e tudo que diz respeito ao inimigo. Nós vamos quebrando esses comportamentos em scripts menores e menores até termos um com uma responsabilidade apenas!
                  <br></br>Como por exemplo, podemos ter um script de EnemyHealth.cs que cuida da vida do inimigo, com uma variavel 'vida' e métodos de 'TakeDamage()' e 'HealDamage()'.
                </p>
                <p>Muitas vezes se estamos pensando em GameJams que são um momento de desenvolvimento mais acelerado acabamos passando despercebido e tendo scripts com duas ou mais responsabilidades (como por exemplo se esse nosso script de EnemyHealth.cs também tivesse uma variavél de enemyHealthBar e um método de UpdateEnemyHealthUi()).
                  <br></br>Mas esse desenvolvimento acelerado fica na frente de escalabilidade do nosso projeto, por isso devemos quebrar esse script em dois distintos, EnemyHealth.cs e EnemyHealthUI.cs por exemplo, para que consigamos isolar um problema caso ele apareça e ganharmos tempo de desenvolvimento e correções!
                  <br></br>Lembra do nosso EnemyMovement se dividindo em EnemyPatrol e EnemyFollow? Aquilo já era SRP na prática!
                </p>
                <p>Organizar pastas e scripts é a base para um projeto saudável, mas mesmo com tudo bem estruturado erros irão acontecer. No próximo tópico vamos ver como usar o Console para encontrá-los rapidamente</p>
                <h3 className='gamedevTitle link' id='console'>Debug.Log e Console</h3>
                <p>Enquanto desenvolvemos nossos jogos inevitavelmente encontraremos alguns bugs ou comportamentos indesejados, para consguirmos testar o nosso código antes de termos uma implementação visual, buscar e corrigir erros e até nos avisar sobre falhas graves no nosso código, temos duas coisas que são de extrema importancia:
                  <br></br><br></br><b>O Debug.Log</b>, uma função que podemos chamar nos nossos scripts e ele escreverá o que passarmos para a função, podendo ser uma frase qualquer ou até mesmo retorno de funções e objetos.
                  <br></br>Quando passamos por exemplo uma variavel do tipo Vector2 para ele, o que ele escreverá será um vetor com 2 pontos (100, 90) por exemplo, que seria o valor da nossa variável do tipo Vector2 no momento!
                  <br></br>O Debug.Log também tem algumas variações para tipos de mensagens diferentes (como Debug.LogError ou Debug.LogWarning) mas para simplesmente testar nossa aplicação e buscar granularmente onde o nosso erro se encontra, um Debug.Log comum serve sempre!

                  <br></br>
                  <br></br><b>O Console</b>, a janela onde todas as suas mensagens de tempo de execução serão mostradas, não só as suas (ou seja, onde você escreveu "Debug.Log"), mas também de seus pacotes e onde os erros simples e críticos de sua aplicação serão avisados para você pela Unity.
                </p>
                <p>Com o Debug.Log e o Console em mãos, você já tem as ferramentas para investigar quase qualquer comportamento estranho no seu jogo. Mas alguns erros são tão comuns entre os iniciantes que vale a pena conhecê-los antes mesmo de encontrá-los, para quando aparecerem no seu Console, você saber exatamente o que fazer e é isso que veremos no próximo tópico.</p>
                <h3 className='gamedevTitle link' id='erroscomuns'>Erros Comuns de Iniciante</h3>
                <p>Agora vamos falar rapidamente dos erros mais comuns de aparecerem no seu Console quando iniciante, para você ter uma ideia geral de onde buscar para corrigí-los.</p>
                <p>Temos dois erros principais que devem somar cerca de 80% dos seus erros no começo que são:
                  <br></br><b>NullReferenceException: Object reference not set to an instance of an object.</b> Esse erro acontece quando você tenta acessar/alterar/ler uma variável que não tem valor (null). Acontece principalmente quando você cria uma variável com [SerializeField] e da play para testar o seu jogo sem antes setar o valor dessa variável no Inspector.
                  <br></br><b>IndexOutOfRangeException.</b> Acontece quando temos um array/lista/coleção e tentamos acessar uma posição inexistente nesses tipos (por exemplo, tenho uma lista com 3 elementos e tento acessar a posição 5).
                  <br></br><b>MissingComponentException.</b> Mais raro de acontecer, mas acontece quando utilizamos a função GetComponent, que falamos anteriormente, e tentamos pegar um componente que não existe no nosso objeto (por exemplo, dando um GetComponentRigidbody2D() e termos esquecido de adicionar um Rigidbody2D no nosso GameObject).
                </p>
                <p>Uma dica valiosa: clicar duas vezes na mensagem de erro no Console geralmente abre o script exatamente na linha onde o problema ocorreu(ou caso isso não funcione, na propria mensagem de texto conseguimos ler a linha onde cada erro ocorreu)
                  <br></br>Outra dica importante é que, se o erro ocorre em uma variável que conversa com muitos scripts, ao clicar na mensagem de erro ela exibirá uma cascata de onde esse erro está se propagando, como:
                  <br></br>
                  <br></br>
                  <i>NullReferenceException: Object reference not set to an instance of an object.
                    <br></br>PlayerHealth.DamagePlayer (System.int32 damageTaken) (at Assets/Scripts/Player/Combat/PlayerHealth.cs:26)
                    <br></br>GameManager.Start() (at Assets/Scripts/Managers/GameManager.cs:15)
                  </i>
                  <br></br>
                  <br></br>Isso quer dizer que o erro aconteceu em PlayerHealth.DamagePlayer() na linha 26, que foi chamada por GameManager.Start() na linha 15. Com isso podemos investigar se o nosso erro está realmente dentro da nossa função que aconteceu o erro ou nas funções que chamaram ela por causa de algum erro de inicialização (por exemplo: chamar uma função passando um parametro nulo)
                </p>
                <p>Com isso encerramos a seção que é o coração deste livro: aprender a pensar como desenvolvedor, não apenas seguir passos ou tutoriais.
                  <br></br>Você agora sabe quebrar uma ideia em componentes, organizar seu código para escalar, e usar as ferramentas certas para debugar quando algo sai errado.
                  <br></br>No próximo módulo, vamos usar essas habilidades para conectar tudo isso em um jogo com fluxo completo: do menu ao game over, navegando entre cenas.
                </p>
              </div>
            </div>
            <RightBar></RightBar>
        </div>
        <Footer></Footer>
    </div>
  );
}

export default GameDevTutorial;