import nav from "../../components/nav";
import brand from "../../components/brand";
import footer from "../../components/footer";

let Home = {
  render: async () => {
    let view = `
    <div class="container">
    ${nav}

    <div>
    <h1>Inserir componentes aqui!!!</h1>
    </div>
    <section>${brand}</section>

    ${footer}
    </div>`;

    return view;
  },
  after_render: async () => {},
};

export default Home;
