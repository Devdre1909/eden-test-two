const ctaWithButton = document.querySelectorAll(".cta__action");

Array.from(ctaWithButton).forEach(function (element) {
  if (element.dataset.expand === "meal") {
    element.addEventListener("click", function (e) {
      e.preventDefault();
      const availableExpendable = document.querySelectorAll(".cta--expandable");

      const elToExpend = Array.from(availableExpendable).find(
        (item) => item.dataset.expand === "meal"
      );

      if (elToExpend) {
        elToExpend.classList.toggle("cta--expand");
        if (document.body.style.overflow === "hidden") {
          document.body.style.overflow = "auto";
        } else {
          document.body.style.overflow = "hidden";
        }
      }
    });
  }
});

const foodImage = document.querySelectorAll(".cta__list__item img");
const foodList = document.querySelector(".cta__list");
const closeList = document.querySelector(".cta__list > span");

Array.from(foodImage).forEach(function (element) {
  element.addEventListener("click", (e) => {
    setTimeout(() => {
      e.target.classList.add("img--open");
    }, 750);
    foodList.classList.add("img--open");
  });
});

closeList.addEventListener("click", () => {
  Array.from(foodImage).forEach((el) => {
    if (el.classList.contains("img--open")) {
      el.classList.remove("img--open");
    }
  });
  foodList.classList.remove("img--open");
});
