import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart} from '@fortawesome/free-solid-svg-icons'

import './Product.css';

const Product = ({ product, handelAddToCart }) => {
    
    //  console.log(product)
    const { name, img, seller, price, ratings, shipping } = product;
    

    return (
        <div className='product' data-aos="zoom-in">
                <img src={img} alt="" />
            <div className='product-info'>
                <p className='product-name'>{name}</p>
                <p className='product-price'>Price: ${price} <span className='shipping'>Shipping: ${shipping }</span></p>
                <p className='manufacture'>Manufacturer: {seller}</p>
                <p className='Rating'>Rating: {ratings} star</p>
            </div>
            <button className='button-cart' onClick={() => handelAddToCart(product)}>
                <p className='button-text'>Add to Cart</p>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>

        </div>
    );
};

export default Product;