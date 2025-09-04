// Navigation functionality
document.addEventListener('DOMContentLoaded', function() {
    // Get all navigation links and pages
    const navLinks = document.querySelectorAll('.nav-link');
    const pages = document.querySelectorAll('.page');
    
    // Function to show a specific page
    function showPage(pageId) {
        // Hide all pages
        pages.forEach(page => {
            page.classList.remove('active');
        });
        
        // Show the selected page
        const targetPage = document.getElementById(pageId);
        if (targetPage) {
            targetPage.classList.add('active');
        }
        
        // Update active navigation link
        navLinks.forEach(link => {
            link.classList.remove('active-link');
        });
        
        // Find and activate the corresponding nav link
        const activeLink = document.querySelector(`[href="#${pageId}"]`);
        if (activeLink) {
            activeLink.classList.add('active-link');
        }
    }
    
    // Add click event listeners to navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const href = this.getAttribute('href');
            
            if (href && href.startsWith('#')) {
                const pageId = href.substring(1);
                showPage(pageId);
                
                // Scroll to top of the page
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Handle "Read More" links in sections
    const readMoreLinks = document.querySelectorAll('.section a');
    readMoreLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href && href.startsWith('#')) {
                e.preventDefault();
                const pageId = href.substring(1);
                
                if (pageId === 'venue-info') {
                    // Show venue info section within about page
                    showPage('about-page');
                    setTimeout(() => {
                        const venueSection = document.getElementById('venue-info');
                        if (venueSection) {
                            venueSection.style.display = 'block';
                            venueSection.scrollIntoView({
                                behavior: 'smooth',
                                block: 'start'
                            });
                        }
                    }, 100);
                } else {
                    showPage(pageId);
                    
                    // Scroll to top of the page
                    window.scrollTo({
                        top: 0,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
    
    // Handle venue link specifically
    const venueLinks = document.querySelectorAll('.venue-link');
    venueLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            showPage('about-page');
            setTimeout(() => {
                const venueSection = document.getElementById('venue-info');
                if (venueSection) {
                    venueSection.style.display = 'block';
                    venueSection.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }, 100);
        });
    });
    
    // Countdown Timer functionality
    function calculateTimeRemaining() {
        const targetDate = new Date('2026-07-09T00:00:00');
        const now = new Date();
        const difference = targetDate.getTime() - now.getTime();

        if (difference <= 0) {
            return { days: 0, hours: 0, minutes: 0, seconds: 0, expired: true };
        }

        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        return { days, hours, minutes, seconds, expired: false };
    }

    function updateCountdown() {
        const countdown = calculateTimeRemaining();
        const countdownElement = document.getElementById('countdown');
        
        if (!countdownElement) return;

        if (countdown.expired) {
            countdownElement.innerHTML = `
                <div style="font-size: 2rem; font-weight: bold; grid-column: 1 / -1;">
                    Conference is Live!
                </div>
            `;
        } else {
            document.getElementById('days').textContent = countdown.days;
            document.getElementById('hours').textContent = countdown.hours;
            document.getElementById('minutes').textContent = countdown.minutes;
            document.getElementById('seconds').textContent = countdown.seconds;
        }
    }

    // Update countdown every second
    updateCountdown();
    setInterval(updateCountdown, 1000);
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            
            // Skip if it's a page navigation link (handled above)
            if (href === '#home' || href === '#about-page' || href === '#call-for-papers') {
                return;
            }
            
            // Handle other anchor links within the same page
            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Add some interactive effects
    
    // Parallax effect for hero sections (optional enhancement)
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const heroSections = document.querySelectorAll('.landing-section-upper, .cfp-hero');
        
        heroSections.forEach(section => {
            if (section.offsetParent !== null) { // Check if element is visible
                const rate = scrolled * -0.5;
                section.style.transform = `translateY(${rate}px)`;
            }
        });
    });
    
    // Add loading animation for images
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.addEventListener('load', function() {
            this.style.opacity = '1';
        });
        
        // Set initial opacity
        img.style.opacity = '0';
        img.style.transition = 'opacity 0.3s ease';
        
        // If image is already loaded
        if (img.complete) {
            img.style.opacity = '1';
        }
    });
    
    // Add intersection observer for animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    const animatedElements = document.querySelectorAll('.section, .track-card, .date-card, .guideline-card');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
    
    // Mobile menu toggle (if needed for smaller screens)
    const header = document.querySelector('.header');
    let lastScrollTop = 0;
    
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > lastScrollTop && scrollTop > 100) {
            // Scrolling down
            header.style.transform = 'translateY(-100%)';
        } else {
            // Scrolling up
            header.style.transform = 'translateY(0)';
        }
        
        lastScrollTop = scrollTop;
    });
    
    // Add transition to header
    header.style.transition = 'transform 0.3s ease';
    
    console.log('IEEE I2ITCON2026 Website Loaded Successfully!');
});