import nav from "../../components/nav";
import footer from "../../components/footer";
import banner from "../../components/banner";

let Home = {
  render: async () => {
    let view = `
    <div class="container">
  
    ${nav}
    ${banner}
    

    ${footer}
    </div>`;

    return view;
  },
  after_render: async () => {},
};

export default Home;
