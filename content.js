var scrollProgressBar = document.createElement('div');
scrollProgressBar.setAttribute('id', 'scroll-progress-bar-chrome-extension');
document.body.appendChild(scrollProgressBar);

window.addEventListener('scroll', function () {
  var percentScrolled;
  if (document.body.offsetHeight <= window.innerHeight) {
    percentScrolled = 0;
  } else {
    percentScrolled = document.body.scrollTop / (document.body.offsetHeight - window.innerHeight) * 100;
  }
  scrollProgressBar.style.width = percentScrolled + '%';
});
