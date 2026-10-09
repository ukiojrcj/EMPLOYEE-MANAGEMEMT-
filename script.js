document.getElementById("employeeForm")
.addEventListener("submit", function(event) {
    event.preventDefault();

    let name = document.getElementById("name").value;
    let id = document.getElementById("empid").value;
    let role = document.getElementById("role").value;
    let salary = document.getElementById("salary").value;

    let table = document.getElementById("employeeTable");
    let row = table.insertRow();

    row.insertCell(0).textContent = name;
    row.insertCell(1).textContent = id;
    row.insertCell(2).textContent = role;
    row.insertCell(3).textContent = salary;

    document.getElementById("employeeForm").reset();
});