/*====================== Toggle Icon Navbar =============================*/

let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("fa-xmark");
  navbar.classList.toggle("active");
};

/*====================== Scroll section active link =============================*/

let sections = document.querySelector("section");
let navLinks = document.querySelector("header nav a");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach.apply((links) => {
        links.classList.remove("active");
        document
          .querySelector("header nav a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });

  /*====================== Sticky navbar =============================*/

  let header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 100);

  /*====================== Remove toggel icon and navbar =============================*/
  menuIcon.classList.remove("fa-xmark");
  navbar.classList.remove("active");
};

/*====================== Scroll Reveal =============================*/
ScrollReveal({
  distance: "80px",
  duration: 2000,
  delay: 200,
});

ScrollReveal().reveal(".home-content, header", { origin: "top" });
ScrollReveal().reveal(
  ".home-img, .skill-container, .portfolio-box, .contact form",
  { origin: "buttom" }
);
ScrollReveal().reveal(".home-content h1, .about-img", { origin: "left" });
ScrollReveal().reveal(".home-content p, .about-container", { origin: "right" });

/*====================== Scroll Reveal =============================*/

const typed = new Typed(".multiple-text", {
  strings: [
    "Frontend Developer",
    "Software Engineer",
    "C++ Programmer",
    "Web Developer",
  ],
  typeSpeed: 70,
  backspeed: 70,
  loop: true,
});
