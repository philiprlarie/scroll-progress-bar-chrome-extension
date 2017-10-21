var scrollProgressBar = document.createElement('div');
scrollProgressBar.setAttribute('id', 'scroll-progress-bar-chrome-extension');
document.body.appendChild(scrollProgressBar);

window.addEventListener('scroll', function () {
  var percentScrolled;
  if (document.body.offsetHeight <= window.innerHeight) {
    percentScrolled = 0;
  } else {
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    percentScrolled = scrollTop / (document.body.offsetHeight - window.innerHeight) * 100;
  }
  scrollProgressBar.style.width = percentScrolled + '%';
});
