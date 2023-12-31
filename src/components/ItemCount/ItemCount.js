import "./ItemCount.css"
import { useState } from "react"
const ItemCount = ({stock, onAdd})=> {
    const [quantity, setQuantity] = useState(initial)
    const increment = () => {
        if(quantity < stock) {
            setQuantity(quantity+1)
        }
    }

    const decrement = () => {
        if(quantity > 1) {
            setQuantity(quantity - 1)
        }
    }

    return(
        <div className="Counter">
            <div className="Controls">
                <button className="button" onClick={decrement}>-</button>
                <h4 className="Number">{quantity}</h4>
                <button className="button" onClick={increment}>+</button>
            </div>
            <div>
                <button className="button" onClick={() => onAdd(quantity)} disabled={!stock}>agregar producto</button>
            </div>
        </div>
    )
}

export default ItemCount;