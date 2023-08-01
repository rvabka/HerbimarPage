const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log("entry");
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
});

const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => observer.observe(el));

const menu = document.querySelector(".menu");

menu.addEventListener("click", () => {
  document.querySelector(".navMobile").classList.toggle("active");
  menu.classList.toggle("opened");
});

const createTime = document.querySelector(".info__time");
createTime.innerHTML = `Od 2001 do ${new Date().getFullYear()}`;

const howLong = document.querySelector(".photo__experiance-title");
howLong.innerHTML = `${new Date().getFullYear() - 2001}+`;
