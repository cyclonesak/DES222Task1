document.querySelectorAll('.slider-wrapper').forEach(wrapper => {
  const slider = wrapper.querySelector('.slider');
  const handle = wrapper.querySelector('.handle');
  const beforeWrapper = wrapper.querySelector('.before-wrapper');

  slider.addEventListener('input', (e) => {
    const value = e.target.value;
    wrapper.style.setProperty('--position', `${value}%`);
    handle.style.left = `${value}%`;
    beforeWrapper.style.width = `${value}%`;
  });
  // Initialize position
  const defaultValue = slider.value || 50;
  wrapper.style.setProperty('--position', `${defaultValue}%`);
  handle.style.left = `${defaultValue}%`;
  beforeWrapper.style.width = `${defaultValue}%`;
});
