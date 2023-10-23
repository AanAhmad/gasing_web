document.addEventListener("DOMContentLoaded", function () {
  const back = document.getElementById("backB");
  const front = document.getElementById("frontB");
  const titleB = document.getElementById("titleB");
  const titleBm = document.getElementById("titleBm");
  const xp_btn = document.getElementById("xp-btn");
  const sub = document.getElementById("sub");
  const descB = document.getElementById("descB");

  window.addEventListener("scroll", function () {
    let value = this.scrollY;
    console.log(value);
    front.style.transform = "translateY(" + value * 0.2 + "px)";
    back.style.transform = "translateY(" + value * 0.3 + "px)";
    titleB.style.transform = "translateY(" + value * 0.3 + "px)";
    titleBm.style.transform = "translateY(" + value * 0.3 + "px)";
    xp_btn.style.transform = "translateY(" + value * 0.3 + "px)";
    sub.style.transform = "translateY(" + value * 0.3 + "px)";
    descB.style.transform = "translateY(" + value * 0.3 + "px)";
  });
});

function checkScroll() {
  var elements = document.querySelectorAll("section");

  elements.forEach(function (element) {
    let top = window.scrollY;
    let offset = element.offsetTop - 470;
    let height = element.offsetHeight;
    if (top >= offset && top <= offset + height) {
      element.classList.add("show-animate");
    } else {
      element.classList.remove("show-animate");
    }
  });
}

window.addEventListener("load", function () {
  checkScroll();
});

window.addEventListener("scroll", function () {
  checkScroll();
});
