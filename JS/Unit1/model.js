var model = {
List : ["Alpha","Beta","Gama"],
addToModel: function (thisItem){
   if (thisItem !== null)
   {
	model.List.push(thisItem);
   }
},
removeFromModel: function (itemId){
	model.List.splice(itemId, 1);
}
}
