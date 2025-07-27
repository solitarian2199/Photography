function openTab(tabId) {
  // Hide all tab content
  document.querySelectorAll('.tab-content').forEach(tab => tab.classList.add('hidden'));

  // Remove active class from buttons
  document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));

  // Show selected tab and activate button
  document.getElementById(tabId).classList.remove('hidden');
  event.target.classList.add('active');
}

function openLightbox(src) {
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  lightboxImg.src = src;
  lightbox.style.display = 'flex';
}

function closeLightbox() {
  const lightbox = document.getElementById('lightbox');
  lightbox.style.display = 'none';
}
