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
  var inputElement2 = d3.select("#state");
  var inputElement3 = d3.select("#country");
  var inputElement4 = d3.select("#shape");

  // store the value of the form in a variable
  var inputValue = inputElement.property("value");
  var inputValue1 = inputElement1.property("value");
  var inputValue2 = inputElement2.property("value");
  var inputValue3 = inputElement3.property("value");
  var inputValue4 = inputElement4.property("value");

  //print input text of the form
  console.log(inputValue);
  console.log(inputValue1);
  console.log(inputValue2);
  console.log(inputValue3);
  console.log(inputValue4);

  // store the filtered data in a variable
  var filteredData = tableData.filter(data => data.datetime === inputValue);
  var filteredData1 = tableData.filter(data => data.city === inputValue1);
  var filteredData2 = tableData.filter(data => data.state === inputValue2);
  var filteredData3 = tableData.filter(data => data.country === inputValue3);
  var filteredData4 = tableData.filter(data => data.shape === inputValue4);

  // print to make sure filter is working
  console.log(filteredData);
  console.log(filteredData1);
  console.log(filteredData2);
  console.log(filteredData3);
  console.log(filteredData4);

  //var filtered = filteredData.map(data => data);
  //console.log(filtered);

  // run a function with an if
  // if input is blank on all the input fields, then populate the unfiltered data (after clearing the table)
  // otherwise clear the table and display the filtered data
  function rem() {
    if (inputValue == [] && inputValue1 == [] && inputValue2 == [] && inputValue3 == [] && inputValue4 == []) {
      var bodyRef = document.getElementById('ufo-table').getElementsByTagName('tbody')[0]; bodyRef.innerHTML = '';
      // pop up alert asking the visitor to refine their search
      alert('Please apply a filter to your search!');
      tableData.forEach((ufosighting) => {
        var row = tbody.append("tr");
        Object.entries(ufosighting).forEach(([key, value]) => {
          var cell = row.append("td");
          cell.text(value);
        });
      });
    } 
    else {
      // check each input field for text and display the filtered data
      bodyRef = document.getElementById('ufo-table').getElementsByTagName('tbody')[0]; bodyRef.innerHTML = '';
      // populate the table with the filtered data
      if (inputValue != "") {
        filteredData.forEach((ufosighting) => {
          var row = tbody.append("tr");
          Object.entries(ufosighting).forEach(([key, value]) => {
            var cell = row.append("td");
            cell.text(value);
      })}) }
        else if (inputValue1 != "") {
          filteredData1.forEach((ufosighting) => {
            var row = tbody.append("tr");
            Object.entries(ufosighting).forEach(([key, value]) => {
              var cell = row.append("td");
              cell.text(value);
      })}) }
        else if (inputValue2 != "") {
          filteredData2.forEach((ufosighting) => {
            var row = tbody.append("tr");
            Object.entries(ufosighting).forEach(([key, value]) => {
              var cell = row.append("td");
              cell.text(value);
      })}) }
        else if (inputValue3 != "") {
          filteredData3.forEach((ufosighting) => {
            var row = tbody.append("tr");
            Object.entries(ufosighting).forEach(([key, value]) => {
              var cell = row.append("td");
              cell.text(value);
      })}) }
        else if (inputValue4 != "") {
          filteredData4.forEach((ufosighting) => {
            var row = tbody.append("tr");
            Object.entries(ufosighting).forEach(([key, value]) => {
              var cell = row.append("td");
              cell.text(value);
      })}) }
        else {console.log("")};
    }};

  rem()
  
  //clear the input fields data after a submit click
  document.getElementById('datetime').value='';
  document.getElementById('city').value='';
  document.getElementById('state').value='';
  document.getElementById('country').value='';
  document.getElementById('shape').value='';

});