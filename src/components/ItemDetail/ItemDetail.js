import "./ItemDetail.css"
import ItemCount from "../ItemCount/ItemCount"

const ItemDetail = ({ id, name, img, description, price, stock }) => {
    return(
        <article className="CardItem">
            <header className="Header">
                <h2 className="ItemHeader">
                    {name}
                </h2>
            </header>
            <picture>
                <img src={img} alt={name} className="ItemImg" />
            </picture>
            <section>
                <p className="Info"> Descripcion: {description} </p>
                <p className="Info"> Precio ${price}</p>
            </section>
            <footer className="ItemFooter">
                <ItemCount inital={1} stock={stock} onAdd={(quantity) => console.log("cantidad agregada" , quantity )}/>
            </footer>
        </article>
    )
}


export default ItemDetail;