window.onload = function() {
    var element = document.getElementById("detail");
    element.style.visibility = "hidden";
    start();
}

function Runner(RunnerId,RunnerName) {
    this.RunnerId = RunnerId;
    this.RunnerName = RunnerName;
}


function removeFromModel (itemId){
	LIST.splice(itemId, 1);
}


var LIST = [];

var http = new XMLHttpRequest();
var coreUrl = "https://cors.io/?http://rundistance.azurewebsites.net/api/";
var listUrl = coreUrl + "RunnerService";

function start() {
    http.onreadystatechange = getList;
    http.open("GET", listUrl, true);
    http.send();
}

function getList() {
    if (http.readyState == 4 && http.status == 200) {
        var items = JSON.parse(http.responseText);
        if (items != null) {
            addItemsToList(items);
        }
    }
}

function addItemsToList(arr) {
    for (var i = 0; i < arr.length; i++) {
        var runner = new Runner(arr[i].RunnerId, arr[i].RunnerName)
        LIST.push(runner);
    }
    displayItemsInList()
}

 function deleteFromList(e) {
  var itemId = e.target.id;
  removeFromModel(itemId);
  displayItemsInList(LIST);
}



function displayItemsInList() {
       var table = document.getElementById("itemlist");
       table.innerHTML = "";
       for (var i = 0; i < LIST.length; i++) {
        var row = table.insertRow(0);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        cell1.innerHTML = LIST[i].RunnerName;
        // populate the first td with data from the array
        var modelId = i;
        var RunnerId = LIST[i].RunnerId;
        // populate the second row with a link
        cell2.innerHTML = "<p id='" + modelId + "' " + " >DELETE</p>";
        cell3.innerHTML = "<p id='" + RunnerId + "' " + " >DETAILS</p>";
        // bind this new link to a delete methody
        document.getElementById(modelId).onclick = deleteFromList;
        document.getElementById(RunnerId).onclick = getRunnerDetail;

    }
}

function getRunnerDetail(e) {
    var runnerId = e.target.id;
    http.onreadystatechange = readRunnerDetail;
    var DetailUrl = listUrl  + "/" + runnerId;
    http.open("GET", DetailUrl, true);
    http.send();
}

function readRunnerDetail() {
    if (http.readyState == 4 && http.status == 200) {
        var item = JSON.parse(http.responseText);
        if (item != null) {
            displayRunnerDetail(item);
        }
    }
}

function displayRunnerDetail(item) {
    document.getElementById("detail").style.visibility = "visible";
    document.getElementById("name").innerText = item.RunnerName;
    document.getElementById("LRDistance").innerText = item.LastDistance;
    document.getElementById("LRTime").innerText = item.LastTime;
    document.getElementById("LRDate").innerText = item.date;
}
