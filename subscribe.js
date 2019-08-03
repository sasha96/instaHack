var bts = document.getElementsByClassName('_0mzm- sqdOP  L3NKy       ');
var t = 0;
var incr = 0;
for (var i = 0; i < bts.length; i++) {
    setTimeout(function () {
        bts[incr].click();
        console.log(incr);
        incr++;
    }, t);
    t += 3000;
}