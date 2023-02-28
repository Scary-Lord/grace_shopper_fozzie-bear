import { React } from "react";

const products = [
    { name: "APPE KEYBOARD",
    price: 100,
    image: "https://source.unsplash.com/random/200x200",
    },
    { name: "SAMSUNG MONITOR",
    price: 200,
    image: "https://source.unsplash.com/random/200x200",
    },
    { name: "APPLE MOUSE",
    price: 75,
    image: "https://source.unsplash.com/random/200x200",
    },
]

const ProductList = () => {
    return (
        <div>
            {products.map((product) => (
                <div className="product">
                    <img src={product.image} alt={product.name} />
                    <h2>{product.name}</h2>
                    <p>{product.price}</p>
                </div>
            ))}
        </div>
    );
}

export default ProductList;