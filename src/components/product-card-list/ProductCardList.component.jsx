import React from 'react';
import PropTypes from 'prop-types';
import './product_card_list.styles.scss';
import ProductCard from '../product-card/ProductCard.component';

const ProductCardList = ( { products } ) => {
  return (
    <div className="product-card-list row-with-wrap">
      {products.map(product => <ProductCard key={product.id} product={product}/>)}
    </div>
  )
};

ProductCardList.propTypes = {
  products: PropTypes.arrayOf(Object),
};

ProductCardList.defaultProps = {
  products: [],
};

export default ProductCardList;
