document.addEventListener("DOMContentLoaded", function () {
  const modalButton = document.getElementById("modal-button");
  const modalWindow = document.getElementById("modal");
  const closeModal = document.getElementById("closeModal");

  modalButton.addEventListener("click", () => {
    modalWindow.style.display = "flex";
  });

  closeModal.addEventListener("click", () => {
    modal.style.display = "none";
  });
  window.addEventListener("click", (e) => {
    if (e.target == modalWindow) {
      modal.style.display = "none";
    }
  });
})