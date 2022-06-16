import nav from "../../components/nav";
import footer from "../../components/footer";
import detalhesProduto from "../../components/detalhesProduto";

let Detalhes = {
  render: async () => {
    let view = `
    <div class="container">
    ${nav}

    <div>
      ${detalhesProduto}
    </div>


    ${footer}
    </div>`

    return view;
  },
  after_render: async () => {},
};

export default Detalhes;
