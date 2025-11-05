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


