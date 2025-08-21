i18next
  .use(i18nextHttpBackend)
  .init(
    {
      lng: "fa",
      fallbackLng: "fa",
      backend: {
        loadPath: "locales/{{lng}}.json",
      },
    },
    (err, t) => {
      if (err) return console.error(err);
      detectUserLang();
    }
  );

function updateContent() {
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    el.innerHTML = i18next.t(el.getAttribute("data-i18n"));
  });

  document.documentElement.lang = i18next.language;
  document.body.style.direction = i18next.language === "en" ? "ltr" : "rtl";
}

function changeLang(lng) {
  i18next.changeLanguage(lng).then(updateContent);
}

function detectUserLang() {
  let lang = "fa";

  const userLang = navigator.language || navigator.userLanguage;
  if (userLang.startsWith("fa")) lang = "fa";
  else if (userLang.startsWith("ar")) lang = "ar";
  else if (userLang.startsWith("en")) lang = "en";

  if (!["fa", "ar", "en"].includes(lang)) {
    fetch("https://ipapi.co/json")
      .then((res) => res.json())
      .then((data) => {
        if (data.country_code === "IR") lang = "fa";
        else if (["AE", "SA", "IQ", "KW", "QA", "BH", "OM", "YE", "SY", "JO", "LB", "EG"].includes(data.country_code)) {
          lang = "ar";
        } else {
          lang = "en";
        }
        changeLang(lang);
      })
      .catch(() => {
        changeLang("fa");
      });
  } else {
    changeLang(lang);
  }
}
