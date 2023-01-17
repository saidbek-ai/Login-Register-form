// Changing form register to login
const login = document.querySelector(".login");
const create = document.querySelector(".create");
const container = document.querySelector(".container");

login.onclick = function () {
  container.classList.add("signinForm");
};

create.onclick = function () {
  container.classList.remove("signinForm");
};
