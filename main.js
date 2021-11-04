
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

let studentsDetail = [
    {
    firstName: "john",
    lastName: "lee",
    email: "123@email.com",
    age: 27
    },
    {
    firstName: "lisa",
    lastName: "stefen",
    email: "333@email.com",
    age: 27
    },
    {
    firstName: "mary",
    lastName: "johnson",
    email: "243@email.com",
    age: 27
    },
    {
    firstName: "patrik",
    lastName: "winget",
    email: "566@email.com",
    age: 27    
    }
];

function currentStudents() {
var tableBody = "<tbody>";
for (let i = 0; i < studentsDetail.length; i++) {
    tableBody += "<tr>";
    tableBody += "<td>" + studentsDetail[i].firstName + "</td>";
    tableBody += "<td>" + studentsDetail[i].lastName + "</td>";
    tableBody += "<td>" + studentsDetail[i].email + "</td>";
    tableBody += "<td>" + studentsDetail[i].age + "</td>";
}
tableBody += "</tbody>";

document.getElementById("tableData").innerHTML = tableBody;
}