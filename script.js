
/* ========================================
   OFFLOAD - WEBSITE INTERACTIONS
======================================== */

// 1. MOBILE NAVIGATION MENU

const menuToggle = document.getElementById("menuToggle");
const navigation = document.getElementById("navigation");

if (menuToggle && navigation) {
  menuToggle.addEventListener("click", function () {
    const isOpen = navigation.classList.toggle("open");

    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.textContent = isOpen ? "✕" : "☰";
  });

  // Close the menu when a navigation link is clicked
  navigation.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
      navigation.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.textContent = "☰";
    });
  });
}

// 2. AUTOMATIC FOOTER YEAR

const yearElement = document.getElementById("year");

if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}

// 3. SERVICE-SPECIFIC WHATSAPP ENQUIRIES

const whatsappNumber = "918309959807";

document.querySelectorAll("[data-service]").forEach(function (link) {
  const serviceName = link.dataset.service;

  const message =
    "Hi Offload! I would like to enquire about your " +
    serviceName +
    " service. Please share the details and pricing.";

  const whatsappURL =
    "https://wa.me/" +
    whatsappNumber +
    "?text=" +
    encodeURIComponent(message);

  link.href = whatsappURL;
  link.target = "_blank";
  link.rel = "noopener noreferrer";
});

// 4. BASIC CONSOLE MESSAGE

console.log("Offload website loaded successfully!");
