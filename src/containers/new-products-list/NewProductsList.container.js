import { connect } from "react-redux";
import { fetchProducts } from "../../actions/products.actions";
import NewProductsList from "../../components/new-products-list/NewProductsList.component";

const mapStateToProps = state => ({
  recommendedProducts: state.productsReducer.newProducts,
});

const mapDispatchToProps = dispatch => ({
  fetchProducts: (limit, type) => dispatch(fetchProducts(limit, type)),
});

export default connect(mapStateToProps, mapDispatchToProps)(NewProductsList)
