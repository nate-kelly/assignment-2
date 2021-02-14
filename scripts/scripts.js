// Still to-do
    // Hamburger icon only appears after a certain breakpoint

// Target hamburger icon, dropdown and menu links
const hamburger = document.querySelector(".hamburger");
const dropdown = document.querySelector('.dropdown');
const menuItems = document.querySelectorAll('.menu-item');

// Add event listener to hamburger icon
hamburger.addEventListener('click', hamburgerToggle);

// Function to run when hamburger is clicked
function hamburgerToggle() {
    hamburger.classList.toggle('changeham');
    dropdown.classList.toggle('showdropdown');
}

menuItems.forEach(function(menuItem) {
    menuItem.addEventListener('click', hamburgerToggle);
})