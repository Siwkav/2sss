const cardWrap = document.getElementById('cardWrap');
const card = document.getElementById('card');

cardWrap.addEventListener('mousemove', (e) => {
  const rect = cardWrap.getBoundingClientRect();
  const cx = rect.left + rect.width / 2;
  const cy = rect.top + rect.height / 2;
  const rx = -((e.clientY - cy) / (rect.height / 2)) * 20;
  const ry = ((e.clientX - cx) / (rect.width / 2)) * 20;
  card.style.transform = `rotateX(${rx}deg) rotateY(${ry}deg) scale(1.05)`;
});

cardWrap.addEventListener('mouseleave', () => {
  card.style.transition = 'transform 0.5s ease-out';
  card.style.transform = 'rotateX(0deg) rotateY(0deg) scale(1)';
  setTimeout(() => { card.style.transition = 'transform 0.05s ease-out'; }, 500);
});

cardWrap.addEventListener('mouseenter', () => {
  card.style.transition = 'transform 0.05s ease-out';
});
