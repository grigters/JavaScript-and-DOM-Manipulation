// data from data.js
var tableData = data;

// Check to make sure ufo sighting data is accessible
console.log(tableData)

 // locate table tbody
var tbody = d3.select("tbody");

// script to populate table with ufo sighting data
 tableData.forEach((ufosighting) => {
  var row = tbody.append("tr");
  Object.entries(ufosighting).forEach(([key, value]) => {
    var cell = row.append("td");
    cell.text(value);
  });
});

// Button event 
var submit = d3.select("#filter-btn");

submit.on("click", function() {

  // Prevent the page from refreshing
  d3.event.preventDefault();

  // select the form and store in a variable
  var inputElement = d3.select("#datetime");
  var inputElement1 = d3.select("#city");

  // store the value of the form in a variable
  var inputValue = inputElement.property("value");
  var inputValue1 = inputElement1.property("value");

  //print input text of the form
  console.log(inputValue);
  console.log(inputValue1);

  // store the filtered data in a variable
  var filteredData = tableData.filter(data => data.datetime === inputValue);
  var filteredData1 = tableData.filter(data => data.city === inputValue1);

  // print to make sure filter is working
  console.log(filteredData);
  console.log(filteredData1);

  //var filtered = filteredData.map(data => data);
  //console.log(filtered);

  // run a function with an if
  // if input is blank, then populate the unfiltered data (after clearing the table)
  // otherwise clear the table and display the filtered data
  function rem() {
    if (inputValue == [] && inputValue1 == []) {
      var bodyRef = document.getElementById('ufo-table').getElementsByTagName('tbody')[0]; bodyRef.innerHTML = '';
      tableData.forEach((ufosighting) => {
        var row = tbody.append("tr");
        Object.entries(ufosighting).forEach(([key, value]) => {
          var cell = row.append("td");
          cell.text(value);
        });
      });
    } 
    else {
      bodyRef = document.getElementById('ufo-table').getElementsByTagName('tbody')[0]; bodyRef.innerHTML = '';
      // populate the table with the filtered data
      filteredData.forEach((ufosighting) => {
        var row = tbody.append("tr");
        Object.entries(ufosighting).forEach(([key, value]) => {
          var cell = row.append("td");
          cell.text(value);
  })}) 
    }};
  rem()

});

if (inputValue != "") {
  console.log("Not blank1")}
  else if (inputValue1 != "") {console.log("Not Blank 2")}
  else if (inputValue2 != "") {console.log("Not Blank 2")}
  else if (inputValue3 != "") {console.log("Not Blank 2")}
  else if (inputValue4 != "") {console.log("Not Blank 2")}
  else {};