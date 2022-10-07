import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt} from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import './ReviewItem.css'

const ReviewItem = ({ product, handelRemoveItem }) => {
    const { name, price, quantity, img, shipping, id } = product;
    return (
        <div className='review-item'>
            <div>
                <img src={img} alt="" />
            </div>
            <div className='review-details-container'>
                <div className='review-details'>
                    <h5>{name}</h5>
                    <p><small>Price: ${price}</small></p>
                    <p><small>Quantity: {quantity}</small></p>
                    <p><small>Shipping: ${ shipping}</small></p>

                </div>
                <div className='delete-container'>
                    <button className='delete-button' onClick={() => handelRemoveItem(id)}>
                        <FontAwesomeIcon icon={faTrashAlt} className='delete-item'></FontAwesomeIcon>
                    </button>
                    

                </div>

            </div>
            
        </div>
    );
};

export default ReviewItem;