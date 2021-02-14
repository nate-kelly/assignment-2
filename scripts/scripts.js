// Steps:
    // Style in CSS (responsive topnav or slide-in menu)
// JS behaviour:
    // When user clicks hamburger, nav items appear
    // When user clicks again, nav items disappear
    // When user clicks nav item, menu disappears
// Responsive:
    // Hamburger icon only appears after a certain breakpoint


// Target hamburger icon and add event listener
const hamburger = document.querySelector(".hamburger");
hamburger.addEventListener('click', hamburgerToggle);

// Function to run when hamburger is clicked
function hamburgerToggle() {
    hamburger.classList.toggle('change');
}
