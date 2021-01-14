const measurementId = "G-4YKFNBSCKM";

const win = window;

function gtag() {
  win.dataLayer.push(arguments);
}

const gaProvider = {
  init: async function () {
    await addScriptTag();
  },

  page: (url, title, properties) => {
    gtag("event", "page_view", {
      page_title: title,
      page_location: url,
      ...properties,
    });
  },

  identify: (user, properties) => {
    gtag("config", measurementId, {
      user_id: user,
      ...properties,
    });
  },

  track: (eventName, properties) => {
    gtag("event", eventName, properties);
  },
};

function addScriptTag() {
  return new Promise((resolve, reject) => {
    const scriptElement = document.createElement("script");
    scriptElement.async = true;
    scriptElement.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
    scriptElement.addEventListener("load", (event) => {
      resolve(event);
    });
    scriptElement.addEventListener("error", (event) => {
      reject(event);
    });

    document.head.insertBefore(scriptElement, document.head.firstElementChild);

    win.dataLayer = win.dataLayer || [];
    gtag("js", new Date());
    gtag("config", measurementId);

    // Disable default pageview measurement (required for SPAs)
    gtag("config", measurementId, {
      send_page_view: false,
    });
  });
}

export { gaProvider };
