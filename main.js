
let table           = document.getElementById("myTable");
let employeName     = document.getElementById("name");
let position        = document.getElementById("position");
let salary          = document.getElementById("salary");


function addData() {
let newRow = table.insertRow(-1);
let newCell1 = newRow.insertCell(0);
let newCell2 = newRow.insertCell(1);
let newCell3 = newRow.insertCell(2);

newCell1.innerHTML = employeName.value;
newCell2.innerHTML = position.value;
newCell3.innerHTML = salary.value;

}