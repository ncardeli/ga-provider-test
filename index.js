import { gaProvider } from "./ga-provider.js";

const btnLoadGA = document.querySelector("#btn-init-ga");
btnLoadGA.addEventListener("click", () => gaProvider.init());

const btnSendPageView = document.querySelector("#btn-send-pageview");
btnSendPageView.addEventListener("click", () =>
  gaProvider.page(location.href, "Testing analytics")
);

const btnSendEvent = document.querySelector("#btn-send-event");
btnSendEvent.addEventListener("click", () =>
  gaProvider.track("test-event", { value: 100 })
);

const btnSendIdentity = document.querySelector("#btn-send-identity");
btnSendIdentity.addEventListener("click", () =>
  gaProvider.identify("test-user-123")
);
