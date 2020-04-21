import { connect } from "react-redux";
import RecommendedProductsList from "../../components/recommended-products-list/RecommendedProductsList.component";
import { fetchProducts } from "../../actions/products.actions";

const mapStateToProps = state => ({
  recommendedProducts: state.productsReducer.recommendedProducts,
});

const mapDispatchToProps = dispatch => ({
  fetchProducts: (limit, type) => dispatch(fetchProducts(limit, type)),
});

export default connect(mapStateToProps, mapDispatchToProps)(RecommendedProductsList)
