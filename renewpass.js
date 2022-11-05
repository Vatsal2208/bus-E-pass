function run() {
    var rup1 = document.getElementById('bus1').value;
    var rup2 = document.getElementById('bus2').value;
    var rup3 = parseFloat(rup1) + parseFloat(rup2);
    document.getElementById('total').value = rup3;
}