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
	  "I'm a fast learner (I think)",
	],
	loop: true,
	typeSpeed: 93,
	backSpeed: 70,
	backDelay: 1500,
  });
  
  /* ----- scroll ani----- */
  const scrollReveal = ScrollReveal({
	origin: "top",       // Keeping the origin as "top" for most elements
	distance: "70px",    
	duration: 1500,      
	easing: "ease-in-out",
	reset: true,         // Reset the animation after it's completed, so it can trigger again on scroll
  });
  

  scrollReveal.reveal(".featured-text-card", {
	delay: 200,            // Slight delay to stagger 
	distance: "80px",     
	duration: 1200,        // Slower reveal for better effect
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
  
  // Project Section Animation with interval for multiple elements
  scrollReveal.reveal(".project-box", {
	interval: 200,        
	delay: 200,            // Adds a slight delay for each element
	distance: "80px",      // A more subtle distance for a smooth reveal
	duration: 1000,        
	easing: "ease-out",   
  });
  
  scrollReveal.reveal(".top-header", {
	delay: 300,           
	distance: "60px",      // Smaller distance for headings
	duration: 1000,        
	easing: "ease-in-out"  
  });
  
  
  /* ----- modal----- */
// Function to Open Modal
function openPopup(box) {
	const modal = document.getElementById("project-modal");
	const title = box.getAttribute("data-title");
	const description = box.getAttribute("data-description");
	const link = box.getAttribute("data-link");
  
	// Set modal content dynamically
	document.getElementById("modal-title").textContent = title;
	document.getElementById("modal-description").textContent = description;
	document.getElementById("modal-link").href = link;
  
	// Show modal with fade-in effect
	modal.classList.add("modal-visible");
	modal.classList.remove("modal-hidden");
  }
  
  // Close Modal Functionality
  function closeModal() {
	const modal = document.getElementById("project-modal");
	modal.classList.add("modal-hidden");
	modal.classList.remove("modal-visible");
  }
  
  // Event listener to close modal when clicking the close button
  document.querySelector(".close").addEventListener("click", closeModal);
  
  // Event listener to close modal when clicking outside the modal
  window.addEventListener("click", (event) => {
	const modal = document.getElementById("project-modal");
	if (event.target === modal) {
	  closeModal();
	}
  });
  
  // Event listener to close modal when pressing the "Esc" key
  window.addEventListener("keydown", (event) => {
	if (event.key === "Escape") {
	  closeModal();
	}
  });
  
  // ----- CHANGE ACTIVE LINK ON SCROLL ----- 
  const sections = document.querySelectorAll("section[id]");
  
  function updateActiveLink() {
	const scrollY = window.scrollY;
  
	sections.forEach((section) => {
	  const sectionHeight = section.offsetHeight;
	  const sectionTop = section.offsetTop - 50; // Optional offset for better active link positioning
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
  
  