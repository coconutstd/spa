import { request } from "../api.js";
import ProductDetail from "../components/ProductDetail.js";

export default class ProductDetailPage {
  constructor({ $target, productId }) {
    this.state = {
      productId,
      product: null,
    };
    this.$target = $target;

    this.$page = document.createElement("div");
    this.$page.className = "ProductDetailPage";
    this.$page.innerHTML = "<h1>상품 정보</h1>";

    this.fetchProduct();
    this.render();
  }

  render = () => {
    if (!this.state.product) {
      this.$target.innerHTML = "Loading...";
    } else {
      this.$target.innerHTML = "";
      this.$target.appendChild(this.$page);
      new ProductDetail({
        $target: this.$target,
        initialState: { product: this.state.product, selectedOptions: [] },
      });
    }
  };

  setState = (nextState) => {
    this.state = nextState;
    this.render();
  };

  async fetchProduct() {
    const { productId } = this.state;
    const product = await request(`/products/${productId}`);
    this.setState({
      ...this.state,
      product,
    });
  }
}
