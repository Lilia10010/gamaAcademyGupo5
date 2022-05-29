import nav from "../../components/nav";
import footer from "../../components/footer";
import banner from "../../components/banner";
import menuSelect from "../../components/menuSelect";

let Home = {
  render: async () => {
    let view = `
    <div class="container">
    ${nav}
    ${banner}
    ${menuSelect}
    ${footer}
    </div>`;

    return view;
  },
  after_render: async () => {},
};

export default Home;
