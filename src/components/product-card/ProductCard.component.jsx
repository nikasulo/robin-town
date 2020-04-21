import React from 'react';
import './product_card.styles.scss';
import PropTypes from 'prop-types';

// id: 13755824
// name: "Reebok Zig Kinetica sneakers in black"
// price: {current: {…}, previous: {…}, rrp: {…}, isMarkedDown: false, isOutletPrice: false, …}
// colour: ""
// colourWayId: 16563489
// brandName: "Reebok"
// hasVariantColours: false
// hasMultiplePrices: false
// groupId: null
// productCode: 1591377
// productType: "Product"
// url: "reebok/reebok-zig-kinetica-sneakers-in-black/prd/13755824?clr=&colourWayId=16563489"
// imageUrl: "images.asos-media.com/products/reebok-zig-kinetica-sneakers-in-black/13755824-1-black"
// isSellingFast: false

const ProductCard = ( { product } ) => {
  const { imageUrl, name, price } = product;
  const { current: { text } } = price;

  const style = {
    backgroundImage: `url(${"https://"+ imageUrl})`,
  }

  return (
    <div className="product-card">
      <div className="product-card-image" style={style}>

      </div>
      <p className="product-name">{ name }</p>
      <p className="product-price">{text}</p>
    </div>
  )
};

ProductCard.propTypes = {
  product: PropTypes.objectOf(String),
};

ProductCard.defaultProps = {
  product: {},
}

export default ProductCard;