import { React } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const KeyboardList = () => {
    const products = useSelector(state => state.products);
    const keyboards = products.filter(product => product.category === 'keyboards')
    return (
        <div className='keyboard-list'>
            {keyboards.map((keyboard) => (
                <Link to ={`/products/${keyboard.id}`} className='keyboard-link' key={keyboard.id}>
                    <div className='keyboard'>
                        <img src={keyboard.image} alt={keyboard.name} />
                        <h2>{keyboard.name}</h2>
                        <p>{keyboard.price}</p>
                    </div>
                </Link>
            ))}
        </div>
    );
}

export default KeyboardList;