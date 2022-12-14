import { useContext } from 'react';
import CartContext from '../../store/cart-context';
import classes from './MealItem.module.css';
import MealItemForm from './MealItemForm';

const MealItem = (props) =>{

    const cartCTX = useContext(CartContext);

    const price = `$${props.price.toFixed(2)}`;

    const addToCartHandler = (amount) => {
        console.log("amount", amount);
        cartCTX.addItem({
            id: props.id,
            name: props.name,
            amount: amount,
            price: props.price
        });
        console.log("adding cart");
        console.log("adding cart k niche", cartCTX);
    };

    return (
        <li className={classes.meal}>
            <div>
                <h3 >{props.name}</h3>
                <div className={classes.description}>{props.description}</div>
                <div className={classes.price}>{price}</div>
            </div>
            <div><MealItemForm id={props.id} onAddToCart={addToCartHandler}/></div>
            
        </li>
    );
};
export default MealItem;