//The querySelector() method returns the first element that matches a specified CSS selector(s) in the document.

let btnGet  = document.querySelector("button");
let myTable = document.querySelector("#table");


let employee = [
               {name: "John", age: 33,country: "Canada"},
               {name: "Patrik", age: 40,country: "France"},
               {name: "Mark", age: 34,country: "Germany"},
               {name: "Carlos", age: 41,country: "Mexico"},
];

let headers = ["Name", "Age", "Country"];



btnGet.addEventListener("click", () => {
    let table = document.createElement("table");
    let headerRow = document.createElement("tr");

    headers.forEach(headerText => {
       //The createTextNode() method creates a Text Node with the specified text.
       //Tip: Use the createElement() method to create an Element Node with the specified name.
       //Tip: After the Text Node is created, 
       //use the element.appendChild() or element.insertBefore() method to append it to an element.
        let header = document.createElement("th");
        let textNode = document.createTextNode(headerText);
        header.appendChild(textNode);
        headerRow.appendChild(header);
    });
    
    //Now appending header row
    table.appendChild(headerRow);
    
    //looping through employee array of object to display in table

    employee.forEach(emp => {
        let row = document.createElement("tr");

        //Now getting data from each of the object

        //The Object.values() method takes an object as a parameter,
        //and returns an array of its values. This makes it useful for 
        //chaining with common Array methods like .map(), .forEach(), and .reduce().
        Object.values(emp).forEach(text => {
            let cell = document.createElement("td");
            let textNode = document.createTextNode(text);
            cell.appendChild(textNode);
            row.appendChild(cell);  

            //Now appending this row
            table.appendChild(row);
        })
    })
    

    //Now appending table to myTable element
    myTable.appendChild(table);

});