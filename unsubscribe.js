var bts = document.getElementsByClassName('_0mzm- sqdOP  L3NKy   _8A5w5    ');
var t = 0;
var incr = 1;
for (var i = 0; i < bts.length; i++) {
    setTimeout(function () {
        bts[incr].click();
        document.getElementsByClassName('aOOlW -Cab_')[0].click();
        incr++;
    }, t);
    t += 2000;
}