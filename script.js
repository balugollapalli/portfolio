// Mobile Navigation Toggle
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');
  
  hamburger.addEventListener('click', () => {
      navLinks.classList.toggle('active');
      
      // Animate hamburger to X
      hamburger.classList.toggle('active');
      
      if (hamburger.classList.contains('active')) {
          hamburger.children[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
          hamburger.children[1].style.opacity = '0';
          hamburger.children[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
      } else {
          hamburger.children[0].style.transform = 'none';
          hamburger.children[1].style.opacity = '1';
          hamburger.children[2].style.transform = 'none';
      }
  });
  
  // Smooth scrolling for navigation links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
          e.preventDefault();
          
          // Close mobile menu if open
          if (navLinks.classList.contains('active')) {
              navLinks.classList.remove('active');
              hamburger.classList.remove('active');
              hamburger.children[0].style.transform = 'none';
              hamburger.children[1].style.opacity = '1';
              hamburger.children[2].style.transform = 'none';
          }
          
          const targetId = this.getAttribute('href');
          const targetElement = document.querySelector(targetId);
          
          if (targetElement) {
              targetElement.scrollIntoView({
                  behavior: 'smooth'
              });
          }
      });
  });
  
  // Project Modal Functionality
  const modal = document.getElementById('projectModal');
  const closeModal = document.querySelector('.close-modal');
  
  // Close modal when clicking X
  closeModal.addEventListener('click', () => {
      modal.style.display = 'none';
  });
  
  // Close modal when clicking outside of it
  window.addEventListener('click', (e) => {
      if (e.target === modal) {
          modal.style.display = 'none';
      }
  });
  
  // Form submission
  const contactForm = document.getElementById('contactForm');
  
  if (contactForm) {
      contactForm.addEventListener('submit', (e) => {
          e.preventDefault();
          
          // Get form data
          const formData = new FormData(contactForm);
          const name = formData.get('name');
          
          // Simple form submission feedback (in a real scenario, you'd send this data to a server)
          alert(`Thank you, ${name}! Your message has been received. I'll get back to you soon.`);
          contactForm.reset();
      });
  }
  
  // Scroll reveal animation (simple version)
  window.addEventListener('scroll', revealElements);
  
  function revealElements() {
      const sections = document.querySelectorAll('section');
      
      sections.forEach(section => {
          const sectionPosition = section.getBoundingClientRect().top;
          const screenPosition = window.innerHeight / 1.3;
          
          if (sectionPosition < screenPosition) {
              section.style.opacity = '1';
              section.style.transform = 'translateY(0)';
          }
      });
  }
  
  // Initialize animation on load
  window.addEventListener('load', () => {
      // Set initial state for scroll animations
      const sections = document.querySelectorAll('section');
      sections.forEach(section => {
          if (section.id !== 'header') {
              section.style.opacity = '0';
              section.style.transform = 'translateY(20px)';
              section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
          }
      });
      
      // Call once on load to reveal visible sections
      revealElements();
  });