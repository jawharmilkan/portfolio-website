// Dynamically Add Skills
const skills = ["HTML", "CSS", "JavaScript", "SEO", "Web Development"];
const skillsList = document.getElementById("skills-list");

skills.forEach(skill => {
    const li = document.createElement("li");
    li.textContent = skill;
    skillsList.appendChild(li);
});

// Dynamically Add Projects
const projects = [
    { title: "SEO Optimization", description: "Improved organic traffic by 45% for a client." },
    { title: "Portfolio Website", description: "Designed and developed my own portfolio site." }
];

const projectGallery = document.getElementById("project-gallery");

projects.forEach(project => {
    const card = document.createElement("div");
    card.classList.add("project-card");
    card.innerHTML = `<h3>${project.title}</h3><p>${project.description}</p>`;
    projectGallery.appendChild(card);
});

// Form Validation
document.getElementById("contact-form").addEventListener("submit", function (e) {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    document.getElementById("form-status").textContent = `Thank you, ${name}! I will get back to you soon.`;
});
