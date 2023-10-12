// Set local storage
localStorage.setItem("user", "Nino Škuflić");

// Get local storage
const user = localStorage.getItem("user");
document.getElementById("user").innerHTML = user;

// Set another local storage
localStorage.setItem("age", "26");

// Session storage
sessionStorage.setItem("Session ID", "1234");

// Clear whole local storage
localStorage.clear();

// Cookies
document.cookie =
  "username=ninoskuflic;expires=Thu, 31 Dec 2023 12:00:00 UTC; path=/; Secure;";

console.log("Cookie is: " + document.cookie);
