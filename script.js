 tsParticles.load("particles-js", {
    particles: {
      number: { value: 60 },
      color: { value: "#00bcd4" },
      links: { enable: true, color: "#00bcd4" },
      move: { enable: true, speed: 1 },
    },
  });

  // Menu toggle (for mobile navigation)
  const menuToggle = document.querySelector(".menu-toggle");
  const navMenu = document.querySelector("nav ul");

  if (menuToggle) {
    menuToggle.onclick = () => {
      navMenu.classList.toggle("show");
    };
  }

  // Navbar active link on scroll

 
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".right ul li a");

  window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 120;
      const sectionHeight = section.offsetHeight;
      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        current = section.getAttribute("id");
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove("active");
      if (current && link.getAttribute("href").includes(current)) {
        link.classList.add("active");
      }
      if (scrollY < 200 && link.getAttribute("href") === "#home") {
        link.classList.add("active");
      }
    });
  });


const roles = ["Web Developer", "Designer", "Programmer", "Tech Enthusiast"];
let i = 0, j = 0, current = "", isDeleting = false;

function type() {
  const typing = document.getElementById("typing-text");
  current = roles[i];
  typing.textContent = current.substring(0, j);

  if (!isDeleting && j < current.length) {
    j++;
    setTimeout(type, 150); // slower typing speed
  } else if (isDeleting && j > 0) {
    j--;
    setTimeout(type, 80); // slower deleting speed
  } else {
    if (!isDeleting) {
      isDeleting = true;
      setTimeout(type, 1200); // pause before deleting
    } else {
      isDeleting = false;
      i = (i + 1) % roles.length;
      setTimeout(type, 500); // pause before next word
    }
  }
}
type();
