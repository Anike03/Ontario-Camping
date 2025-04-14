document.addEventListener("DOMContentLoaded", function () {
    const page1 = document.querySelector(".page-1");
    const page2 = document.querySelector(".page-2");
    const loadingProgress = document.querySelector(".loading-progress");
    const carousel = document.getElementById("carousel") || document.querySelector(".image-carousel");
    const images = document.querySelectorAll(".carousel-image");
    const statusTime = document.getElementById("status-time");
  
    // Start loading animation immediately
    loadingProgress.style.width = "100%";
  
    // ⏰ Update time in iOS-style 12-hour format with AM/PM
    function updateTime() {
      const now = new Date();
      let hours = now.getHours();
      const minutes = now.getMinutes().toString().padStart(2, '0');
      const ampm = hours >= 12 ? 'PM' : 'AM';
  
      hours = hours % 12;
      hours = hours ? hours : 12; // the hour '0' should be '12'
  
      const timeString = `${hours}:${minutes} ${ampm}`;
      if (statusTime) {
        statusTime.textContent = timeString;
      }
    }
  
    updateTime();
    setInterval(updateTime, 60000); // Update every minute
  
    // Splash screen switch after 4 seconds
    setTimeout(() => {
      page1.classList.remove("active");
      page1.classList.add("hidden");
  
      page2.classList.remove("hidden");
      page2.classList.add("active");
  
      // Start appropriate carousel behavior
      if (images.length > 0) {
        startCarousel(); // advanced image scroll
      } else if (carousel) {
        autoScroll(); // smooth scroll for image-carousel
      }
    }, 4000);
  
    // Method 1: Carousel with directional control (when using carousel-image & #carousel)
    function startCarousel() {
      let currentIndex = 0;
      let direction = 1;
      const imageCount = images.length;
      const scrollInterval = 3000;
      let intervalId;
  
      function scrollToNextImage() {
        currentIndex += direction;
  
        if (currentIndex === imageCount - 1 || currentIndex === 0) {
          direction *= -1;
        }
  
        const scrollPosition = currentIndex * carousel.offsetWidth;
        carousel.scrollTo({
          left: scrollPosition,
          behavior: "smooth",
        });
      }
  
      function startInterval() {
        intervalId = setInterval(scrollToNextImage, scrollInterval);
      }
  
      function stopInterval() {
        clearInterval(intervalId);
      }
  
      startInterval();
  
      carousel.addEventListener("mouseenter", stopInterval);
      carousel.addEventListener("mouseleave", () => {
        currentIndex = Math.round(carousel.scrollLeft / carousel.offsetWidth);
        startInterval();
      });
    }
  
    // Method 2: Smooth auto-scroll (when using .image-carousel)
    function autoScroll() {
      let scrollAmount = 0;
      const scrollSpeed = 1;
  
      function scrollStep() {
        carousel.scrollLeft += scrollSpeed;
        scrollAmount += scrollSpeed;
  
        if (scrollAmount >= carousel.scrollWidth - carousel.clientWidth) {
          carousel.scrollLeft = 0;
          scrollAmount = 0;
        }
  
        requestAnimationFrame(scrollStep);
      }
  
      scrollStep();
    }
  });
  