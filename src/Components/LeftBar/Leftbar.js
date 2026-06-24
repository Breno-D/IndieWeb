import './Leftbar.css';
import'../../Pages/index.css';
import mybutton from '../../myButton.gif'

function Leftbar() {
  return (
    <div className="left-content">
        <div className="box img-box">
            <img className="img-highlight" src="https://picsum.photos/id/237/200/300"></img>
        </div>
        <div className="box">
            <h4 className="left-about-title">Oláá</h4>
            <p className="left-about-paragraph">Meu nome é Breno e este é o meu cantinho para guardar todas as minhas coisas, meu doces, meus jogos e as game jams que participo :D</p>
        </div>
        <div className="box">
            <h3>Botão do Site</h3>
            <div className="site-button-container"><a href="MYWEBSITE"><img src={mybutton} alt="brenordoria button" /></a>
                <textarea defaultValue={'<a href="MYWEBSITE"><img src="MYBUTTONWEBSITE" alt="brenordoria button" loading="lazy" /><a/>'}>
                </textarea>
            </div>
            <h6>Não fazer Hotlink</h6>
        </div>
        <div className="box game-highlight">
            <h3>Ultimo Jogo Zerado</h3>
            <a href="https://store.steampowered.com/app/2435410/Trials_Of_Randoom/" target='blank'><img class="game-highlight-image" src="https://picsum.photos/id/870/200/300?grayscale&blur=2"></img></a> 
        </div>
    </div>
  );
}

export default Leftbar;
