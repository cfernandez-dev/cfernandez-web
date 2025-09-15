// Simplified JavaScript for English-only portfolio
// Features: smooth scrolling, active navigation, and Instagram detection

// Function to detect if accessing from Instagram
function isInstagramBrowser() {
    const userAgent = navigator.userAgent.toLowerCase();
    return userAgent.includes('instagram') || 
           userAgent.includes('fbav') || 
           userAgent.includes('fban') ||
           window.location.href.includes('l.instagram.com') ||
           window.location.href.includes('instagram.com');
}

// Function to redirect to Instagram optimized version
function redirectToInstagramVersion() {
    if (isInstagramBrowser()) {
        const currentUrl = window.location.href;
        const baseUrl = currentUrl.split('?')[0].replace(/\/$/, '');
        const instagramUrl = baseUrl + '/instagram.html';
        
        // Add original URL parameters if they exist
        const urlParams = window.location.search;
        if (urlParams) {
            window.location.href = instagramUrl + urlParams;
        } else {
            window.location.href = instagramUrl;
        }
        return true;
    }
    return false;
}

document.addEventListener('DOMContentLoaded', function() {
    // Check if it's Instagram and redirect
    if (redirectToInstagramVersion()) {
        return;
    }

    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Highlight active navigation link based on scroll
    function updateActiveNavLink() {
        const sections = document.querySelectorAll('section[id]');
        const navLinks = document.querySelectorAll('.nav-link');
        
        let currentSection = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            const scrollPosition = window.scrollY + 100; // Offset to activate before
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                currentSection = section.getAttribute('id');
            }
        });

        // Update navigation links
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' + currentSection) {
                link.classList.add('active');
            }
        });
    }

    // Run on load and on scroll
    window.addEventListener('scroll', updateActiveNavLink);
    updateActiveNavLink(); // Run on page load
});