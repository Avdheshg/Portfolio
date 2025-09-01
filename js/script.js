
// Sound effects - Using Web Audio API for better control
const AudioContext = window.AudioContext || window.webkitAudioContext;
let audioContext;

// Initialize audio context on first user interaction
function initAudioContext() {
    if (!audioContext) {
        audioContext = new AudioContext();
    }
}

// Add subtle interaction effects
document.addEventListener('DOMContentLoaded', function () {
    const skillTags = document.querySelectorAll('.skill-tag');

    skillTags.forEach(tag => {
        // Add click animation
        tag.addEventListener('click', function () {
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = '';
            }, 150);
        });

        // Add stagger animation on load
        const delay = Math.random() * 2000;
        setTimeout(() => {
            tag.style.animation = 'fadeInUp 0.6s ease-out forwards';
        }, delay);
    });
});

// CSS animation for fade in
const style = document.createElement('style');
style.textContent = `
            .skill-tag {
                opacity: 0;
                transform: translateY(20px);
            }
            
            @keyframes fadeInUp {
                from {
                    opacity: 0;
                    transform: translateY(20px);
                }
                to {
                    opacity: 1;
                    transform: translateY(0);
                }
            }
        `;
document.head.appendChild(style);

// Section Navigation
function showSection(targetSectionId) {
    // Hide all sections
    document.querySelectorAll('.section').forEach(section => {
        section.classList.remove('active');
    });

    // Remove active class from all nav links
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
    });

    // Show target section
    const targetSection = document.getElementById(targetSectionId);
    if (targetSection) {
        targetSection.classList.add('active');
    }

    // Add active class to clicked nav link
    const activeLink = document.querySelector(`[data-section="${targetSectionId}"]`);
    const navLinks = document.querySelectorAll('.mobile-nav .nav-link');
    // console.log(activeLink);
    if (activeLink) {
        activeLink.classList.add('active');
        Array.from(navLinks).forEach(el => {
            if (el.textContent === activeLink.textContent)
            {
                el.classList.toggle('active');
            }
        });
    }
}



// Event Listeners
document.addEventListener('DOMContentLoaded', function () {
    // Navigation click handlers
    document.querySelectorAll('[data-section]').forEach(element => {
        element.addEventListener('click', function () {
            const targetSection = this.getAttribute('data-section');
            showSection(targetSection);
        });
    });

    // Meditation sound for name hover
    const heroName = document.getElementById('hero-name');
    const audio = document.getElementById('hover-sound');

    if (heroName) {
        console.log("Hoverred...")

        heroName.addEventListener('mouseenter', () => audio.play());
        heroName.addEventListener('mouseleave', () => audio.pause());
    }
});


// *** Hamburger   ***
const mobileToggle = document.getElementById('mobile-toggle');
const mobileNav = document.getElementById('mobile-nav');
const navLinks = document.querySelectorAll('.mobile-nav .nav-link');
// console.log(Array.from(navLinks).forEach(el => {console.log(el.textContent)}));

console.log(mobileNav, mobileNav, navLinks);

// Toggle menu on click
mobileToggle.addEventListener('click', () => {
    console.log("mobile toggle")
    mobileToggle.classList.toggle('active');
    mobileNav.classList.toggle('active');
});

// Close menu when a link is clicked (optional but recommended)
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileToggle.classList.remove('active');
        mobileNav.classList.remove('active');
    });
});

const unmuteButton = document.getElementById('unmute-button');
const audio = document.getElementById('hover-sound');

// unmuteButton.addEventListener('click', () => {
//     console.log("Playing...")
//     audio.muted = false;
//     audio.play().catch(error => {
//         console.error('Unmute and playback failed:', error);
//     });
// });

// Keyboard navigation (optional)
document.addEventListener('keydown', function (e) {
    const sections = ['hero', 'experience', 'skills', 'projects', 'education', 'contact'];
    const currentSection = document.querySelector('.section.active').id;
    const currentIndex = sections.indexOf(currentSection);

    if (e.key === 'ArrowLeft' && currentIndex > 0) {
        showSection(sections[currentIndex - 1]);
    } else if (e.key === 'ArrowRight' && currentIndex < sections.length - 1) {
        showSection(sections[currentIndex + 1]);
    }
});


