import nav from "../../components/nav";
import footer from "../../components/footer";
import filtersProducts from "../../components/filtersProducts";

let Products = {
  render: async () => {
    let view = `
    <div class="container">
    ${nav}

    <div>
    ${filtersProducts}
    </div>

    ${footer}
    </div>`

    return view;
  },
  after_render: async () => {},
};

export default Products;
