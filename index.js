import { gaProvider } from "./ga-provider.js";

const btnLoadGA = document.querySelector("#btn-init-ga");
btnLoadGA.addEventListener("click", () => gaProvider.init());

const btnSendPageView = document.querySelector("#btn-send-pageview");
btnSendPageView.addEventListener("click", () =>
  gaProvider.page(location.href, "Testing analytics")
);
