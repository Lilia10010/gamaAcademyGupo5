import nav from "../../components/nav";
import footer from "../../components/footer";
import filtersLeftCatalog from "../../components/filtersLeftCatalog";
import filtersRightCatalog from "../../components/filtersRightCatalog";

let Catalogo = {
  render: async () => {
    let view = `
    <div class="container">
    ${nav}

    <div class="container-catalog">
      <div class="container-left-right">
        ${filtersLeftCatalog}
        ${filtersRightCatalog}
      </div>

    </div>


    ${footer}
    </div>`

    return view;
  },
  after_render: async () => {},
};

export default Catalogo;
