document.querySelectorAll('.slider-wrapper').forEach(wrapper => {
  const slider = wrapper.querySelector('.slider');
  slider.addEventListener('input', (e) => {
    wrapper.style.setProperty('--position', `${e.target.value}%`);
  });
});
