// CA Anshul Gupta & Associates — main.js
(function () {
  'use strict';

  // Init AOS (scroll animations)
  if (window.AOS) {
    AOS.init({
      duration: 700,
      easing: 'ease-out-cubic',
      once: true,
      offset: 60,
    });
  }

  // Sticky navbar shadow on scroll
  const navbar = document.getElementById('navbar');
  const onScroll = () => {
    if (!navbar) return;
    if (window.scrollY > 30) navbar.classList.add('scrolled');
    else navbar.classList.remove('scrolled');
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // Mobile hamburger menu
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('navLinks');
  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('open');
      navLinks.classList.toggle('open');
    });
    // Close when clicking a link
    navLinks.querySelectorAll('a').forEach((a) => {
      a.addEventListener('click', () => {
        hamburger.classList.remove('open');
        navLinks.classList.remove('open');
      });
    });
  }

  // Animated counters for stats
  const counters = document.querySelectorAll('[data-count]');
  const animateCounter = (el) => {
    const target = parseInt(el.getAttribute('data-count'), 10);
    const duration = 1600;
    const start = performance.now();
    const step = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      el.textContent = Math.floor(eased * target).toLocaleString();
      if (progress < 1) requestAnimationFrame(step);
      else el.textContent = target.toLocaleString() + (target === 98 ? '' : '+');
    };
    requestAnimationFrame(step);
  };
  if ('IntersectionObserver' in window && counters.length) {
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.4 });
    counters.forEach((c) => obs.observe(c));
  }

  // Smooth scroll for hash links (same-page only)
  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener('click', (e) => {
      const id = link.getAttribute('href');
      if (id.length > 1) {
        const target = document.querySelector(id);
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    });
  });

  // Footer year
  const yr = document.getElementById('year');
  if (yr) yr.textContent = new Date().getFullYear();

  // Contact form submission via FormSubmit
  const form = document.getElementById('contactForm');
  const success = document.getElementById('formSuccess');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const btn = form.querySelector('button[type="submit"]');
      const originalBtnHtml = btn.innerHTML;
      btn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Sending...';
      btn.disabled = true;

      fetch('https://formsubmit.co/ajax/guptacaanshul@gmail.com', {
        method: 'POST',
        headers: {
          'Accept': 'application/json'
        },
        body: new FormData(form)
      })
      .then(response => response.json())
      .then(data => {
        form.reset();
        if (success) {
          success.hidden = false;
          setTimeout(() => { success.hidden = true; }, 5000);
        }
      })
      .catch(error => {
        console.error('Error:', error);
        alert('Oops! There was a problem submitting your form. Please try again.');
      })
      .finally(() => {
        btn.innerHTML = originalBtnHtml;
        btn.disabled = false;
      });
    });
  }
})();
