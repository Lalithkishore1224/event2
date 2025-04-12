document.addEventListener('DOMContentLoaded', function() {
  // Initialize Vanta.js background
  VANTA.NET({
    el: "#vanta-background",
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: 200.00,
    minWidth: 200.00,
    scale: 1.00,
    scaleMobile: 1.00,
    color: 0xeb5808,
    backgroundColor: 0x000000,
    points: 10.00,
    maxDistance: 20.00,
    spacing: 16.00
  });

  // Initialize particles.js
  particlesJS('particles-js', {
    "particles": {
      "number": {
        "value": 50,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": "#eb5808"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#000000"
        },
        "polygon": {
          "nb_sides": 5
        }
      },
      "opacity": {
        "value": 0.5,
        "random": true,
        "anim": {
          "enable": true,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 3,
        "random": true,
        "anim": {
          "enable": true,
          "speed": 2,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 150,
        "color": "#eb5808",
        "opacity": 0.2,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 1,
        "direction": "none",
        "random": true,
        "straight": false,
        "out_mode": "out",
        "bounce": false,
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 600
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "bubble"
        },
        "onclick": {
          "enable": true,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 400,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 250,
          "size": 0,
          "duration": 2,
          "opacity": 0,
          "speed": 3
        },
        "repulse": {
          "distance": 400,
          "duration": 0.4
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true
  });

  // Apply animation delays to text elements
  const textElements = document.querySelectorAll('.text-animation');
  textElements.forEach((el, index) => {
    el.style.animationDelay = `${index * 0.05}s`;
  });

  // Apply animation delays to form groups
  const formGroups = document.querySelectorAll('.form-group');
  formGroups.forEach((el, index) => {
    el.style.animationDelay = `${index * 0.1}s`;
  });

  // Password visibility toggle
  const togglePassword = document.querySelector('.toggle-password');
  const passwordInput = document.getElementById('password');

  if (togglePassword && passwordInput) {
    togglePassword.addEventListener('click', function() {
      const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
      passwordInput.setAttribute('type', type);
      this.classList.toggle('fa-eye');
      this.classList.toggle('fa-eye-slash');
    });
  }

  // Password strength meter
  const passwordStrength = document.querySelector('.password-strength');
  const strengthMeterFill = document.querySelector('.strength-meter-fill');
  const strengthText = document.querySelector('.strength-text');

  if (passwordInput && passwordStrength && strengthMeterFill && strengthText) {
    passwordInput.addEventListener('input', function() {
      const value = passwordInput.value;

      if (value.length > 0) {
        passwordStrength.style.display = 'block';

        // Check password strength
        let strength = 0;
        let feedback = '';

        // Length check
        if (value.length >= 8) {
          strength += 25;
        }

        // Uppercase check
        if (/[A-Z]/.test(value)) {
          strength += 25;
        }

        // Number check
        if (/[0-9]/.test(value)) {
          strength += 25;
        }

        // Special character check
        if (/[^A-Za-z0-9]/.test(value)) {
          strength += 25;
        }

        // Update strength meter
        strengthMeterFill.style.width = `${strength}%`;

        // Change color based on strength
        if (strength <= 25) {
          strengthMeterFill.style.backgroundColor = '#ff4747';
          feedback = 'Weak';
        } else if (strength <= 50) {
          strengthMeterFill.style.backgroundColor = '#ffa534';
          feedback = 'Fair';
        } else if (strength <= 75) {
          strengthMeterFill.style.backgroundColor = '#ffff00';
          feedback = 'Good';
        } else {
          strengthMeterFill.style.backgroundColor = '#2bd965';
          feedback = 'Strong';
        }

        strengthText.textContent = feedback;
      } else {
        passwordStrength.style.display = 'none';
      }
    });
  }

  // Parallax effect for leaves
  const parallaxElements = document.querySelectorAll('[data-parallax-speed]');

  window.addEventListener('mousemove', function(e) {
    const mouseX = e.clientX;
    const mouseY = e.clientY;

    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;

    const centerX = windowWidth / 2;
    const centerY = windowHeight / 2;

    const moveX = (mouseX - centerX) / centerX;
    const moveY = (mouseY - centerY) / centerY;

    parallaxElements.forEach(element => {
      const speed = parseFloat(element.getAttribute('data-parallax-speed'));
      const x = moveX * 30 * speed;
      const y = moveY * 30 * speed;

      element.style.transform = `translate(${x}px, ${y}px) scale(1)`;
    });
  });

  // Loading animation for button
  const form = document.getElementById('registrationForm');
  const submitButton = document.getElementById('btn');

  if (form && submitButton) {
    form.addEventListener('submit', function(e) {
      e.preventDefault();

      // Add loading class to button
      submitButton.classList.add('loading');

      // Simulate form submission (replace with actual AJAX call)
      setTimeout(() => {
        // Remove loading class
        submitButton.classList.remove('loading');

        // Show confetti effect
        confetti({
          particleCount: 200,
          spread: 100,
          origin: { x: 0.5, y: 0.5 },
          colors: ['#eb5808', '#ffffff', '#333333'],
          shapes: ['circle', 'square'],
          ticks: 500,
          disableForReducedMotion: true
        });

        // Advanced confetti burst
        setTimeout(() => {
          const duration = 3000;
          const animationEnd = Date.now() + duration;
          const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 100 };

          function randomInRange(min, max) {
            return Math.random() * (max - min) + min;
          }

          const interval = setInterval(function() {
            const timeLeft = animationEnd - Date.now();

            if (timeLeft <= 0) {
              return clearInterval(interval);
            }

            const particleCount = 50 * (timeLeft / duration);

            // Use different random coordinates
            confetti({
              ...defaults,
              particleCount,
              origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 }
            });
            confetti({
              ...defaults,
              particleCount,
              origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 }
            });
          }, 250);
        }, 1000);

        alert("ACCOUNT HAS BEEN CREATED SUCCESSFULLY");
      }, 2000);
    });
  }

  // Input field focus effect
  const inputs = document.querySelectorAll('.input-field');

  inputs.forEach(input => {
    input.addEventListener('focus', function() {
      this.parentElement.classList.add('input-focused');
    });

    input.addEventListener('blur', function() {
      this.parentElement.classList.remove('input-focused');
    });
  });

  // 3D tilt effect for form container
  const formContainer = document.querySelector('.form-container');

  if (formContainer) {
    formContainer.addEventListener('mousemove', function(e) {
      const rect = this.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const xPercent = x / rect.width;
      const yPercent = y / rect.height;

      const maxRotate = 2; // Maximum rotation in degrees
      const rotateX = (0.5 - yPercent) * maxRotate;
      const rotateY = (xPercent - 0.5) * maxRotate;

      this.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });

    formContainer.addEventListener('mouseleave', function() {
      this.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
    });
  }

  // Typing animation for headings (alternative)
  function typeEffect(element, speed) {
    const text = element.innerHTML;
    element.innerHTML = '';

    let i = 0;
    const timer = setInterval(function() {
      if (i < text.length) {
        element.append(text.charAt(i));
        i++;
      } else {
        clearInterval(timer);
      }
    }, speed);
  }

  // Floating elements animation enhancement
  const floatingElements = document.querySelectorAll('.floating-element');

  window.addEventListener('mousemove', function(e) {
    const mouseX = e.clientX;
    const mouseY = e.clientY;

    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;

    floatingElements.forEach((element, index) => {
      const moveX = (mouseX / windowWidth - 0.5) * 20;
      const moveY = (mouseY / windowHeight - 0.5) * 20;

      // Add a subtle movement based on mouse position
      element.style.transform = `translate(${moveX * (index + 1) * 0.1}px, ${moveY * (index + 1) * 0.1}px)`;
    });
  });
});
