import './Leftbar.css';
import'../../index.css';

function Leftbar() {
  return (
    <div class="left-content">
        <div class="box img-box">
            <img class="img-highlight" src="https://picsum.photos/id/237/200/300"></img>
        </div>
        <div class="box">
            <h4 class="left-about-title">Oláá</h4>
            <p class="left-about-paragraph">Meu nome é Breno e este é o meu cantinho para guardar todas as minhas coisas, meu doces, meus jogos e as game jams que participo :D</p>
        </div>
        <div class="box">
            <h3>BOTÃO DO SITE</h3>
            <div class="site-button-container"><a href="MYWEBSITE"><img src="https://file.garden/Zq0xOX6Iv3i3b1te/Neocities/sylvieButton.gif" alt="zhongvie button" loading="lazy" /></a>
            <textarea>
                &lt;a href="MYWEBSITE"&gt;&lt;img src="https://file.garden/Zq0xOX6Iv3i3b1te/Neocities/sylvieButton.gif" alt="brenordoria button" loading="lazy" /&gt;&lt;/a&gt;
            </textarea>
            </div>
        </div>
        <div class="box game-highlight">
            <h3>ULTIMO JOGO ZERADO</h3>
            <a href="https://store.steampowered.com/app/2435410/Trials_Of_Randoom/" target='blank'><img class="game-highlight-image" src="https://picsum.photos/id/870/200/300?grayscale&blur=2"></img></a> 
        </div>
    </div>
  );
}

export default Leftbar;
