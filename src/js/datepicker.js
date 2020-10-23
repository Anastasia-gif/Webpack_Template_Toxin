
$('#arrival').datepicker({
    onSelect: function (fd, d, picker) {
        $("#arrival").val(fd.split("-")[0]);
        $("#departure").val(fd.split("-")[1]);
    }
});
/*
function rangeDate() {
    let datepickerArrival = document.getElementById("arrival");
    let datepickerDeparture = document.getElementById("departure");

    let valArrival = datepickerArrival.value();
    let valDeparture = datepickerDeparture.value();
    let parseArrival = valArrival.parseDate();
    let parseDeparture = valDeparture.parseDate();
    if (parseArrival !== 0 || parseDeparture!==0){
        $("")
    }
}*/
