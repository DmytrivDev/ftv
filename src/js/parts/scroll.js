const scrollToTopBtn = document.querySelector('.footer__scroll-btn');

scrollToTopBtn?.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
});
