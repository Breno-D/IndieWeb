import '../index.css';
import './about.css';
import Header from '../../Components/Header/Header.js'
import Navbar from '../../Components/Header/Navbar.js';
import Leftbar from '../../Components/LeftBar/Leftbar.js';
import RightBar from '../../Components/RightBar/RightBar.js';
import BlogPreview from "../../Components/Blog/BlogPreview.js";
import GameJamPreview from "../../Components/GameJam/GameJamPreview.js";
import LatestGameRelease from "../../Components/GameJam/LatestGameRelease.js";

import Footer from '../../Components/Footer/Footer.js';

function About() {
  return (
    <div className="mainContainer">
      <Header></Header>
      <Navbar></Navbar>
        <div className="mainContent">
            <Leftbar></Leftbar>
            <div className="middle-content">
              <div className='box mainContent-box'>
                  <h3>Sobre Mim</h3>
                  <div className='basic-info'>
                    <div className='basic-info-text'>
                      <p>Nome: Breno R. D.</p>
                      <p>Pronomes: Ele/Dele</p>
                      <p>Idade: 27 Anos</p>
                      <p>Linguas: Portugues/Ingles e algum dia Chines</p>
                      <p>Hobbies: Cozinhar, Comer, Jogar, Assistir Animes e Odiar IA</p>
                    </div>
                    <img className='basic-info-image' src='https://picsum.photos/200'></img>
                  </div>
                  <div className='divline'></div>
                  <p className='bigabout'>Meu nome é Breno, geralmente em ambientes online eu uso o nome "Largost" - que vem de uma familia que eu criei em um fórum de RPG de naruto há MUITOS anos atrás - ou algum nome engraçadinho do momento!</p>
                  <p className='bigabout'>Desde sempre minha presença online se resumiu a jogos, eu cresci ou jogando video game com meu irmão ou jogando jogos online [a maioria das vezes com meu irmão também] desde um fifinha no video game, até jogos online como Club Penguin e jogos de texto como o já mencionado RPG de naruto em fóruns pela internet.</p>
                  <p className='bigabout'>Como eu cresci com jogos, aprendi muito com eles e me tornei quem eu sou hoje graças a eles, eu decidi me tornar um desenvolvedor de jogos e passar isso a diante, e poder também influenciar e ensinar a próxima geração.</p>
                  <p className='bigabout'>Fiz uma faculdade de Ciência da Computação e aprendi a programar de tudo na minha jornada. Logo cedo consegui uma oportunidade de trabalhar em um estudio de desenvolvimento de jogos e lá consegui dar os meus primeiros passos tanto quanto programador de verdade quanto como desenvolvedor de jogos. Muitos outros estúdios de desenvolvimento, lançamentos, NDAs e mentorias depois e me vejo como um programador de jogos completo [apesar de pouca experiência com 3D, sou um ótimo solucionador de problemas e conheço muito de Unity então sei que consigo me virar com qualquer problema apresentado], também tive algumas várias experiências com programação Web e Mobile que me ajudaram a me consolidar como programador e sou capacitado a trabalhar nessas areas também.</p>
                  <p className='bigabout'>Eu sempre fiz muitas GameJams para brincar e me desafiar, mas recentemente estava ficando mais dificil de se juntar um time (e eu não gosto muito de "entrar no discord da jam para procurar time"), então eu comecei a estudar tanto game design mais a fundo quanto arte - em especifico pixelart, por ser o tipe de arte com uma porta de entrada um pouco mais baixo para a minha falta de habilidade artística - para conseguir ser um time de um homem só em GameJams</p>
                  <p className='bigabout'>Eu comecei a gravar estas GameJams de estudo de arte/game design e criei um <a href='https://www.youtube.com/@BrenoMakesGames'>Canal</a>, apesar de ter tido um hiato no mês do meu aniversário que se extendeu por um tempo maior, eu pretendo voltar a gravar para ele com as próximas Jams que eu participar após terminar este site, que por sua vez também serão postadas nesse site :D</p>
                  <p className='bigabout'>Os meus hobbies, além de criar jogos, são assistir anime (apesar de que fazem muitas temporadas que não sigo alguns animes da temporada, como eu fazia religiosamente na minha infância. Agora apenas assisto animes pontuais) e dentro disso recomendar a todos assistirem ONE PIECE, simplesmente o maioral, e cozinhar, apesar de que recentemente comecei a vender os doces que cozinho, então não sei se ainda é considerado um hobbie ou uma segunda ocupação 🤔. Mas como eu sigo fazendo mesmo de graça para me divertir acho que se encaixa!</p>
                  <p className='bigabout'>Eu nunca tive saco para criar uma página que servisse apenas de portifólio para mim. Esse site vem de um descontentamento com a internet atual e com a inspiração vinda dos videos comentando sobre a IndieWeb, que me inspiraram a criar este site e junto com isso pensei que seria um bom lugar para agregar parte dos meus jogos (infelizmente muitos deles são mobile ou estão sob NDA) e funcionaria como um mini portifólio futuramente.</p>
              </div>
            </div>
            <RightBar></RightBar>
        </div>
        <Footer></Footer>
    </div>
  );
}

export default About;