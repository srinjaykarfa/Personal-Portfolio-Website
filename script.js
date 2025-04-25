// Wait for DOM to be fully loaded
$(document).ready(() => {
    const navbar = $(".navbar");
    const scrollBtn = $(".scroll-up-btn");
    const menu = $(".navbar .menu");
    const menuBtn = $(".menu-btn i");
    
    // Throttle scroll event for better performance
    let lastScrollTime = 0;
    const scrollThreshold = 100; // ms between scroll events
    
    $(window).scroll(() => {
        const currentTime = new Date().getTime();
        if (currentTime - lastScrollTime < scrollThreshold) return;
        lastScrollTime = currentTime;

        const scrollY = window.scrollY;
        
        // Toggle navbar sticky class
        navbar.toggleClass("sticky", scrollY > 20);
        
        // Toggle scroll button visibility
        scrollBtn.toggleClass("show", scrollY > 500);
    });

    // Smooth scroll to top
    scrollBtn.click(() => {
        $("html, body").animate(
            { scrollTop: 0 },
            {
                duration: 0,
                easing: 'easeInOutQuart'
            }
        );
        return false;
    });

    // Smooth scroll for menu items
    $(".navbar .menu li a").click(function() {
        $("html").css("scrollBehavior", "smooth");
    });

    // Toggle mobile menu
    $(".menu-btn").click(() => {
        menu.toggleClass("active");
        menuBtn.toggleClass("active");
    });

    // Initialize typing animations
    const commonTypingConfig = {
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    };

    new Typed(".typing", {
        ...commonTypingConfig,
        strings: [
            "Web Developer",
            "Designer",
            "Problem Solver",
            "Full Stack Developer"
        ]
    });

    new Typed(".typing-2", {
        ...commonTypingConfig,
        strings: [
            "Fullstack Developer",
            "Web Developer",
            "C programmer",
            "Founder",
            "Author"
        ]
    });

    // Initialize carousel with optimized settings
    $(".carousel").owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        lazyLoad: true,
        responsive: {
            0: { items: 1 },
            600: { items: 2 },
            1000: { items: 3 }
        }
    });
});

// Scroll Animation
const scrollElements = document.querySelectorAll('.scroll-animate');

const elementInView = (el, percentageScroll = 100) => {
  const elementTop = el.getBoundingClientRect().top;
  return (
    elementTop <= 
    ((window.innerHeight || document.documentElement.clientHeight) * (percentageScroll/100))
  );
};

const displayScrollElement = (element) => {
  element.classList.add('active');
};

const hideScrollElement = (element) => {
  element.classList.remove('active');
};

const handleScrollAnimation = () => {
  scrollElements.forEach((el) => {
    if (elementInView(el, 100)) {
      displayScrollElement(el);
    } else {
      hideScrollElement(el);
    }
  });
};

// Add scroll event listener
window.addEventListener('scroll', () => {
  handleScrollAnimation();
});

// Initial check for elements in view
window.addEventListener('load', () => {
  handleScrollAnimation();
});