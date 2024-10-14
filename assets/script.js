function showAlert(event) {
    event.preventDefault();  // Prevent form submission

    // Make sure the elements exist
    const overlay = document.getElementById('overlay');
    const alertBox = document.getElementById('alertBox');
    const form = document.querySelector('.contact-section');  // Select the form

    if (overlay && alertBox && form.checkValidity()) {
        // Show the custom alert
        overlay.classList.add('active');
        alertBox.classList.add('active');

        // Clear the form fields
        form.reset();
    } else {
        alert("Please fill in all required fields.");
    }
}

function closeAlert() {
    const overlay = document.getElementById('overlay');
    const alertBox = document.getElementById('alertBox');

    if (overlay && alertBox) {
        overlay.classList.remove('active');
        alertBox.classList.remove('active');
    } else {
        console.error("Overlay or Alert Box not found.");
    }
}


///hover 
const divs = document.querySelectorAll('.hover-effect');

divs.forEach(div => {
    div.addEventListener('mouseover', () => {
        div.style.transform = 'scale(1.05)';
        div.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.2)';
    });

    div.addEventListener('mouseout', () => {
        div.style.transform = 'scale(1)';
        div.style.boxShadow = 'none';
    });
});

