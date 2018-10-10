
//Assigning all script actions to variable.
var SimpleListModel = function (items) {
  //binding this object to self variable.
    self = this;
    //Observing the array items and binding the value of the observable arrays items to
    //self.items
    self.items = ko.observableArray(items);
    //Databound items to add when fucntion runs.
    self.itemToAdd = ko.observable("");
    //Function which runs when the dom ITEM which it is bound to is clicked.
    self.deleteItem = function (item) {
        //Remove the Item from self.items array and pass in the item.
        self.items.remove(item);
        //return the new data object.
        return self.items;
    }

    //function to be run when the databound addItem element is clicked.
    self.addItem = function() {
        //If the item to add is not = to ""
        if (self.itemToAdd() != "") {
          //Push the current item to add onto the items aray.
            self.items.push(self.itemToAdd());
            //resets the obersable array item as empty.
            self.itemToAdd("");
        }
        //rebind/constructor making new array. 
    }.bind(this);
};

//uses new keyword to construct new object using the passed in values.
ko.applyBindings(new SimpleListModel(["Alpha", "Beta", "Gamma"]));
