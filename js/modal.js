//simple modal js
const modalContainerSimple = document.querySelector(".modal-container-simple");
const modalBtnSimple = document.querySelectorAll(".simple-modal-btn");

modalBtnSimple.forEach(btn => {
    btn.addEventListener("click", () => {
        modalContainerSimple.classList.toggle("modal-hidden");
    })
});

//alert modal js
const modalContainerAlert = document.querySelector(".modal-container-alert");
const modalBtnAlert = document.querySelectorAll(".alert-modal-btn");

modalBtnAlert.forEach(btn => {
    btn.addEventListener("click", () => {
        modalContainerAlert.classList.toggle("modal-hidden");
    })
});

//confirm modal js
const modalContainerConfirm = document.querySelector(".modal-container-confirm");
const modalBtnConfirm = document.querySelectorAll(".confirm-modal-btn");

modalBtnConfirm.forEach(btn => {
    btn.addEventListener("click", () => {
        modalContainerConfirm.classList.toggle("modal-hidden");
    })
});