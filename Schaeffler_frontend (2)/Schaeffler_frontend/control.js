// control.js

function openForm() {
  var form = document.getElementById("projectForm");
  form.style.display = "block";
}

function addProject() {
  var projectName = document.getElementById("projectName").value || "Project XYZ";
  var projectClassification = document.getElementById("projectClassification").value || "Class B";
  var projectType = document.getElementById("projectType").value || "Development";
  var projectNumber = document.getElementById("projectNumber").value || "67890";
  var asil = document.getElementById("asil").value || "ASIL B";

  var table = document.getElementById("projectData");
  var row = table.insertRow(-1);

  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  var cell3 = row.insertCell(2);
  var cell4 = row.insertCell(3);
  var cell5 = row.insertCell(4);
  var cell6 = row.insertCell(5);
  var cell7 = row.insertCell(6);
  var cell8 = row.insertCell(7);
  var cell9 = row.insertCell(8);
  var cell10 = row.insertCell(9);
  var cell11 = row.insertCell(10);

  var anchor = document.createElement("a");
  anchor.href = "developer_dashboard.html"; // Replace with your desired href
  anchor.textContent = projectName;
  cell1.appendChild(anchor);

  cell2.innerHTML = projectClassification;
  cell3.innerHTML = projectType;
  cell4.innerHTML = projectNumber;
  cell5.innerHTML = asil;

  var colors = ['red', 'green', 'yellow'];

  // Set random colors for cells 6 to 10
  cell6.classList.add(colors[Math.floor(Math.random() * colors.length)]);
  cell7.classList.add(colors[Math.floor(Math.random() * colors.length)]);
  cell8.classList.add(colors[Math.floor(Math.random() * colors.length)]);
  cell9.classList.add(colors[Math.floor(Math.random() * colors.length)]);
  cell10.classList.add(colors[Math.floor(Math.random() * colors.length)]);

  // Check if any cell from 6 to 10 has red color
  var redCellExists = Array.from(row.cells).slice(6, 11).some(cell => cell.classList.contains('red'));

  // Set color for cell 11 based on the existence of red in cells 6 to 10
  if (redCellExists) {
      cell11.classList.add('red');
  } else {
      cell11.classList.add(colors[Math.floor(Math.random() * colors.length)]);
  }

  var form = document.getElementById("projectForm");
  form.style.display = "none";
  form.reset();
}

function exportToExcel() {
  var table = document.getElementById('projectTable');
  var rows = table.getElementsByTagName('tr');
  var csvContent = '';

  for (var i = 0; i < rows.length; i++) {
    var cells = rows[i].getElementsByTagName('td');
    for (var j = 0; j < cells.length; j++) {
      var cellColor = cells[j].classList.toString().split(' ').filter(c => ['red', 'green', 'yellow'].includes(c)).join('');
      csvContent += `${cells[j].innerText} (${cellColor}),`;
    }
    csvContent += '\n';
  }

  var blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  var link = document.createElement('a');
  if (link.download !== undefined) {
    var url = URL.createObjectURL(blob);
    link.setAttribute('href', url);
    link.setAttribute('download', 'project_data.csv');
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
}
function toggleButton() {
  var addButton = document.querySelector(".add-project");

  // Toggle the class to switch the content between "+" and "-"
  addButton.classList.toggle("minus");

  // Update button text based on the class
  if (addButton.classList.contains("minus")) {
      addButton.textContent = "- Add Project";
  } else {
      addButton.textContent = "+ Add Project";
  }

  // Toggle the form display
  var form = document.getElementById("projectForm");
  form.style.display = addButton.classList.contains("minus") ? "block" : "none";
}
function exportToExcel() {
  var table = document.getElementById('projectTable');
  var rows = table.getElementsByTagName('tr');
  var csvContent = 'Project Name,Project Classification,Project Type,Project Number,ASIL,OverAll Status,HW,SYS,EE,SW,ME\n';

  for (var i = 0; i < rows.length; i++) {
    var cells = rows[i].getElementsByTagName('td');
    for (var j = 0; j < cells.length; j++) {
      var cellColor = cells[j].classList.toString().split(' ').filter(c => ['red', 'green', 'yellow'].includes(c)).join('');
      csvContent += `${cells[j].innerText} (${cellColor}),`;
    }
    csvContent += '\n';
  }

  var blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  var link = document.createElement('a');
  if (link.download !== undefined) {
    var url = URL.createObjectURL(blob);
    link.setAttribute('href', url);
    link.setAttribute('download', 'project_data.csv');
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
}
