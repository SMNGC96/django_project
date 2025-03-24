document.addEventListener("DOMContentLoaded", function () {
  const dropdown = document.getElementsByClassName("modules-panel")[0];
  const modulesSelect = document.getElementById("modules-select");
  let timeoutId = null;

  if (dropdown && modulesSelect) {
    modulesSelect.addEventListener("mouseover", function () {
      dropdown.style.display = "flex";
    });
    dropdown.addEventListener("mouseout", function () {
      timeoutId = setTimeout(() => {
        dropdown.style.display = "none";
      }, 5000);
    });
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const dropdown = document.querySelector("#modules-select select");
  if (dropdown) {
    dropdown.value = "";
    if (dropdown.value !== "") {
      dropdown.selectedIndex = 0;
    }
  }
});

const contactUsButton = document.querySelector(".contact-us");
const dialog = document.querySelector(".dialog");
const closeButton = document.querySelector(".close-modal");

contactUsButton.onclick = () => {
  dialog.showModal();
};

closeButton.onclick = () => {
  dialog.close();
};

dialog.addEventListener('click', (event) => {
  const rect = dialog.getBoundingClientRect();
  const isInDialog = 
      event.clientX >= rect.left &&
      event.clientX <= rect.right &&
      event.clientY >= rect.top &&
      event.clientY <= rect.bottom;
      
  if (!isInDialog) dialog.close();

})