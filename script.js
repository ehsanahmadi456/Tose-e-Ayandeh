const langBtn = document.getElementById("langBtn");
const langMenu = document.getElementById("langMenu");
const currentLang = document.getElementById("currentLang");
const arrowIcon = document.getElementById("arrowIcon");

langBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  const isHidden = langMenu.classList.contains("hidden");

  // باز کردن منو با انیمیشن
  if (isHidden) {
    langMenu.classList.remove("hidden");
    setTimeout(() => {
      langMenu.classList.remove("opacity-0", "scale-95");
      langMenu.classList.add("opacity-100", "scale-100");
      arrowIcon.classList.add("rotate-180");
    }, 10);
  } else {
    closeMenu();
  }
});

// بستن منو وقتی بیرون کلیک میکنی
document.addEventListener("click", (e) => {
  if (!langBtn.contains(e.target) && !langMenu.contains(e.target)) {
    closeMenu();
  }
});

function closeMenu() {
  langMenu.classList.add("opacity-0", "scale-95");
  langMenu.classList.remove("opacity-100", "scale-100");
  arrowIcon.classList.remove("rotate-180");
  setTimeout(() => {
    langMenu.classList.add("hidden");
  }, 150);
}

// انتخاب زبان
function selectLang(lng) {
  const labels = {
    fa: "fa - فارسی",
    en: "en - English",
    ar: "ar - العربية",
  };
  currentLang.textContent = labels[lng];

  // اگر i18next داشتی اینجا بذار:
  // i18next.changeLanguage(lng).then(updateContent);

  closeMenu();
}

var module_43688894253 =
  ($(document).ready(function () {
    var hc = $(".circlesBig .contCircle .circle").height();
    $(".circlesBig .contCircle .circle").width(hc);
  }),
  void $(window).resize(function () {
    var hc = $(".circlesBig .contCircle .circle").height();
    $(".circlesBig .contCircle .circle").width(hc);
  }));
