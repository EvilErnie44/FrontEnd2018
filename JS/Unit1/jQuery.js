$(document).ready(
    function () {
        var LIST = ["Charlie", "Foxtrot" , "Romeo"];
        $(document).on("click", ".delete", function (e) {


            let Ele = $(this).parent().parent();
            let remEle = Ele[0].cells[0].innerHTML;
            $.each(LIST, function (index, value) {
              if(remEle === value) {
                LIST.splice(index, 1)
              }
            });

            $(this).parent().parent().remove();
        });
        $('#BtnAddList2').on("click",function () {
            if ((!$('#itemname2').val().match(/^[a-zA-Z]+$/)) || ($('#itemname2').val() == ""))
            {
                alert('Non valid Data');
            }
            else {
                LIST.push($('#itemname2').val());
                $("table#itemlist2").empty();
                $.each(LIST, function (index, value) {
                    $("table#itemlist2").append(
                        '<tr><td>'
                        + value +
                        '</td><td><a class="delete" alt="delete" href="#">DELETE</a></td></tr>'
                    );
                });
            }
        });
    });
