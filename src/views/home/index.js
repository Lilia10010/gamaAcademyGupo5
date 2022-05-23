import nav from "../../components/nav";
import footer from "../../components/footer";

let Home = {
  render: async () => {
    let view = `
    <div class="container">
    ${nav}

    <div>
    <h1>Inserir componentes aqui!!!</h1>
    </div>

    ${footer}
    </div>`;

    return view;
  },
  after_render: async () => {},
};

export default Home;
