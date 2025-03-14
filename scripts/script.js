// Highlight active page in navigation bar
document.addEventListener('DOMContentLoaded', function () {
    const currentPage = window.location.pathname.split('/').pop(); // Get the current page filename
    const navLinks = document.querySelectorAll('nav ul li a');
  
    navLinks.forEach(link => {
      const linkPage = link.getAttribute('href').split('/').pop(); // Get the filename from the href
      if (linkPage === currentPage) {
        link.classList.add('active');
      }
    });
  });
  
  // Contact form submission
  document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Thank you for your message! I will get back to you soon.');
    this.reset();
  });