let openBtn = document.querySelector('#open-btn');
let closeBtn = document.querySelector('#close-btn');
let modal = document.querySelector('#modal-container');
// open btn
openBtn.addEventListener('click', function () {
    modal.style.display = "block";
});
// close btn
closeBtn.addEventListener('click', function () {
    modal.style.display = "none";
})
window.addEventListener('click', function (e) {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});