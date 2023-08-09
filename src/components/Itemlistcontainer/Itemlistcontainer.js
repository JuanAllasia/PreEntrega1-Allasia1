import "./Itemlistcontainer.css"
import fox from "./assets/fox.jpg"
import swift from "./assets/swift.jpg"
import pew from "./assets/pew.jpg"
const Itemlistcontainer = ({greeting}) => {
    return(
        <>
        <h2 class="h2index">Productos</h2>
        <div className="main">
        <div class="divsproductos">
            <img src={fox} alt="" className="imgproductos"/>
            <p>buzo fox</p>
            <p>$11300</p>
            <a href="">comprar</a>
        </div>
        <div class="divsproductos">
            <img src={swift} alt="" className="imgproductos"/>
            <p>buzo swift</p>
            <p>$13200</p>
            <a href="">comprar</a>
        </div>
        <div class="divsproductos">
            <img src={pew} alt="" className="imgproductos"/>
            <p>buzo pew pew</p>
            <p>$10450</p>
            <a href="">comprar</a>
        </div>
    </div>
        </>


    )
}

export default Itemlistcontainer;