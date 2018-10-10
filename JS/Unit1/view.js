var view = {
readForm: function(){
var thisitem = document.getElementById("itemname").value;
if (view.ValidateString(thisitem) == true) {
return thisitem;
} else {
return null; }
},
ValidateString: function(data) {
var re = /^[a-zA-Z]+$/;
// This method returns true if it finds a match, otherwise it returns false
return re.test(data);
},
//function to populate the list
displayitemsinlist: function(data) {
// grab hold of the table object
var table = document.getElementById("itemlist");
// Empty the table tag
table.innerHTML = "";
// walk down the LIST array
for (var i = 0; i < data.length; i++) {
// insert a row in the next space available
var row = table.insertRow(0);
// insert td within that row
var cell1 = row.insertCell(0);
// insert another td withing the same row
var cell2 = row.insertCell(1);
cell1.innerHTML = data[i];
// populate the first td with data from the array
var id = i;
// populate the second row with a link
cell2.innerHTML = "<p id=" + id + " " + " >DELETE</p>";
// bind this new link to a delete method
document.getElementById(id).onclick = control.deleteFromList;
    }
   }
}
