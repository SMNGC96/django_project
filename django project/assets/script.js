document.addEventListener("DOMContentLoaded", function () {
  const dropdown = document.querySelector('.module-panel');
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
