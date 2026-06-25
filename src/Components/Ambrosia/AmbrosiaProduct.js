import wppimage from "../../Pages/Ambrosia/whatsapp.png"
import '../../Pages/Ambrosia/ambrosiapage.css'

export default function AmbrosiaProduct({ product }) {
  return (
    <div className='productbox'>
      <img className='productimg' src={product.cover}></img>
      <div className='productdesc'>
        <h3 className="ambrosia-title-text">{product.title}</h3>
        <p className="ambrosia-subtext">{product.desc}</p>
        <div className='productfinalize'>
          <p className="ambrosia-subtext">{product.value}</p>
          <a href="https://wa.me/+5535988129145" target="blank"><img className='buyimage' src={wppimage}></img></a>
        </div>
      </div>
    </div>
  );
}
