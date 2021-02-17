// Hamburger menu navigation
const hamburger = document.querySelector(".hamburger");
const dropdown = document.querySelector('.dropdown');
const menuItems = document.querySelectorAll('.menu-item');

hamburger.addEventListener('click', hamburgerToggle);

function hamburgerToggle() {
    hamburger.classList.toggle('changeham');
    dropdown.classList.toggle('showdropdown');
}

menuItems.forEach(function(menuItem) {
    menuItem.addEventListener('click', hamburgerToggle);
})

// Show/hide more info in vacation days section
const showMore = document.querySelector('.show-more');
const moreInfo = document.querySelector('.more-info');

showMore.addEventListener('click', function(event) {
    event.preventDefault();
    moreInfo.classList.toggle('showmore');
})