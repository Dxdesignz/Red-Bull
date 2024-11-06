// Get the header element
const header = document.getElementById('header');

// Function to add/remove glass effect on scroll
window.addEventListener('scroll', function() {
    // Get the vertical position of the scroll
    const scrollPosition = window.scrollY;

    // Check if the user has scrolled past the first section (adjust the value if needed)
    if (scrollPosition > window.innerHeight) {
        header.classList.add('glass');
    } else {
        header.classList.remove('glass');
    }
});

const navbar = document.querySelector(".navbar");
document.querySelector("#menu").onclick = () =>{
    navbar.classList.toggle('active');
}

const closebtn = document.getElementById('close');
closebtn.addEventListener('click', ()=>{
  navbar.classList.remove('active');
});

function animateCounter(id, start, end, duration) {
    const obj = document.getElementById(id);
    let startTime = null;

    const step = (currentTime) => {
        if (!startTime) startTime = currentTime;
        const progress = Math.min((currentTime - startTime) / duration, 1);
        obj.innerText = Math.floor(progress * (end - start) + start) + '+';
        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
    };

    window.requestAnimationFrame(step);
}

document.addEventListener('DOMContentLoaded', () => {
    const counters = [
        { id: 'counter1', start: 0, end: 37, duration: 2000 },
        { id: 'counter2', start: 0, end: 800, duration: 2000 },
        { id: 'counter3', start: 0, end: 7000, duration: 2000 }
    ];

    const counterSection = document.getElementById('counter-section');
    const options = {
        threshold: 0.5 // Trigger when 50% of the section is visible
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                counters.forEach(counter => {
                    animateCounter(counter.id, counter.start, counter.end, counter.duration);
                });
                observer.unobserve(counterSection); // Stop observing once the animation starts
            }
        });
    }, options);

    observer.observe(counterSection);
});

  function camera(){
    const canvas = document.querySelector('.hero canvas');
    const context = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    window.addEventListener("resize", function () {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        render();
    });

    function files(index){
        let data = `img/0060.jpg
        img/0061.jpg
        img/0062.jpg
        img/0063.jpg
        img/0064.jpg
        img/0065.jpg
        img/0066.jpg
        img/0067.jpg
        img/0068.jpg
        img/0069.jpg
        img/0070.jpg
        img/0071.jpg
        img/0072.jpg
        img/0073.jpg
        img/0074.jpg
        img/0075.jpg
        img/0076.jpg
        img/0077.jpg
        img/0078.jpg
        img/0079.jpg
        img/0080.jpg
        img/0081.jpg
        img/0082.jpg
        img/0083.jpg
        img/0084.jpg
        img/0085.jpg
        img/0086.jpg
        img/0087.jpg
        img/0088.jpg
        img/0089.jpg
        img/0090.jpg
        img/0091.jpg
        img/0092.jpg
        img/0093.jpg
        img/0094.jpg
        img/0095.jpg
        img/0096.jpg
        img/0097.jpg
        img/0098.jpg
        img/0099.jpg
        img/0100.jpg
        img/0101.jpg
        img/0102.jpg
        img/0103.jpg
        img/0104.jpg
        img/0105.jpg
        img/0106.jpg
        img/0107.jpg
        img/0108.jpg
        img/0109.jpg
        img/0110.jpg
        img/0111.jpg
        img/0112.jpg
        img/0113.jpg
        img/0114.jpg
        img/0115.jpg
        img/0116.jpg
        img/0117.jpg
        img/0118.jpg
        img/0119.jpg
        img/0120.jpg
        img/0121.jpg
        img/0122.jpg
        img/0123.jpg
        img/0124.jpg
        img/0125.jpg
        img/0126.jpg
        img/0127.jpg
        img/0128.jpg
        img/0129.jpg
        img/0130.jpg
                    `;
        return data.trim().split("\n")[index];
    }

    const frameCount = 70;
    const images = [];
    const imageseq = { frame: 0 };

    for (let i = 0; i < frameCount; i++) {
        const img = new Image();
        img.src = files(i);
        images.push(img);
    }

    function scaleImage(img, ctx) {
        var canvas = ctx.canvas;
        var hRatio = canvas.width / img.width;
        var vRatio = canvas.height / img.height;
        var ratio = Math.max(hRatio, vRatio);
        var centerShift_x = (canvas.width - img.width * ratio) / 2;
        var centerShift_y = (canvas.height - img.height * ratio) / 2;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(img, 0, 0, img.width, img.height, centerShift_x, centerShift_y, img.width * ratio, img.height * ratio);
    }

    function render() {
        scaleImage(images[imageseq.frame], context);
    }

    images[0].onload = render;

    gsap.to(imageseq, {
        frame: frameCount - 1,
        snap: "frame",
        ease: "none",
        scrollTrigger: {
            scrub: 5, // Increased value to slow down the scroll animation
            trigger: ".hero",
            start: "top 0%",
            end: "bottom 0%"
        },
        onUpdate: render
    });

    gsap.to(".hero canvas", {
        scrollTrigger: {
            scrub: 5, // Increased value to slow down the scroll animation
            trigger: ".hero",
            start: "bottom 0%",
            ease: "none"
        }
    });

    ScrollTrigger.create({
        trigger: ".hero",
        pin: true,
        start: "top 0%"
    });
}

camera();

const totalFrames = 36; // Total number of frames in the image sequence
const imagePath = 'img/'; // Path to the images
const canImage = document.getElementById('can-image'); // Get the image element

let currentFrame = 0;
let maxScrollValue; // To store the maximum scroll value

// Function to update the can image based on the frame number
function updateCanImage(frame) {
    const frameNumber = String(frame).padStart(4, '0'); // Ensure frame number is always 4 digits
    const imageSrc = `${imagePath}${frameNumber}.png`;
    
    // Load the new image and update the source
    const newImage = new Image();
    newImage.src = imageSrc;
    
    // Once the image is loaded, replace the source
    newImage.onload = () => {
        canImage.src = imageSrc;
    };
}

// Calculate max scroll value based on window and document height
function calculateMaxScroll() {
    maxScrollValue = document.body.scrollHeight - window.innerHeight;
}

// Function to calculate frame based on scroll position
function scrollAnimation() {
    const scrollY = window.scrollY;
    const scrollFraction = scrollY / maxScrollValue;
    const frameIndex = Math.min(totalFrames - 1, Math.floor(scrollFraction * totalFrames));

    // Only update the frame if it's a new one
    if (frameIndex !== currentFrame) {
        currentFrame = frameIndex;
        updateCanImage(currentFrame + 1); // Update can image
    }

    // Check if the rotation is complete (frameIndex is at the last frame)
    if (currentFrame === totalFrames - 1) {
        gsap.to('.about', { opacity: 1, duration: 1 }); // Show the content section
    }
}

// Set up scroll listener
window.addEventListener('scroll', scrollAnimation);

// Recalculate max scroll value when the window resizes
window.addEventListener('resize', calculateMaxScroll);

// Initial setup
calculateMaxScroll();
updateCanImage(1); // Set the first image

// Trigger initial animation for product
window.addEventListener('load', () => {
    gsap.fromTo(canImage, { opacity: 0 }, { opacity: 1, duration: 0.5 });
});

var tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".about",
      start: "-20% 100%",
      end: "100% 100%",
      scrub: 0.5,
    }
  });
  
  tl.to("#can-image", {
    top: "175%",
    left: "-220%",
  });
  
  // Use a regular media query instead of matchMedia
  function setupTimelineForSmallScreens() {

    if (window.matchMedia("(max-width: 1420px)").matches) {
      tl.clear();

      var tllaptopScreen = gsap.timeline({
        scrollTrigger: {
          trigger: ".about",
          start: "-20% 100%",
          end: "20% 50%",
          scrub: 0.5,
        }
      });
  
      tllaptopScreen.to("#can-image", {
        top: "175%",
        left: "-180%",
      });
    }

    if (window.matchMedia("(max-width: 1366px)").matches) {
      tl.clear();
      tllaptopScreen.clear();

      var tllaptop2Screen = gsap.timeline({
        scrollTrigger: {
          trigger: ".about",
          start: "-20% 100%",
          end: "20% 50%",
          scrub: 0.5,
        }
      });
  
      tllaptop2Screen.to("#can-image", {
        top: "165%",
        left: "-160%",
      });
    }

    if (window.matchMedia("(max-width: 1280px)").matches) {
        tl.clear();
        tllaptopScreen.clear();
        tllaptop2Screen.clear();

        var tlnesthubScreen = gsap.timeline({
          scrollTrigger: {
            trigger: ".about",
            start: "-20% 100%",
            end: "20% 50%",
            scrub: 0.5,
          }
        });
    
        tlnesthubScreen.to("#can-image", {
          top: "220%",
          left: "-200%",
        });
      }

      if (window.matchMedia("(max-width: 1024px)").matches) {
        tl.clear();
        tlnesthubScreen.clear();
        tllaptopScreen.clear();
        tllaptop2Screen.clear();

    
        var tlsmallnestScreen = gsap.timeline({
          scrollTrigger: {
            trigger: ".about",
            start: "-50% 100%",
            end: "20% 50%",
            scrub: 0.5,
          }
        });
    
        tlsmallnestScreen.to("#can-image", {
          top: "190%",
          left: "-155%",
        });
      }

    if (window.matchMedia("(max-width: 853px)").matches) {
        tl.clear();
        tlnesthubScreen.clear();
        tlsmallnestScreen.clear();
                tllaptopScreen.clear();
                tllaptop2Screen.clear();

    
        var tlasusScreen = gsap.timeline({
          scrollTrigger: {
            trigger: ".about",
            start: "-20% 100%",
            end: "20% 50%",
            scrub: 0.5,
          }
        });
    
        tlasusScreen.to("#can-image", {
          top: "170%",
          left: "-120%",
        });
      }

    if (window.matchMedia("(max-width: 820px)").matches) {
        tl.clear();
        tlasusScreen.clear();
        tlnesthubScreen.clear();
        tlsmallnestScreen.clear();
                tllaptopScreen.clear();
                tllaptop2Screen.clear();

    
        var tlipadairScreen = gsap.timeline({
          scrollTrigger: {
            trigger: ".about",
            start: "-20% 100%",
            end: "20% 50%",
            scrub: 0.5,
          }
        });
    
        tlipadairScreen.to("#can-image", {
          top: "138%",
          left: "0%",
        });
      }

    if (window.matchMedia("(max-width: 768px)").matches) {
        tl.clear();
        tlipadairScreen.clear();
        tlasusScreen.clear();
        tlnesthubScreen.clear();
        tlsmallnestScreen.clear();
                tllaptopScreen.clear();
                tllaptop2Screen.clear();
    
        var tlipadminiScreen = gsap.timeline({
          scrollTrigger: {
            trigger: ".about",
            start: "-20% 100%",
            end: "20% 50%",
            scrub: 0.5,
          }
        });
    
        tlipadminiScreen.to("#can-image", {
          top: "138%",
          left: "0%",
        });
      }

    if (window.matchMedia("(max-width: 430px)").matches) {
        tl.clear(); // Clear the existing animation
        tlipadminiScreen.clear(); // Clear the existing animation
        tlipadairScreen.clear(); // Clear the existing animation
        tlasusScreen.clear(); // Clear the existing animation
        tlnesthubScreen.clear(); // Clear the existing animation
        tlsmallnestScreen.clear();
                tllaptopScreen.clear(); // Clear the existing animation
                tllaptop2Screen.clear(); // Clear the existing animation
    
        var tl14SmallScreen = gsap.timeline({
          scrollTrigger: {
            trigger: ".about",
            start: "-80% 100%",
            end: "80% 100%",
            scrub: 0.5,
          }
        });
    
        tl14SmallScreen.to("#can-image", {
          top: "310%",
          left: "-90%",
        });
      }

    if (window.matchMedia("(max-width: 414px)").matches) {
      tl.clear(); // Clear the existing animation
      tl14SmallScreen.clear();
      tlipadminiScreen.clear();
      tlipadairScreen.clear();
      tlasusScreen.clear();
      tlnesthubScreen.clear();
      tlsmallnestScreen.clear();
              tllaptopScreen.clear();
              tllaptop2Screen.clear();
  
      var tlSmallScreen = gsap.timeline({
        scrollTrigger: {
          trigger: ".about",
          start: "-80% 100%",
          end: "80% 100%",
          scrub: 0.5,
        }
      });
  
      tlSmallScreen.to("#can-image", {
        top: "310%",
        left: "-90%",
      });
    }

    if (window.matchMedia("(max-width: 397px)").matches) {
      tl.clear(); // Clear the existing animation
      tl14SmallScreen.clear();
      tlipadminiScreen.clear();
      tlipadairScreen.clear();
      tlasusScreen.clear();
      tlnesthubScreen.clear();
      tlsmallnestScreen.clear();
              tllaptopScreen.clear();
              tllaptop2Screen.clear();
  
      var tloneplusSmallScreen = gsap.timeline({
        scrollTrigger: {
          trigger: ".about",
          start: "-80% 100%",
          end: "80% 100%",
          scrub: 0.5,
        }
      });
  
      tloneplusSmallScreen.to("#can-image", {
        top: "360%",
        left: "-100%",
      });
    }

    if (window.matchMedia("(max-width: 390px)").matches) {
        tl.clear(); // Clear the existing animation
        tlSmallScreen.clear();
        tl14SmallScreen.clear();
        tlipadminiScreen.clear();
        tlipadairScreen.clear();
        tlasusScreen.clear();
        tlnesthubScreen.clear();
        tlsmallnestScreen.clear();
        tloneplusSmallScreen.clear();
                tllaptopScreen.clear();
                tllaptop2Screen.clear();

        var tl12SmallScreen = gsap.timeline({
          scrollTrigger: {
            trigger: ".about",
            start: "-80% 100%",
            end: "80% 100%",
            scrub: 0.5,
          }
        });
    
        tl12SmallScreen.to("#can-image", {
          top: "355%",
          left: "-100%",
        });
      }

    if (window.matchMedia("(max-width: 375px)").matches) {
        tl.clear(); // Clear the existing animation
        tlSmallScreen.clear();
        tl12SmallScreen.clear();
        tl14SmallScreen.clear();
        tlipadminiScreen.clear();
        tlipadairScreen.clear();
        tlasusScreen.clear();
        tlnesthubScreen.clear();
        tlsmallnestScreen.clear();
        tloneplusSmallScreen.clear();
                tllaptopScreen.clear();
                tllaptop2Screen.clear();

        var tlFullSmallScreen = gsap.timeline({
          scrollTrigger: {
            trigger: ".about",
            start: "-80% 100%",
            end: "80% 100%",
            scrub: 0.5,
          }
        });
    
        tlFullSmallScreen.to("#can-image", {
          top: "355%",
          left: "0%",
        });
      }

  }

  let loader = document.querySelector(".loading");

window.addEventListener("load", vanish);
function vanish() {
  loader.classList.add("dispper");
}
  
  // Call it on load and on resize
  setupTimelineForSmallScreens();
  window.addEventListener('resize', setupTimelineForSmallScreens);

  
// Detect when the "Work" section is in the viewport
window.addEventListener('scroll', function() {
  const workSection = document.getElementById('footer');
  const icon = document.querySelector('.uppericon');
  
  const sectionPosition = workSection.getBoundingClientRect();
  
  // Check if the Work section is in view
  if (sectionPosition.top <= window.innerHeight && sectionPosition.bottom >= 0) {
      icon.style.display = 'block';  // Show the icon
  } else {
      icon.style.display = 'none';   // Hide the icon when out of view
  }
});

