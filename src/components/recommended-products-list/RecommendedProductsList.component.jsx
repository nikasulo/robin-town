import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ProductCardList from '../product-card-list/ProductCardList.component';


class RecommendedProductsList extends Component {

  componentDidMount() {
    const { fetchProducts } = this.props;
    fetchProducts(4, 'recommendedProducts')
  }

  render() {
    const { recommendedProducts } = this.props;
    return (
      <div className="recommended-products">
        <ProductCardList
          products={recommendedProducts} 
        />
      </div>
    )
  }
};

RecommendedProductsList.propTypes = {
  fetchProducts: PropTypes.func,
};

RecommendedProductsList.defaultProps = {
  fetchProducts: () => {},
}

export default RecommendedProductsList;
