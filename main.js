//Make NavBar transparent when it is on the top
const navbar = document.getElementById("navbar");
const navbarToggle = document.querySelector(".navbar__toggle-btn");
const navbarHeight = navbar.getBoundingClientRect().height;

document.addEventListener("scroll", changeNavBgColor);

function changeNavBgColor() {
  if (window.scrollY > navbarHeight) {
    navbar.classList.add("navbar--dark");
    navbarToggle.classList.add("navToggle--margin");
  } else {
    navbar.classList.remove("navbar--dark");
    navbarToggle.classList.remove("navToggle--margin");
  }
}

//Handle scrolling when tapping on the navbar menu and contact me button
const navbarMenu = document.querySelector(".navbar__menu");
const contactBtn = document.querySelector(".home__contactBtn");

navbarMenu.addEventListener("click", scrollToSection);
contactBtn.addEventListener("click", scrollToSection);

function scrollToSection(e) {
  const target = e.target;
  const link = target.dataset.link;
  const scroll = document.querySelector(link);

  if (link) {
    scroll.scrollIntoView({
      behavior: "smooth",
    });
  }
}

//Make Home section transparent when it is scrolled to top
const home = document.getElementById("home");
const homeContainer = document.querySelector(".home__container");
const homeHeight = home.getBoundingClientRect().height;

document.addEventListener("scroll", changeHomeFade);

function changeHomeFade() {
  homeContainer.style.opacity = 1 - window.scrollY / homeHeight;
}

//Arrow up button
const arrowup = document.querySelector(".arrowupBtn");

document.addEventListener("scroll", displayBtn);
arrowup.addEventListener("click", scrollToTop);

function displayBtn() {
  window.scrollY > homeHeight / 2
    ? arrowup.classList.add("displayBtn")
    : arrowup.classList.remove("displayBtn");
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

//Filltering works when tapping on the button
const workBtnContainer = document.querySelector(".work__categories");
const projectsContainer = document.querySelector(".work__projects");
const projects = document.querySelectorAll(".project");

workBtnContainer.addEventListener("click", filterProjects);

function filterProjects(e) {
  const workBtnData = e.target.dataset.filter;
  const parentNodeData = e.target.parentNode.dataset.filter;

  projectsContainer.classList.add("animation--out");
  setTimeout(() => {
    projects.forEach((i) => {
      if (parentNodeData) {
        if (parentNodeData !== "*" && i.dataset.type !== parentNodeData) {
          i.classList.add("project--invisible");
        } else {
          i.classList.remove("project--invisible");
        }
      } else {
        if (workBtnData !== "*" && i.dataset.type !== workBtnData) {
          i.classList.add("project--invisible");
        } else {
          i.classList.remove("project--invisible");
        }
      }
    });
    projectsContainer.classList.remove("animation--out");
  }, 300);

  //Remove selection from the previous item and select the new item
  const selected = document.querySelector(".selected");
  const selectItem = e.target;
  selected.classList.remove("selected");
  selectItem.classList.add("selected");
}
