const modulesTable = document.querySelector(".js-modules-table");

console.log(modulesTable);

document.addEventListener("DOMContentLoaded", function () {
    
  const table = document.querySelector(".js-modules-table");
  const filterInput = document.querySelector(".table-filter");
  const filterButton = document.querySelector(".filter-button");
  const tableRows = table.querySelectorAll("tbody .table-row");

  function filterTable() {
    const filterText = filterInput.value.toLowerCase().trim();
    tableRows.forEach((row) => {
      let shouldShow = false;
      row.querySelectorAll("td").forEach((cell) => {
        if (cell.textContent.toLowerCase().includes(filterText)) {
          shouldShow = true;
        }
      });
      row.style.display = shouldShow ? "" : "none";
    });
  }

  filterInput.addEventListener("input", filterTable);
  filterButton.addEventListener("click", function () {
    if (filterInput.value.trim() === "") {
      tableRows.forEach((row) => (row.style.display = ""));
    } else {
      filterTable();
    }
  });

  filterTable();
});
