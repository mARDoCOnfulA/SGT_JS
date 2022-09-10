function filterBrand() {
  let brandVal = document.getElementById("brandFilter");
  let colorVal = document.getElementById("colorFilter");
  let allRows = document
    .getElementById("tableRows")
    .childNodes.getElementByTagName("tr");

  for (let i = 1; i < allRows.length; i++) {
    let row = allRows[i];
    let rowBrandVal = row.ChildNodes.getElementsByTagName("td")[0].innerText;
    let rowColorVal = row.ChildNodes.getElementsByTagName("td")[0].innerText;
    if (
      (brandValue === "" || brandValue === rowBrandVal) &&
      (colorValue === "" || colorValue === rowColorVal)
    )
      row.hidden = false;
    else row.hidden = true;
  }
}

function addNewRow() {
  let newBrandVal = document.getElementById("newBrand").value;
  let newColorVal = document.getElementById("newColor").value;
  let newRowElement = document.createElement("tr");
  let newBrandColumn = document.createElement("td");
  newBrandColumne.innerText = newBrandVal;
  let newColumn;
}
