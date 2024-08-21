// Scroll to top function
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Show/Hide top button based on scroll position
window.onscroll = function () {
  const topButton = document.querySelector('.top-button');
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    topButton.style.display = 'block';
  } else {
    topButton.style.display = 'none';
  }
};