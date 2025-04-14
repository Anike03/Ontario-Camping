// Email validation
const emailField = document.getElementById("email");
const emailError = document.getElementById("email-error");

emailField.addEventListener("blur", function () {
  const value = emailField.value;
  const isValid =
    value.includes("@") &&
    value.includes(".") &&
    /^[^@]+@[^@]+\.[^@]+$/.test(value);

  emailError.style.display = isValid ? "none" : "block";
});
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
setInterval(updateTime, 60000);