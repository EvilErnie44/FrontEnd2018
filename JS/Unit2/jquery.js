var LIST2 = [];
var coreUrl = "https://cors.io/?http://rundistance.azurewebsites.net/api/";
var listUrl = coreUrl + "RunnerService";
$(document).ready(
    function () {
        $.getJSON(listUrl)
                .done(function (data) {
                    $.each(data, function (i, item) {
                        LIST2.push(item);
                        displayList();
                    });
         });
        function displayList()
        {
            $("table#itemlist2").empty();
            $.each(LIST2, function (index, value) {
                $("table#itemlist2").append(
                    '<tr id =' + index + '><td>'
                    + value.RunnerName +
                    '</td><td><p class="delete" alt="delete" href="#">DELETE</p><p class="details" alt="details" href="#">DETAILS</p></td></tr>'
                );
            });
            //DeleteITEMFUNCTION
            $("#itemlist2 tr .delete").on("click", function(e){
              let eleTarget  = e.target.parentElement.parentElement.id;
              LIST2.splice(eleTarget, 1);
              displayList();
            });

            $("#itemlist2 tr .details").on("click", function(e){

              //Gives me the array index to take runner ID from opposed to having to
              //populate the entire DOM.
              let eleTarget  = e.target.parentElement.parentElement.id;
              let targetRunner = LIST2[eleTarget];
              let runnerId = targetRunner.RunnerId;

              http.onreadystatechange = readRunnerDetail;
              var DetailUrl = listUrl  + "/" + runnerId;
              http.open("GET", DetailUrl, true);
              http.send();
            });

            function readRunnerDetail() {
                if (http.readyState == 4 && http.status == 200) {
                    var item = JSON.parse(http.responseText);
                    if (item != null) {
                        displayRunnerDetail(item);
                    }
                }
            }

            function displayRunnerDetail(item) {
                document.getElementById("detail2").style.visibility = "visible";
                document.getElementById("name2").innerText = item.RunnerName;
                document.getElementById("LRDistance2").innerText = item.LastDistance;
                document.getElementById("LRTime2").innerText = item.LastTime;
                document.getElementById("LRDate2").innerText = item.date;
            }
        }
    });
