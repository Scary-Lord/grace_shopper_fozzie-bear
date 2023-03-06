import React from 'react';
import { Link } from 'react-router-dom';

const CategoryBoxes = () => {
    return (
        <div className="catagory-boxes">
            <Link to ="/products/monitors" className="category-box">
                <h3>Monitors</h3>
            </Link>
            <Link to ="/products/keyboards" className="category-box">
                <h3>Keyboards</h3>
            </Link>
            <Link to ="/products/mouses" className="category-box">
                <h3>Mouses</h3>
            </Link>
            <Link to ="/products/accessories" className="category-box">
                <h3>Accessories</h3>
            </Link>
        </div>
    )
};


export default CategoryBoxes;