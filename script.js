// Initialize GSAP ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// Initialize Splitting
const results = Splitting();

// Initialize smooth scrolling
const lenis = new Lenis({
    lerp: 0.2,
    smooth: true
});

lenis.on('scroll', () => ScrollTrigger.update());

function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

// Animation
function initAnimation() {
    const title = document.querySelector('.content__title[data-splitting][data-effect25]');
    const chars = title.querySelectorAll('.char');
    
    // Add CSS for tighter letter spacing
    title.style.letterSpacing = '-0.0001em';
    chars.forEach(char => {
        char.style.marginRight = '-0.05em';
    });
    
    // Reset initial state
    gsap.set(chars, {
        opacity: 1,
        transformOrigin: "0% 100%",
        scaleY: 0,
        scaleX: 1
    });
    
    // Create timeline for the animation
    gsap.timeline({
        scrollTrigger: {
            trigger: title,
            start: "top top+=30%",
            end: "+=1000%",
            scrub: 3,
            pin: true,
            anticipatePin: 1,
            markers: false,
            pinSpacing: true
        }
    })
    .to(chars, {
        duration: 3,
        scaleY: 1,
        stagger: {
            each: 0.5,
            from: "start",
            ease: "none"
        },
    });
}

// Wait for everything to be ready
window.addEventListener('load', () => {
    initAnimation();
}); 