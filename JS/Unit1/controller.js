window.onload = function () {
document.getElementById("BtnAddList").onclick = control.addToList;
view.displayitemsinlist(model.List);
}

var control = {
addToList: function(){
var data = view.readForm();
model.addToModel(data);
view.displayitemsinlist(model.List);
},
deleteFromList: function(e) {
  var itemId = e.target.id;
  model.removeFromModel(itemId);
  view.displayitemsinlist(model.List);
  }
}
