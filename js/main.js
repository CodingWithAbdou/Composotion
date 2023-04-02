// Make Images Change If You Click  On Bottom

let bulets = document.querySelectorAll(".control li"),
  imgs = document.querySelectorAll(".images img");

bulets.forEach((li) => {
  li.addEventListener("click", () => {
    bulets.forEach((li) => {
      li.classList.remove("active");
    });
    li.classList.add("active");
    imgs.forEach((img) => {
      img.style.display = "none";
    });
    document.querySelector(`.images [alt='${li.dataset.num}']`).style.display =
      "block";
  });
});

// btn Show The Menu

let toggle = document.querySelector(".the-toggle"),
  menu = document.querySelector("header .navbar");

toggle.addEventListener("click", () => {
  toggle.classList.toggle("active");
  menu.classList.toggle("active");
});

// Show button scrolling top  and add Event cilck

let btnTop = document.querySelector(".top-page");

window.addEventListener("scroll", () => {
  this.scrollY >= 600
    ? btnTop.classList.add("active")
    : btnTop.classList.remove("active");
});

btnTop.addEventListener("click", () => {
  scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
