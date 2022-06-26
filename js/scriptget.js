// When the user scrolls down, create a navbar with #ffffffe7 color

// $(window).scroll(function () {
//   $('nav').toggleClass('scrolled', $(this).scrollTop() > 100);
// });

window.addEventListener('scroll', function () {
  var nav = document.querySelector('nav');
  nav.classList.toggle('sticky', window.scrollY > 80);
});
