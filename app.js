const faqItemElements = document.querySelectorAll(".faq-item");
const hamburgerMenuOpenButton = document.querySelector(".hamburger-menu-open");
const hamburgerMenuCloseButton = document.querySelector(
    ".hamburger-menu-close"
);

const toggleActive = (element) => {
    faqItemElements.forEach((el) => el.classList.remove("active"));
    element.classList.toggle("active");
};
faqItemElements.forEach((faqItem) => {
    faqItem.addEventListener("click", () => toggleActive(faqItem));
});

hamburgerMenuOpenButton.addEventListener("click", () => {
    const mobileMenu = document.querySelector(".hamburger-menu-wrapper");
    mobileMenu.classList.add("open");
});

hamburgerMenuCloseButton.addEventListener("click", () => {
    const mobileMenu = document.querySelector(".hamburger-menu-wrapper");
    mobileMenu.classList.remove("open");
});
