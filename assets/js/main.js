const button = document.querySelector('.add-book-button');
const submitButton = document.querySelector('.btn-submit');
const modal = document.querySelector('dialog');

button.addEventListener('click', () => {
    modal.showModal();
})