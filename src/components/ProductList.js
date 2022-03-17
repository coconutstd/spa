import { routeChange } from "../router.js";

export default class ProductList {
  constructor({ $target, initialState }) {
    this.$productList = document.createElement("ul");
    $target.appendChild(this.$productList);
    this.state = initialState;
    this.initEventLister();
    this.render();
  }

  render = () => {
    if (!this.state) {
      return;
    }
    this.$productList.innerHTML = `
            ${this.state
              .map(
                (product) =>
                  `<li class="Product" data-product-id="${product.id}">
                    <img src="${product.imageUrl}">
                    <div class="Product__info">
                        <div>${product.name}</div>
                        <div>${product.price}</div>
                    </div>
                </li>
                `
              )
              .join("")}
        `;
  };

  setState = (nextState) => {
    this.state = nextState;
    this.render();
  };

  initEventLister() {
    this.$productList.addEventListener("click", (e) => {
      const $li = e.target.closest("li");
      const { productId } = $li.dataset;

      if (productId) {
        routeChange(`./products/${productId}`);
      }
    });
  }
}
