// ===== EDIT THIS LIST: one entry per ProfDev certificate =====
// Put the image files inside the "certificates" folder.
const certificates = [
  { title: "Seminar Title Here", org: "Organizer / Speaker", date: "October 2026", image: "certificates/seminar-1.jpg" },
  { title: "Field Trip / Training Title", org: "Company / Institution", date: "October 2026", image: "certificates/field-trip.jpg" }
];

const grid = document.getElementById("cert-grid");
certificates.forEach(c => {
  const el = document.createElement("article");
  el.className = "card";
  el.innerHTML = `
    <img src="${c.image}" alt="Certificate: ${c.title}" loading="lazy">
    <h3>${c.title}</h3>
    <p class="meta">${c.org}</p>
    <p class="meta">${c.date}</p>`;
  el.querySelector("img").addEventListener("click", () => openLightbox(c.image, c.title));
  grid.appendChild(el);
});

function openLightbox(src, alt) {
  const box = document.createElement("div");
  box.className = "lightbox";
  box.innerHTML = `<img src="${src}" alt="${alt}">`;
  box.addEventListener("click", () => box.remove());
  document.body.appendChild(box);
}

// Mobile menu
const nav = document.querySelector("nav");
document.querySelector(".menu-btn").addEventListener("click", () => nav.classList.toggle("open"));
nav.addEventListener("click", () => nav.classList.remove("open"));

document.getElementById("year").textContent = new Date().getFullYear();
