i18next.use(i18nextHttpBackend).init(
  {
    lng: "fa", // 👈 پیش‌فرض فارسی
    fallbackLng: "fa",
    backend: {
      loadPath: "locales/{{lng}}.json",
    },
  },
  (err, t) => {
    if (err) return console.error(err);
    updateContent(); // وقتی JSON لود شد
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
