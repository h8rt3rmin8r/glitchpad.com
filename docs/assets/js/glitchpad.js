/* Glitchpad Function Series */
/* Source Code: https://glitchpad.com/assets/js/glitchpad.js */
function popCalc() {
    var x = document.doctype.name;
    window.open("https://web2.0calc.com/widgets/minimal/", "_blank",
        "width=420,height=420,resizable");
}

function popPreev() {
    var x = document.doctype.name;
    window.open("http://preev.com", "_blank", "width=420,height=420,resizable");
}

function popClox() {
    var x = document.doctype.name;
    window.open("https://glitchpad.com/clox/g/", "_blank",
        "width=960,height=450,resizable");
}

function popWorkflowy() {
    var x = document.doctype.name;
    window.open("https://workflowy.com", "_blank",
        "width=960,height=450,resizable");
}

function popDrivenotepad() {
    var x = document.doctype.name;
    window.open("https://drivenotepad.github.io/app/", "_blank",
        "width=960,height=450,resizable");
}

function popAnyfilenotepad() {
    var x = document.doctype.name;
    window.open("https://anyfile-notepad.semaan.ca/app#new/GoogleDrive",
        "_blank",
        "width=960,height=450,resizable");
}

function popHtmleditor() {
    var x = document.doctype.name;
    window.open("https://glitchpad.com/html", "_blank",
        "width=960,height=450,resizable");
}

function popBasheditor() {
    var x = document.doctype.name;
    window.open("https://glitchpad.com/bash", "_blank",
        "width=960,height=450,resizable");
}

function popGlitchtall() {
    var x = document.doctype.name;
    window.open("https://glitchpad.com/note/t/", "_blank",
        "width=960,height=450,resizable");
}

function popGlitchwide() {
    var x = document.doctype.name;
    window.open("https://glitchpad.com/note/w/", "_blank",
        "width=960,height=450,resizable");
}

function popColorpicker() {
    var x = document.doctype.name;
    window.open("https://glitchpad.com/colorpicker/", "_blank",
        "width=470,height=300,resizable");
}

function popBcoder() {
    var x = document.doctype.name;
    window.open("https://glitchpad.com/base64/", "_blank",
        "width=760,height=450,resizable");
}

/* TOGGLE DROPDOWN MENUS - Source Code: https://pastebin.com/raw/D8Q5J11h */
/* Glitchpad functional references */
function glitchDropEx() {
    document.getElementById("glitchDropExID").classList.toggle("show");
}

function glitchDropCalc() {
    document.getElementById("glitchDropCalcID").classList.toggle("show");
}

function glitchDropNotes() {
    document.getElementById("glitchDropNotesID").classList.toggle("show");
}

function glitchDropIde() {
    document.getElementById("glitchDropIdeID").classList.toggle("show");
}
/* Additional functions for scalable external deployment */
function glitchDropA() {
    document.getElementById("glitchDropIDa").classList.toggle("show");
}

function glitchDropB() {
    document.getElementById("glitchDropIDb").classList.toggle("show");
}

function glitchDropC() {
    document.getElementById("glitchDropIDc").classList.toggle("show");
}

function glitchDropD() {
    document.getElementById("glitchDropIDd").classList.toggle("show");
}

function glitchDropE() {
    document.getElementById("glitchDropIDe").classList.toggle("show");
}

function glitchDropF() {
    document.getElementById("glitchDropIDf").classList.toggle("show");
}

function glitchDropG() {
    document.getElementById("glitchDropIDg").classList.toggle("show");
}

function glitchDropH() {
    document.getElementById("glitchDropIDh").classList.toggle("show");
}

function glitchDropI() {
    document.getElementById("glitchDropIDi").classList.toggle("show");
}

function glitchDropJ() {
    document.getElementById("glitchDropIDj").classList.toggle("show");
}

function glitchDropK() {
    document.getElementById("glitchDropIDk").classList.toggle("show");
}

function glitchDropL() {
    document.getElementById("glitchDropIDl").classList.toggle("show");
}

function glitchDropM() {
    document.getElementById("glitchDropIDm").classList.toggle("show");
}

function glitchDropN() {
    document.getElementById("glitchDropIDn").classList.toggle("show");
}

function glitchDropO() {
    document.getElementById("glitchDropIDo").classList.toggle("show");
}

function glitchDropP() {
    document.getElementById("glitchDropIDp").classList.toggle("show");
}

function glitchDropQ() {
    document.getElementById("glitchDropIDq").classList.toggle("show");
}

function glitchDropR() {
    document.getElementById("glitchDropIDr").classList.toggle("show");
}

function glitchDropS() {
    document.getElementById("glitchDropIDs").classList.toggle("show");
}

function glitchDropT() {
    document.getElementById("glitchDropIDt").classList.toggle("show");
}

function glitchDropU() {
    document.getElementById("glitchDropIDu").classList.toggle("show");
}

function glitchDropV() {
    document.getElementById("glitchDropIDv").classList.toggle("show");
}

function glitchDropW() {
    document.getElementById("glitchDropIDw").classList.toggle("show");
}

function glitchDropX() {
    document.getElementById("glitchDropIDx").classList.toggle("show");
}

function glitchDropY() {
    document.getElementById("glitchDropIDy").classList.toggle("show");
}

function glitchDropZ() {
    document.getElementById("glitchDropIDz").classList.toggle("show");
}
/* Close the dropdown if the user clicks outside of it */
window.onclick = function (event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
};
