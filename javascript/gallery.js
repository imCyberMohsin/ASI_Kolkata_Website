const modal = document.querySelector('.modal');
const modalImage = document.getElementById('modalImage');
const closeBtn = document.querySelector('.close-btn');

// Open modal and display clicked image
function openModal(imageSrc) {
    modalImage.src = imageSrc;
    modal.style.display = 'flex';
}

// Close modal
function closeModal() {
    modal.style.display = 'none';
}

// Attach click event handlers to images
const images = document.querySelectorAll('.gallery-box .row-1 img');
images.forEach(image => {
    image.addEventListener('click', (event) => {
        event.stopPropagation(); // Prevent event from bubbling to window
        openModal(image.src);
    });
});

// Close modal when close button is clicked
closeBtn.addEventListener('click', closeModal);

// Close modal when clicking outside the modal content
modal.addEventListener('click', (event) => {
    if (event.target === modal) {
        closeModal();
    }
});

// Close modal when clicking anywhere on the page
window.addEventListener('click', (event) => {
    if (event.target === modalImage || event.target === modal) {
        closeModal();
    }
});


// Display More Images When 'See-More' button is clicked.
const seeMore = document.getElementById('seeMoreBtn');
seeMore.addEventListener('click', () => {
    const hiddenElements = document.querySelectorAll('.hidden');
    hiddenElements.forEach(element => {
        element.classList.toggle('hidden');
    });

    // Hiding the button div after click
    const btnDiv = document.getElementById('btn');
    btnDiv.style.display = 'none'; // Hide the "See More" button after clicking
});


//? Dropdown Menu 
navbar=document.querySelector('.navbar')
gif=document.querySelector('.gif')
navigation=document.querySelector('.navigation')
menu=document.querySelector('.menu_icon')


menu.addEventListener('click',()=>{
    navigation.classList.toggle('visible');
    gif.classList.toggle('visible');
    navbar.classList.toggle('nav_res');
})
