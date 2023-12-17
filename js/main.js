let btn = document.querySelector("header button");
let ul = document.querySelector("header .container .content ul");
btn.onclick = function () {
  ul.classList.toggle("active");
};
ul.onclick = function () {
  ul.classList.remove("active");
};
