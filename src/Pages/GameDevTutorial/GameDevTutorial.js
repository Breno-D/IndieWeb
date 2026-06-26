import '../index.css';
import './gamedevtutorial.css';
import Header from '../../Components/Header/Header.js'
import Navbar from '../../Components/Header/Navbar.js';
import Leftbar from '../../Components/LeftBar/Leftbar.js';
import RightBar from '../../Components/RightBar/RightBar.js';
import Footer from '../../Components/Footer/Footer.js';

import unityinstallhub from './Images/unityhubinstall.png';
import installvs from './Images/vscodeinstall.png';

function GameDevTutorial() {
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
                <a href='#primeirospassos'><h2>Primeiros Passos</h2></a>
                <a href='#ferramentas'><p className='gamedevSubtitle'>--Escolhendo suas Ferramentas</p></a>
                <a href='#ferramentascomplementares'><p className='gamedevSubtitle'>--Ferramentas Complementares</p></a>
                <a href='#instalando'><p className='gamedevSubtitle'>--Instalando Ferramentas Necessárias</p></a>
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
              </div>
            </div>
            <RightBar></RightBar>
        </div>
        <Footer></Footer>
    </div>
  );
}

export default GameDevTutorial;