const menuIcon = document.querySelector(".hamburger-button");
const navbar = document.querySelector(".menu-wrap");
const projects = document.querySelectorAll(
  ".projects-list-item-inner-container"
);

// adds and removes the "change" class from the navbar when you click on the hamburger-menu
menuIcon.addEventListener("click", () => {
  navbar.classList.toggle("active");
});

// clicking on project item
projects.forEach((item) =>
  item.addEventListener("click", () => {
    item.classList.toggle("expand");
  })
);
