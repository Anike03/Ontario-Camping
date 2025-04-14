function updateTime() {
    const now = new Date();
    let hours = now.getHours();
    const minutes = now.getMinutes().toString().padStart(2, "0");
    const ampm = hours >= 12 ? "PM" : "AM";

    hours = hours % 12;
    hours = hours ? hours : 12;

    document.getElementById("status-time").textContent = `${hours}:${minutes} ${ampm}`;
  }

  updateTime();
  setInterval(updateTime, 60000); // update every minute

  // Redirect after 5 seconds
  setTimeout(function () {
    window.location.href = "home.html";
  }, 5000);