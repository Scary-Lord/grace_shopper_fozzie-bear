import React from 'react';
import { Link } from 'react-router-dom';

const CategoryBoxes = () => {
    return (
        <div className="catagory-boxes">
            <Link to =".products/monitors">
                <h3>Monitors</h3>
            </Link>
            <Link to =".products/keyboards">
                <h3>Keyboards</h3>
            </Link>
            <Link to =".products/mouses">
                <h3>Mouses</h3>
            </Link>
            <Link to ="./products/accessories">
                <h3>Accessories</h3>
            </Link>
        </div>
    )
};

export default CategoryBoxes;