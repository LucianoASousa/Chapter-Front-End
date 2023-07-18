const btn = document.getElementById('bnt');
btn.addEventListener('click', () => {
    const random = Math.random() * 100;
    btn.style.transform = `translateX(${random}px)`;
  })