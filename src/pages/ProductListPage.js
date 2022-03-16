import { request } from "../api.js";
import ProductList from "../components/ProductList.js";

export default class ProductListPage {
  constructor({ $target }) {
    this.$target = $target;
    this.state = null;
    this.$page = document.createElement("div");
    this.$page.className = "ProductListPage";
    this.$page.innerHTML = "<h1>상품 목록</h1>";
    this.fetchProducts().then((products) => {
      const productList = new ProductList({
        $target: this.$page,
        initialState: products,
      });
    });
  }

  render() {
    this.$target.appendChild(this.$page);
  }

  setState(nextState) {
    this.state = nextState;
  }

  async fetchProducts() {
    const products = await request("/products");
    this.setState(products);
    return products;
  }
}
