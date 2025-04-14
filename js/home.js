document.addEventListener('DOMContentLoaded', function () {
    const explore = document.querySelector('.explore');
    let lastScrollTop = 0;
  
    explore.addEventListener('scroll', function () {
      const scrollTop = explore.scrollTop;
  
      // Scroll down → move up
      if (scrollTop > lastScrollTop && scrollTop > 10) {
        explore.classList.add('up');
      } 
      // Scroll up → reset
      else if (scrollTop < lastScrollTop - 5 || scrollTop <= 0) {
        explore.classList.remove('up');
      }
  
      lastScrollTop = scrollTop;
    });
  });
  
  
  
// Status Bar Time Update
function updateTime() {
    const now = new Date();
    let hours = now.getHours();
    const minutes = now.getMinutes().toString().padStart(2, "0");
    const ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12;
    const formatted = `${hours}:${minutes} ${ampm}`;
    const timeEl = document.getElementById("status-time");
    if (timeEl) timeEl.textContent = formatted;
  }
  
  updateTime();
  setInterval(updateTime, 60000);
  