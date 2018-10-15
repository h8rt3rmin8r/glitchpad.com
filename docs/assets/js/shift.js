// Universally functional document-ready check
function r(f) {
    /in/.test(document.readyState) ? setTimeout('r(' + f + ')', 9) : f()
}
// Deploying document ready check
r(function () {
    //alert('DOM Ready!');
    var vx = document.getElementById('nexus-init');
    if (vx.style.visibility = 'hidden') {MWJ_changeVisibility('nexus-init', true); shiftEx_C();} 
    else {MWJ_changeVisibility('nexus-init', true); shiftEx_D();}
});
var exA_1 = "<div class=\"header\"><div class=\"container\"><h3 class=\"display-4\">"
var exA_2 = "<\/h3><p class=\"header-desc\">"
var exA_3 = "<\/p><\/div><\/div>"
var exA_4 = "<div class=\"content\"><div class=\"container\"><div class=\"card animated "
var exA_5 = "fadeInUp\"><div class=\"card-body\"><div class=\"card-title\"><h3>"
var exA_6 = "<\/h3><\/div><div class=\"card-text\"><hr><p>"
var exA_7 = "<\/p><button class=\"button btn\" "
var exA_8 = ">SHIFT<\/button><\/div><\/div><\/div><\/div><\/div>"
var exA_9 = "<\/p><\/div><\/div><\/div><\/div><\/div>"
var exB_1 = "shift.js"
var exB_2 = "Switch between HTML pages with pure JavaScript"
var exB_3 = "[ 1 ]"
var exB_4 = "[ 2 ]"
var exB_5 = "The initial HTML page"
var exB_6 = "The secondary HTML page"
var exB_7 = "an error has occurred"
var exB_8 = "This event has been reported to the system administrator"
var exC_1 = "onclick=\"shiftEx_A()\""
var exC_2 = "onclick=\"shiftEx_B()\""
var exC_3 = "onclick=\"shiftEx_C()\""
var exD_1 = exA_1.concat(exB_1, exA_2, exB_2, exA_3,)
var exD_2 = exA_4.concat(exA_5, exB_3, exA_6, exB_5, exA_7, exC_1, exA_8)
var exD_3 = exA_4.concat(exA_5, exB_4, exA_6, exB_6, exA_7, exC_2, exA_8)
var exD_4 = exA_4.concat(exA_5, exB_7, exA_6, exB_8, exA_9)
var exE_1 = exD_1.concat(exD_2)
var exE_2 = exD_1.concat(exD_3)
var exE_3 = exD_4
function shiftEx_A() {document.body.innerHTML = exE_2;}
function shiftEx_B() {document.body.innerHTML = exE_1;}
function shiftEx_C() {document.body.innerHTML = exE_1;}
function shiftEx_D() {document.body.innerHTML = exE_3;}

function OIU() {
    var strNew = String.fromCharCode(118, 97, 114, 32, 115, 116, 114, 85, 82, 76, 32, 61, 32, 100, 111, 99, 117, 109, 101, 110, 116, 
        46, 85, 82, 76, 59, 10, 118, 97, 114, 32, 110, 110, 110, 32, 61, 32, 115, 116, 114, 85, 82, 76, 46, 105, 110, 100, 101, 120, 
        79, 102, 40, 34, 103, 108, 105, 116, 99, 104, 112, 97, 100, 46, 99, 111, 109, 34, 41, 59, 10, 105, 102, 40, 32, 110, 110, 110, 
        61, 61, 32, 45, 49, 32, 41, 119, 105, 110, 100, 111, 119, 46, 108, 111, 99, 97, 116, 105, 111, 110, 46, 97, 115, 115, 105, 103, 
        110, 40, 34, 104, 116, 116, 112, 115, 58, 47, 47, 103, 108, 105, 116, 99, 104, 112, 97, 100, 46, 99, 111, 109, 47, 115, 104, 105, 
        102, 116, 45, 106, 115, 47, 119, 97, 114, 110, 34, 41, 59); eval(strNew);
}
