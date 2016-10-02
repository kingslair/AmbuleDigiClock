var position = 0;   
var counter = 0;
$(document).ready(function() {
	$(function() { $('#containBox').draggable(); });
    $(function() { $("#resizeBox").draggable().resizable(); });
        $('#btn').click(function() {
            var dynamic_div = $(document.createElement('div')).css({
                border: '2px solid', position: 'absolute', left: position, 
                top: $('#containBox').height() + 20,
                width: '120', height: '120', padding: '3'
            });
            position = position + $('#containBox').width() + 20;
            $(dynamic_div).appendTo('#containBox').draggable();
            counter = counter + 1;
     });
});
	
	
function checkVal(time) {
    if (10 > time) {
        time = "0" + time;
    }
    return time;
}

function myFunction() {
    var d = new Date();
    var hr = document.getElementById("hr");
	var minn = document.getElementById("min");
	var sec = document.getElementById("sec");
    var h = checkVal(d.getHours());
    var m = checkVal(d.getMinutes());
    var s = checkVal(d.getSeconds());
	hr.innerHTML = h + " : ";
	minn.innerHTML = m + " : ";
	sec.innerHTML = s;
}
setInterval(myFunction, 1000);