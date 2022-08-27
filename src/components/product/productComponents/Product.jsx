import React from 'react';
import styles from '../../product/Product.css'

function Product ({image,disc,price,group,discount,discounted,description}) {
    const hasDisc = disc;

    return (
          <div className="product-item">
            <div className="overlay">
              <a href="productDetails.html" className="product-thumb">
                <img src={image} alt="" />
              </a>
              {
                hasDisc === 0 ? <span className="discount">{discount}</span> : <span className="no-discount"></span>
              }            
            </div>
            <div className="product-info">
              <span>{group}</span>
              <a href="productDetails.html">{description}</a>
              {
                hasDisc === 0 ? <p className="priceB4">{discounted}</p> : null
              }
              <h4>{price}</h4>
            </div>
          </div>
    )
}

export default Product;