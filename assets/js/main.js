/* ----- NAVIGATION BAR FUNCTION ----- */
function toggleMenu() {
	const menu = document.getElementById("myNavMenu");
	menu.classList.toggle("responsive");
  }
  
  /* ----- ADD SHADOW ON NAVIGATION BAR WHILE SCROLLING ----- */
  window.onscroll = addHeaderShadow;
  
  function addHeaderShadow() {
	const header = document.getElementById("header");
	const scrollPosition = document.body.scrollTop || document.documentElement.scrollTop;
  
	if (scrollPosition > 50) {
	  header.style.boxShadow = "0 1px 6px rgba(0, 0, 0, 0.1)";
	  header.style.height = "70px";
	  header.style.lineHeight = "70px";
	} else {
	  header.style.boxShadow = "none";
	  header.style.height = "90px";
	  header.style.lineHeight = "90px";
	}
  }
  
  /* ----- TYPING EFFECT ----- */
  new Typed(".typedText", {
	strings: [
	  "I'm an undergraduate student",
	  "I'm an aspiring AI / Machine Learning engineer",
	  "I'm an aspiring software engineer",
	  "I'm a quick learner (I think)",
	],
	loop: true,
	typeSpeed: 93,
	backSpeed: 70,
	backDelay: 2000,
  });
  
  /* ----- SCROLL REVEAL ANIMATION ----- */
  const scrollReveal = ScrollReveal({
	origin: "top",
	distance: "80px",
	duration: 2000,
	reset: true,
  });
  
  // Home Section Animations
  scrollReveal.reveal(".featured-text-card");
  scrollReveal.reveal(".featured-name", { delay: 100 });
  scrollReveal.reveal(".featured-text-info", { delay: 200 });
  scrollReveal.reveal(".featured-text-btn", { delay: 200 });
  scrollReveal.reveal(".social_icons", { delay: 200 });
  scrollReveal.reveal(".featured-image", { delay: 300 });
  scrollReveal.reveal(".gif-container", { delay: 200 });
  
  // Project Section Animation
  scrollReveal.reveal(".project-box", { interval: 200 });
  
  // Headings Animation
  scrollReveal.reveal(".top-header");
  
  /* ----- MODAL POPUP FUNCTIONALITY ----- */
  function openPopup(box) {
	const modal = document.getElementById("project-modal");
	const title = box.getAttribute("data-title");
	const description = box.getAttribute("data-description");
	const link = box.getAttribute("data-link");
  
	document.getElementById("modal-title").textContent = title;
	document.getElementById("modal-description").textContent = description;
	document.getElementById("modal-link").href = link;
  
	modal.style.display = "block";
  }
  
  // Close Modal Functionality
  document.querySelector(".close").onclick = () => {
	document.getElementById("project-modal").style.display = "none";
  };
  
  window.onclick = (event) => {
	const modal = document.getElementById("project-modal");
	if (event.target === modal) {
	  modal.style.display = "none";
	}
  };
  
  /* ----- CHANGE ACTIVE LINK ON SCROLL ----- */
  const sections = document.querySelectorAll("section[id]");
  
  function updateActiveLink() {
	const scrollY = window.scrollY;
  
	sections.forEach((section) => {
	  const sectionHeight = section.offsetHeight;
	  const sectionTop = section.offsetTop - 50;
	  const sectionId = section.getAttribute("id");
  
	  const link = document.querySelector(`.nav-menu a[href*=${sectionId}]`);
	  if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
		link.classList.add("active-link");
	  } else {
		link.classList.remove("active-link");
	  }
	});
  }
  
  window.addEventListener("scroll", updateActiveLink);
  