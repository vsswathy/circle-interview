const element = document.querySelectorAll(".badge__char");
const step = 360/element.length;

element.forEach((elem, i) => {
  elem.style.setProperty('--char-rotate', (i * step) + 'deg');
})

const foo = (360 / 7);

for (i = 0; i <= 7; i++) {
  console.log((i * foo) + 'deg');
}
gsap.registerPlugin('ScrollTrigger');

// Your existing GSAP and ScrollTrigger animations
const intro = document.querySelector(".intro-text");

const introAnimation = gsap.to(intro, { y: 500, duration: 1 });

ScrollTrigger.create({
  trigger: intro,
  end: "+=500",
  animation: introAnimation,
  scrub: 2,
  markers: false,
});

const clipAnimation = gsap.fromTo(".hero-image", {
  clipPath: "inset(8% 2% 0% round 15px)"
}, {
  clipPath: "inset(0% 0% 0% 0% round 15px)",
  duration:1
});

ScrollTrigger.create({
  animation: clipAnimation,
  trigger: ".hero-image",
  start: () => 'center top+=' + document.querySelector('.gallery').offsetHeight / 1,
  endTrigger: "#hero-2",
  end: () => 'center top+=' + document.querySelector('.gallery').offsetHeight / 2,
  scrub: 1,
  pin: '.gallery',
  pinType: "transform",
  markers: false,
 
});

// New animation sequence
gsap.registerPlugin(ScrollTrigger);

// Set up the initial state
gsap.set(".hero-2", { y: "100%", opacity: 1});

// Create a timeline for the animations
const tl = gsap.timeline();

tl.to(".section1", { opacity: 0, duration: 1 })
  .to("#hero-2", { y: "0%", opacity: 1, duration: 1 }, "-=1")
  .to(".hero-image", { opacity: 1, duration: 1 }, "-=0.5");

// ScrollTrigger for the timeline
ScrollTrigger.create({
  trigger: ".container-fluid",
  start: "top top",
  animation: tl,
  toggleActions: "play none none reverse",
});
