document.addEventListener('DOMContentLoaded', function () {
  const form = document.querySelector('.contact-form');
  if (!form) return;

  form.addEventListener('submit', function (event) {
    event.preventDefault();
    alert('Merci ! Ton message a bien été pris en compte.');
    form.reset();
  });
});
