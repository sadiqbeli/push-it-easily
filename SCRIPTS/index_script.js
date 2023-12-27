// mobile slide
function openSlideMenu() {
    document.getElementById('side-menu').style.width = '50%';
}

function closeSlideMenu() {
    document.getElementById('side-menu').style.width = '0';
}
// Add JavaScript to toggle the slide menu
const menuToggle = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});



// Mobile Menu Functionality
const mobileMenu = document.querySelector('.mobile-menu');
const navList = document.querySelector('nav ul');

// Create the select element
const selectMenu = document.createElement('select');
selectMenu.setAttribute('onchange', 'location = this.value;');

// Create the default option
const defaultOption = document.createElement('option');
defaultOption.textContent = 'Navigate...';
defaultOption.value = '';
selectMenu.appendChild(defaultOption);

// Loop through each nav item and create an option for it
navList.querySelectorAll('li a').forEach(navItem => {
    const option = document.createElement('option');
    option.textContent = navItem.textContent;
    option.value = navItem.href;
    selectMenu.appendChild(option);
});

// Add the select element to the mobile menu
mobileMenu.appendChild(selectMenu);