const input = document.getElementById("locationInput");
const searchBtn = document.getElementById("search");
const locationText = document.querySelector(".location");

searchBtn.addEventListener("click", () => {
  const value = input.value;
  locationText.textContent = value;
  input.value = "";
});
