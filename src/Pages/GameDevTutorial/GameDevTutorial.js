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
                <p>Abaixo você vai encontrar um tutorial (que vai ser mais atualizado conforme o tempo) de como começar a sua jornada de desenvolvimento de jogos (majoritariamente para programadores, mas com dicas em geral para todos).</p>
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
                <span onClick={() => scrollToSection('unityideastoscript')}><p className='gamedevSubtitle'>--Traduzindo Ideias em Scripts</p></span>
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
                <img src={heranca}></img>
                <p>E este é o layout que eu uso normalmente:<br></br>Hierarquia e Inspetor à direita, Projeto e Console abertos ao mesmo tempo abaixo</p>
                <img src={heranca}></img>
                <p>Após selecionar um objeto na hierarquia conseguimos ver no inspetor os seus detalhes, ali podemos ver que um objeto é composto por vários componentes, como transform, SpriteRenderer etc que são instancias de scripts da unity, ou seja, são objetos da Classe Transform, SpriteRenderer etc que compoẽ o nosso GameObject, ou podemos dizer que o nosso GameObject <b>tem um</b> Transform e <b>tem um</b> SpriteRenderer.</p>
                <img src={heranca}></img>
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
                <h3 className='gamedevTitle link' id='unityideastoscript'>Traduzindo Ideias em Scripts</h3>
                <p></p>
              </div>
            </div>
            <RightBar></RightBar>
        </div>
        <Footer></Footer>
    </div>
  );
}

export default GameDevTutorial;