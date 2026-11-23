
// LANGUAGE SWITCHER

const languageBtn = document.getElementById("language-btn");

let currentLanguage = "fa";

languageBtn.addEventListener("click", function () {

  currentLanguage = currentLanguage === "fa" ? "en" : "fa";

  document.documentElement.lang = currentLanguage;

  document.documentElement.dir =
    currentLanguage === "fa" ? "rtl" : "ltr";

  document.body.classList.toggle(
    "english",
    currentLanguage === "en"
  );

  document.querySelectorAll("[data-fa]").forEach(element => {

    const newText = element.dataset[currentLanguage];

    if (newText) {
      element.textContent = newText;
    }

  });

  languageBtn.textContent =
    currentLanguage === "fa" ? "EN" : "FA";

});


// MOBILE MENU

const menuBtn = document.getElementById("menu-btn");
const navbar = document.getElementById("navbar");

menuBtn.addEventListener("click", function () {
  navbar.classList.toggle("active");
});

document.querySelectorAll(".navbar a").forEach(link => {
  link.addEventListener("click", function () {
    navbar.classList.remove("active");
  });
});


// SHOPPING CART

let cartCount = 0;

const cartCounter = document.getElementById("cart-count");

document.querySelectorAll(".buy-btn").forEach(button => {

  button.addEventListener("click", function () {

    cartCount++;

    cartCounter.textContent = cartCount;

    if (currentLanguage === "fa") {
      alert("محصول با موفقیت به سبد خرید اضافه شد!");
    } else {
      alert("Product added to your shopping cart!");
    }

  });

});


// CART BUTTON

document.querySelector(".cart").addEventListener("click", function () {

  if (currentLanguage === "fa") {
    alert("تعداد محصولات سبد خرید: " + cartCount);
  } else {
    alert("Products in your cart: " + cartCount);
  }

});
