function switchTab(tabId) {
  // Hide all content
  const allTabs = document.querySelectorAll('.tab-content');
  allTabs.forEach(tab => {
    tab.style.display = 'none';
    tab.classList.remove('fade-in');
  });

  // Remove active class
  document.querySelectorAll('.tab').forEach(button => {
    button.classList.remove('active');
  });

  // Show selected tab
  const targetTab = document.getElementById(tabId);
  targetTab.style.display = 'block';
  targetTab.classList.add('fade-in');

  // Activate button
  const clickedTab = Array.from(document.querySelectorAll('.tab')).find(tab =>
    tab.textContent.toLowerCase().includes(tabId)
  );
  if (clickedTab) clickedTab.classList.add('active');
}

// Lightbox
function openLightbox(src) {
  const lightbox = document.getElementById("lightbox");
  const img = document.getElementById("lightbox-img");
  img.src = src;
  lightbox.style.display = "flex";
}

function closeLightbox() {
  document.getElementById("lightbox").style.display = "none";
}

// Click outside image to close lightbox
document.getElementById("lightbox").addEventListener("click", function (e) {
  if (e.target.id === "lightbox") {
    closeLightbox();
  }
});
