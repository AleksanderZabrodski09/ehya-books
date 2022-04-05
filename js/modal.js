const modalBatton = document.querySelectorAll('.buy')
const modal = document.querySelector('.modal')
const closeModal = document.querySelector('.modal__close')
const overlay = document.querySelector('.modal-overlay')

modalBatton.forEach((btn) => {
  btn.addEventListener('click', () => {
    modal.classList.remove('hidden')
  });
});

closeModal.addEventListener('click', () => {
  modal.classList.add('hidden')
});

overlay.addEventListener('click', () => {
  modal.classList.add('hidden')
});