// Toggle function to show and hide sections (Technologies & Achievements)
function toggleSection(section) {
    const sectionDiv = document.getElementById(section);
    if (sectionDiv.style.display === "none" || sectionDiv.style.display === "") {
        sectionDiv.style.display = "block";
    } else {
        sectionDiv.style.display = "none";
    }
}

// Function to trigger fireworks and LinkedIn redirection
function triggerFireworksAndRedirect() {
    // Open LinkedIn in a new tab directly after button click
    window.open('https://www.linkedin.com/in/suchir-ganesh-jaiganesh-95b056291/', '_blank');

    // Start Fireworks Effect
    const fireworks = new Fireworks({
        selector: 'body',
        colors: ['#39FF14', '#FF9C00', '#F10352'],  // Neon Green, Orange, and Pink
        speed: 3,
        maxRockets: 5,    // Maximum number of rockets
        explosion: 5,     // Explosion size
        rocketWidth: 5,    // Width of rockets
        trails: 3          // Number of trails for rockets
    });

    fireworks.start(); // Start the fireworks
}
