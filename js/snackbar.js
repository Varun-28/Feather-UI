const snackbarContainer = document.querySelector(".snackbar-container");
const snackbarShow = document.querySelector(".snackbar-show-btn");
const snackbarHide = document.querySelector(".snackbar-hide-btn");

snackbarShow.addEventListener("click", () => {
  snackbarContainer.classList.remove("snackbar-container-hidden");
  setTimeout(() => {
    snackbarContainer.classList.add("snackbar-container-hidden");
  }, 5000);
});

snackbarHide.addEventListener("click", () => {
    snackbarContainer.classList.add("snackbar-container-hidden");
})
