// Select all navigation links
const navLinks = document.querySelectorAll('.nav-link');

// Function to highlight the active link
function setActiveLink() {
    let scrollPosition = window.scrollY;
    navLinks.forEach(link => {
        let section = document.querySelector(link.getAttribute('href'));
        if (section.offsetTop <= scrollPosition + 100 && section.offsetTop + section.offsetHeight > scrollPosition + 100) {
            navLinks.forEach(nav => nav.classList.remove('active'));
            link.classList.add('active');
        }
    });
}

// Event listener for scrolling
window.addEventListener('scroll', setActiveLink);

// Smooth scroll effect when clicking links
navLinks.forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault();
        let targetSection = document.querySelector(this.getAttribute('href'));
        window.scrollTo({
            top: targetSection.offsetTop - 50, 
            behavior: 'smooth'
        });
    });
});

// Call function on page load to highlight the correct section
setActiveLink();

window.onscroll = function() {
    updateProgressBar();
};

function updateProgressBar() {
    let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    let scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let progress = (scrollTop / scrollHeight) * 100;
    
    document.getElementById("progressBar").style.width = progress + "%";
}

// Contact Form Section Code //
// Formspree Code //
document.getElementById("contactForm").addEventListener("submit", async function(event) {
    event.preventDefault(); // Prevent page reload

    let submitBtn = document.getElementById("submitBtn");
    let loader = submitBtn.querySelector(".loader");
    let responseMessage = document.getElementById("responseMessage");

    // Show loading icon
    loader.style.display = "inline-block";
    submitBtn.disabled = true;

    // Get form values
    let formData = new FormData(this);

    try {
        // Send form data to Formspree (Replace with your own backend URL if needed)
        let response = await fetch("https://formspree.io/YOUR_ID_NUMBER", {
            method: "POST",
            body: formData,
            headers: { "Accept": "application/json" }
        });

        if (response.ok) {
            responseMessage.style.color = "green";
            responseMessage.textContent = "Message sent successfully!";
            this.reset(); // Clear form after success
        } else {
            throw new Error("Something went wrong. Try again.");
        }
    } catch (error) {
        responseMessage.style.color = "red";
        responseMessage.textContent = error.message;
    }

    // Hide loader and enable button again
    loader.style.display = "none";
    submitBtn.disabled = false;
});

// Navbar For You Mobile //
// JavaScript Code //
const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");
const closeBtn = document.getElementById("closeBtn");

menuToggle.addEventListener("click", () => {
    navMenu.classList.add("active");
});

closeBtn.addEventListener("click", () => {
    navMenu.classList.remove("active");
});

document.addEventListener("click", (event) => {
    if (!navMenu.contains(event.target) && !menuToggle.contains(event.target)) {
        navMenu.classList.remove("active");
    }
});

// Website Year Copyright //
// JavaScript Code
document.getElementById("year").textContent = new Date().getFullYear();