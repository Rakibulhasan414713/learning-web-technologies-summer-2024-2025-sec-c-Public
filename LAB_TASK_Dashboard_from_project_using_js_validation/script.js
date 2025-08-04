
document.getElementById("jobForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const title = document.getElementById("jobTitle").value.trim();
    const location = document.getElementById("location").value.trim();
    const type = document.getElementById("type").value;

    let valid = true;

    document.getElementById("titleError").textContent = "";
    document.getElementById("locationError").textContent = "";
    document.getElementById("typeError").textContent = "";

    if (!title.match(/^[a-zA-Z ]+$/)) {
        document.getElementById("titleError").textContent = "Only letters allowed.";
        valid = false;
    }
    if (!location.match(/^[a-zA-Z ]+$/)) {
        document.getElementById("locationError").textContent = "Only letters allowed.";
        valid = false;
    }
    if (!type) {
        document.getElementById("typeError").textContent = "Select a job type.";
        valid = false;
    }

    if (!valid) return;

    const message = `New job posted: ${title} in ${location} (${type})`;
    document.getElementById("output").textContent = message;

    const jobList = document.getElementById("jobList");
    const jobCard = document.createElement("div");
    jobCard.className = "jobCard";
    jobCard.innerHTML = `<strong>${title}</strong><br>${location}<br>${type}<br><button onclick="alert('Applied!')">Apply</button>`;
    jobList.appendChild(jobCard);
});

document.getElementById("toggleMode").addEventListener("click", function() {
    const adminSection = document.getElementById("adminSection");
    const userSection = document.getElementById("userSection");
    const currentMode = document.getElementById("currentMode");

    if (adminSection.style.display === "none") {
        adminSection.style.display = "block";
        userSection.style.display = "none";
        currentMode.textContent = "Current Mode: Admin";
        this.textContent = "Switch to User";
    } else {
        adminSection.style.display = "none";
        userSection.style.display = "block";
        currentMode.textContent = "Current Mode: User";
        this.textContent = "Switch to Admin";
    }
});
