function toggleMenu() {
	const menu = document.getElementById("myNavMenu");
	menu.classList.toggle("responsive");
  }
  
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
  
  new Typed(".typedText", {
	strings: [
	  "I'm an undergraduate student",
	  "I'm an aspiring AI / ML engineer",
	  "I'm an aspiring software engineer",
	  "I'm a fast learner (I think)",
	],
	loop: true,
	typeSpeed: 93,
	backSpeed: 70,
	backDelay: 1500,
  });

  function updateLink() {
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
  
  window.addEventListener("scroll", updateLink);
  
  const scrollReveal = ScrollReveal({
	origin: "top",       
	distance: "70px",    
	duration: 1500,      
	easing: "ease-in-out",
	reset: true,         
  });

  function openPopup(b) {
	const modal = document.getElementById("project-modal");
	const title = b.getAttribute("data-title");
	const description = b.getAttribute("data-description");
	const link = b.getAttribute("data-link");
  	document.getElementById("modal-title").textContent = title;
	document.getElementById("modal-description").textContent = description;
	document.getElementById("modal-link").href = link;
  	modal.classList.add("modal-visible");
	modal.classList.remove("modal-hidden");
  }

  

  scrollReveal.reveal(".featured-text-card", {
	delay: 200,           
	distance: "80px",     
	duration: 1200,       
  });
  scrollReveal.reveal(".featured-name", { 
	delay: 300, 
	distance: "70px", 
	duration: 1200 
  });
  scrollReveal.reveal(".featured-text-info", { 
	delay: 400, 
	distance: "60px", 
	duration: 1200 
  });
  scrollReveal.reveal(".featured-text-btn", { 
	delay: 500, 
	distance: "60px", 
	duration: 1000 
  });
  scrollReveal.reveal(".social_icons", { 
	delay: 600, 
	distance: "50px", 
	duration: 1000 
  });
  scrollReveal.reveal(".featured-image", { 
	delay: 700, 
	distance: "100px", 
	duration: 1300, 
	origin: "bottom",    
  });
  scrollReveal.reveal(".gif-container", { 
	delay: 800, 
	distance: "90px", 
	duration: 1300 
  });
  
  scrollReveal.reveal(".project-box", {
	interval: 200,        
	delay: 200,            
	distance: "80px",      
	duration: 1000,        
	easing: "ease-out",   
  });
  
  scrollReveal.reveal(".top-header", {
	delay: 300,           
	distance: "60px",     
	duration: 1000,        
	easing: "ease-in-out"  
  });
  
  
function closeModal() {
	const modal = document.getElementById("project-modal");
	modal.classList.add("modal-hidden");
	modal.classList.remove("modal-visible");
  }


	document.querySelector(".close").addEventListener("click", closeModal);
  
  window.addEventListener("click", (event) => {
	const modal = document.getElementById("project-modal");
	if (event.target === modal) {
	  closeModal();
	}
  });
  
  window.addEventListener("keydown", (event) => {
	if (event.key === "Escape") {
	  closeModal();
	}
  });
  
  const sections = document.querySelectorAll("section[id]");
  

  
  window.addEventListener("scroll", updateLink);
  
  