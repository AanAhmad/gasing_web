let wrap = document.getElementById("wrap");
let xp_btn = document.getElementById("exp-btn");
let sub = document.getElementById("sub");

wrap.addEventListener("scroll", function () {
  let value = this.scrollTop;
  let roundvalue = Math.round(value);
  xp_btn.style.transform = "translateY(" + roundvalue * 0.3 + "px)";
  sub.style.transform = "translateY(" + roundvalue * 0.3 + "px)";
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("slideDown");
    } else {
      entry.target.classList.remove("slideDown");
    }
  });
});