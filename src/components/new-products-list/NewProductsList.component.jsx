import React from 'react';
import PropTypes from 'prop-types';
import ProductCardList from '../product-card-list/ProductCardList.component';
import './new_product_list.styles.scss';

const NewProductsList = ( { fetchProducts, recommendedProducts } ) => {
  fetchProducts(4, 'newProducts')

  return (
    <div className="new-products">
      <ProductCardList
        products={recommendedProducts} 
      />
    </div>
  )
};

NewProductsList.propTypes = {
  fetchProducts: PropTypes.func,
};

NewProductsList.defaultProps = {
  fetchProducts: () => {},
}

export default NewProductsList;
