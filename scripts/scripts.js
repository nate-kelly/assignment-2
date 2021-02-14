// JS behaviour:
    // When user clicks nav item, menu disappears
// Responsive:
    // Hamburger icon only appears after a certain breakpoint


// Target hamburger icon, dropdown and menu links
const hamburger = document.querySelector(".hamburger");
const dropdown = document.querySelector('.dropdown');
const menuItems = document.querySelectorAll('.menu-items');

// Add event listener to hamburger icon + menu items
hamburger.addEventListener('click', hamburgerToggle);
menuItems.addEventListener('click', menuToggle);

// Function to run when hamburger is clicked
function hamburgerToggle() {
    hamburger.classList.toggle('changeham');
    dropdown.classList.toggle('showdropdown');
}

function menuToggle() {
    dropdown.classList.toggle('showdropdown');
}
