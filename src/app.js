import Utils from "./service/Utils";

import Home from "./views/home";
import ErrorPage from "./views/error";
import Catalogo from "./views/catalogo";
import Detalhes from "./views/detalhes";

let routes = {
  "/": Home,
  "/catalogo": Catalogo,
  "/detalhes": Detalhes,
};

const router = async () => {
  const app = document.getElementById("app");
  let request = Utils.parseRequestURL();

  let parseURL =
    (request.resource ? "/" + request.resource : "/") +
    (request.id ? "/:id" + request.id : "") +
    (request.verb ? "/" + request.verb : "");
  let page = routes[parseURL] ? routes[parseURL] : ErrorPage;

  app.innerHTML = await page.render();
  await page.after_render();
};

window.addEventListener("hashchange", router);

window.addEventListener("hashchange", () => {
  let UrlRoute = window.location.hash;
  let routeTest = UrlRoute.split("?");
  if (routeTest[0] === "#/detalhes") {
    localStorage.setItem("idData", routeTest[1]);
    return window.location.replace("#/detalhes");
  }
  if (routeTest[0] === "#/catalogo") {
    localStorage.setItem("idData", routeTest[1]);
    window.location.replace("#/catalogo");
  }
});

window.addEventListener("load", router);
