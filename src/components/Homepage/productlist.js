import { React } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";


const ProductList = () => {
    const products = useSelector(state => state.products);
    return (
        <div className="product-list">
            {products.slice(0,3).map((product) => (
                <Link to ={`/products/${product.id}`} className="product-link" key={product.id}>
                    <div className="product">
                    <img src={product.imageUrl} alt={product.name} />
                    <h2>{product.name}</h2>
                    <p>{product.price}</p>
                </div>
                </Link>
            ))}
        </div>
    );
}

export default ProductList;
