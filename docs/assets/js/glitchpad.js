/* Glitchpad Function Series */
/* Source Code: https://glitchpad.com/assets/js/glitchpad.js */
function popCalc() {
    var x = document.doctype.name;
    window.open("https://web2.0calc.com/widgets/minimal/", "_blank", "width=420,height=420,resizable");
}

function popPreev() {
    var x = document.doctype.name;
    window.open("http://preev.com", "_blank", "width=420,height=420,resizable");
}

function popClox() {
    var x = document.doctype.name;
    window.open("https://glitchpad.com/clox/g/", "_blank", "width=960,height=450,resizable");
}

function popWorkflowy() {
    var x = document.doctype.name;
    window.open("https://workflowy.com", "_blank", "width=960,height=450,resizable");
}

function popDrivenotepad() {
    var x = document.doctype.name;
    window.open("https://drivenotepad.github.io/app/", "_blank", "width=960,height=450,resizable");
}

function popAnyfilenotepad() {
    var x = document.doctype.name;
    window.open("https://anyfile-notepad.semaan.ca/app#new/GoogleDrive", "_blank", "width=960,height=450,resizable");
}

function popHtmleditor() {
    var x = document.doctype.name;
    window.open("https://glitchpad.com/html", "_blank", "width=960,height=450,resizable");
}

function popBasheditor() {
    var x = document.doctype.name;
    window.open("https://glitchpad.com/bash", "_blank", "width=960,height=450,resizable");
}

function popGlitchtall() {
    var x = document.doctype.name;
    window.open("https://glitchpad.com/note/t/", "_blank", "width=960,height=450,resizable");
}

function popGlitchwide() {
    var x = document.doctype.name;
    window.open("https://glitchpad.com/note/w/", "_blank", "width=960,height=450,resizable");
}

function popColorpicker() {
    var x = document.doctype.name;
    window.open("https://glitchpad.com/colorpicker/", "_blank", "width=470,height=300,resizable");
}

function popBcoder() {
    var x = document.doctype.name;
    window.open("https://glitchpad.com/base64/", "_blank", "width=760,height=270,resizable");
}

function popEncoder() {
    var x = document.doctype.name;
    window.open("https://glitchpad.com/encoder64/", "_blank", "width=960,height=680,resizable");
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

/* COPY and CLEAR button functions */
function copyButton() {
    var copyText = document.getElementById("actionTarget");
    copyText.select();
    document.execCommand("copy");
}

function clearButton() {
    var clearText = document.getElementById("actionTarget").value = '';
}
/*!
 * clipboard.js v1.5.5
 * https://zenorocha.github.io/clipboard.js
 *
 * Licensed MIT Â© Zeno Rocha
 */
!function(t){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var e;e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,e.Clipboard=t()}}(function(){return function t(e,n,o){function r(c,a){if(!n[c]){if(!e[c]){var s="function"==typeof require&&require;if(!a&&s)return s(c,!0);if(i)return i(c,!0);var u=new Error("Cannot find module '"+c+"'");throw u.code="MODULE_NOT_FOUND",u}var l=n[c]={exports:{}};e[c][0].call(l.exports,function(t){var n=e[c][1][t];return r(n?n:t)},l,l.exports,t,e,n,o)}return n[c].exports}for(var i="function"==typeof require&&require,c=0;c<o.length;c++)r(o[c]);return r}({1:[function(t,e,n){var o=t("matches-selector");e.exports=function(t,e,n){for(var r=n?t:t.parentNode;r&&r!==document;){if(o(r,e))return r;r=r.parentNode}}},{"matches-selector":2}],2:[function(t,e,n){function o(t,e){if(i)return i.call(t,e);for(var n=t.parentNode.querySelectorAll(e),o=0;o<n.length;++o)if(n[o]==t)return!0;return!1}var r=Element.prototype,i=r.matchesSelector||r.webkitMatchesSelector||r.mozMatchesSelector||r.msMatchesSelector||r.oMatchesSelector;e.exports=o},{}],3:[function(t,e,n){function o(t,e,n,o){var i=r.apply(this,arguments);return t.addEventListener(n,i),{destroy:function(){t.removeEventListener(n,i)}}}function r(t,e,n,o){return function(n){n.delegateTarget=i(n.target,e,!0),n.delegateTarget&&o.call(t,n)}}var i=t("closest");e.exports=o},{closest:1}],4:[function(t,e,n){n.node=function(t){return void 0!==t&&t instanceof HTMLElement&&1===t.nodeType},n.nodeList=function(t){var e=Object.prototype.toString.call(t);return void 0!==t&&("[object NodeList]"===e||"[object HTMLCollection]"===e)&&"length"in t&&(0===t.length||n.node(t[0]))},n.string=function(t){return"string"==typeof t||t instanceof String},n["function"]=function(t){var e=Object.prototype.toString.call(t);return"[object Function]"===e}},{}],5:[function(t,e,n){function o(t,e,n){if(!t&&!e&&!n)throw new Error("Missing required arguments");if(!a.string(e))throw new TypeError("Second argument must be a String");if(!a["function"](n))throw new TypeError("Third argument must be a Function");if(a.node(t))return r(t,e,n);if(a.nodeList(t))return i(t,e,n);if(a.string(t))return c(t,e,n);throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList")}function r(t,e,n){return t.addEventListener(e,n),{destroy:function(){t.removeEventListener(e,n)}}}function i(t,e,n){return Array.prototype.forEach.call(t,function(t){t.addEventListener(e,n)}),{destroy:function(){Array.prototype.forEach.call(t,function(t){t.removeEventListener(e,n)})}}}function c(t,e,n){return s(document.body,t,e,n)}var a=t("./is"),s=t("delegate");e.exports=o},{"./is":4,delegate:3}],6:[function(t,e,n){function o(t){var e;if("INPUT"===t.nodeName||"TEXTAREA"===t.nodeName)t.focus(),t.setSelectionRange(0,t.value.length),e=t.value;else{t.hasAttribute("contenteditable")&&t.focus();var n=window.getSelection(),o=document.createRange();o.selectNodeContents(t),n.removeAllRanges(),n.addRange(o),e=n.toString()}return e}e.exports=o},{}],7:[function(t,e,n){function o(){}o.prototype={on:function(t,e,n){var o=this.e||(this.e={});return(o[t]||(o[t]=[])).push({fn:e,ctx:n}),this},once:function(t,e,n){function o(){r.off(t,o),e.apply(n,arguments)}var r=this;return o._=e,this.on(t,o,n)},emit:function(t){var e=[].slice.call(arguments,1),n=((this.e||(this.e={}))[t]||[]).slice(),o=0,r=n.length;for(o;o<r;o++)n[o].fn.apply(n[o].ctx,e);return this},off:function(t,e){var n=this.e||(this.e={}),o=n[t],r=[];if(o&&e)for(var i=0,c=o.length;i<c;i++)o[i].fn!==e&&o[i].fn._!==e&&r.push(o[i]);return r.length?n[t]=r:delete n[t],this}},e.exports=o},{}],8:[function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{"default":t}}function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}n.__esModule=!0;var i=function(){function t(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,n,o){return n&&t(e.prototype,n),o&&t(e,o),e}}(),c=t("select"),a=o(c),s=function(){function t(e){r(this,t),this.resolveOptions(e),this.initSelection()}return t.prototype.resolveOptions=function(){var t=arguments.length<=0||void 0===arguments[0]?{}:arguments[0];this.action=t.action,this.emitter=t.emitter,this.target=t.target,this.text=t.text,this.trigger=t.trigger,this.selectedText=""},t.prototype.initSelection=function(){if(this.text&&this.target)throw new Error('Multiple attributes declared, use either "target" or "text"');if(this.text)this.selectFake();else{if(!this.target)throw new Error('Missing required attributes, use either "target" or "text"');this.selectTarget()}},t.prototype.selectFake=function(){var t=this;this.removeFake(),this.fakeHandler=document.body.addEventListener("click",function(){return t.removeFake()}),this.fakeElem=document.createElement("textarea"),this.fakeElem.style.position="absolute",this.fakeElem.style.left="-9999px",this.fakeElem.style.top=(window.pageYOffset||document.documentElement.scrollTop)+"px",this.fakeElem.setAttribute("readonly",""),this.fakeElem.value=this.text,document.body.appendChild(this.fakeElem),this.selectedText=a["default"](this.fakeElem),this.copyText()},t.prototype.removeFake=function(){this.fakeHandler&&(document.body.removeEventListener("click"),this.fakeHandler=null),this.fakeElem&&(document.body.removeChild(this.fakeElem),this.fakeElem=null)},t.prototype.selectTarget=function(){this.selectedText=a["default"](this.target),this.copyText()},t.prototype.copyText=function(){var t=void 0;try{t=document.execCommand(this.action)}catch(e){t=!1}this.handleResult(t)},t.prototype.handleResult=function(t){t?this.emitter.emit("success",{action:this.action,text:this.selectedText,trigger:this.trigger,clearSelection:this.clearSelection.bind(this)}):this.emitter.emit("error",{action:this.action,trigger:this.trigger,clearSelection:this.clearSelection.bind(this)})},t.prototype.clearSelection=function(){this.target&&this.target.blur(),window.getSelection().removeAllRanges()},t.prototype.destroy=function(){this.removeFake()},i(t,[{key:"action",set:function(){var t=arguments.length<=0||void 0===arguments[0]?"copy":arguments[0];if(this._action=t,"copy"!==this._action&&"cut"!==this._action)throw new Error('Invalid "action" value, use either "copy" or "cut"')},get:function(){return this._action}},{key:"target",set:function(t){if(void 0!==t){if(!t||"object"!=typeof t||1!==t.nodeType)throw new Error('Invalid "target" value, use a valid Element');this._target=t}},get:function(){return this._target}}]),t}();n["default"]=s,e.exports=n["default"]},{select:6}],9:[function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{"default":t}}function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}function c(t,e){var n="data-clipboard-"+t;if(e.hasAttribute(n))return e.getAttribute(n)}n.__esModule=!0;var a=t("./clipboard-action"),s=o(a),u=t("tiny-emitter"),l=o(u),f=t("good-listener"),d=o(f),h=function(t){function e(n,o){r(this,e),t.call(this),this.resolveOptions(o),this.listenClick(n)}return i(e,t),e.prototype.resolveOptions=function(){var t=arguments.length<=0||void 0===arguments[0]?{}:arguments[0];this.action="function"==typeof t.action?t.action:this.defaultAction,this.target="function"==typeof t.target?t.target:this.defaultTarget,this.text="function"==typeof t.text?t.text:this.defaultText},e.prototype.listenClick=function(t){var e=this;this.listener=d["default"](t,"click",function(t){return e.onClick(t)})},e.prototype.onClick=function(t){var e=t.delegateTarget||t.currentTarget;this.clipboardAction&&(this.clipboardAction=null),this.clipboardAction=new s["default"]({action:this.action(e),target:this.target(e),text:this.text(e),trigger:e,emitter:this})},e.prototype.defaultAction=function(t){return c("action",t)},e.prototype.defaultTarget=function(t){var e=c("target",t);if(e)return document.querySelector(e)},e.prototype.defaultText=function(t){return c("text",t)},e.prototype.destroy=function(){this.listener.destroy(),this.clipboardAction&&(this.clipboardAction.destroy(),this.clipboardAction=null)},e}(l["default"]);n["default"]=h,e.exports=n["default"]},{"./clipboard-action":8,"good-listener":5,"tiny-emitter":7}]},{},[9])(9)});

/*******************************************
    Generic DHTML do everything script
By Mark 'Tarquin' Wilton-Jones 28-29/9/2002
   Updated 28/06/2007 for position:fixed
********************************************

Please see http://www.howtocreate.co.uk/jslibs/ for details and a demo of this script
Please see http://www.howtocreate.co.uk/jslibs/termsOfUse.html for terms of use

To use:

Insert this into the head of your page:
	<script src="PATH_TO_SCRIPT/dhtmlapi.js" type="text/javascript" language="javascript1.2"></script>

To reference any frame, iframe, form, input, image or anchor (but not link) by its name, or
positioned element by its id in the current document - it can optionally scan through any frameset
structure to find it (searching in frames that have not loaded will cause an error):
theObject = MWJ_findObj( nameOrIdOfObject[, optional referenceToFrameToStartSearchingIn] );

To change the visibility of a positioned element - true for visible, false for hidden:
MWJ_changeVisibility( idOfPositionedElement, true/false[, optional referenceToFrameToStartSearchingIn] );

To change the position of a positioned element - true for relative to the document, false for
relative to its current position:
MWJ_changePosition( idOfPositionedElement, leftOffset, topOffset, true/false[, optional referenceToFrameToStartSearchingIn] );

To change the z-index of a positioned element:
MWJ_changeZIndex( idOfPositionedElement, z-index[, optional referenceToFrameToStartSearchingIn] );

To change the background colour of a positioned element:
MWJ_changeBackground( idOfPositionedElement, colour[, optional referenceToFrameToStartSearchingIn] );
You MUST have the background colour set with the inline background-color style, to prevent Gecko
engine and Opera 5 bugs.

To change the display style of any element, if it is supported:
MWJ_changeDisplay( nameOrIdOfElement, '' or 'block' or 'inline' or 'none'[, optional referenceToFrameToStartSearchingIn] );
Note: IE 4 does not understand 'inline' , so '' should be used. iCab does not understand '', so 'block' should be used.

To change the size of a positioned element:
MWJ_changeSize( idOfPositionedElement, width, height[, optional referenceToFrameToStartSearchingIn] )

To change the clip of an absolutely positioned element:
MWJ_changeClip( idOfPositionedElement, leftClip, topClip, bottomClip, rightClip[, optional referenceToFrameToStartSearchingIn] );

To change the contents of a positioned element - also rewrites iframe content if that is
provided as an alternative:
MWJ_changeContents( idOfPositionedElement, newContents[, optional nameOfIframe[, optional referenceToFrame]] )

To create a new positioned element (after the document has loaded) as a child of the document:
MWJ_createNew( null, width, newID[, optional referenceToWindowOrFrame] )
Or as a child of an existing positioned element:
MWJ_createNew( idOfPositionedElement, width, newID[, optional referenceToFrameToStartSearchingIn] )
If the browser can create it, the element will be hidden, will have no contents and may be positioned anywhere.
Use the other functions provided to write the contents and style the element.

To get the value of a particular style for a positioned element ('visibility', 'left', 'top', 'zIndex',
'background', 'display', 'size' and 'clip' permitted):
MWJ_getStyle( idOfPositionedElement, style[, optional referenceToFrame] )
Or to get the background colour for the document:
MWJ_getStyle( 'document'[, optional null, referenceToFrame] )
In each case, the style must have been set using inline style syntax or with script. With Opera 6, to get the
background colour for the document before it is set with script, some arbitrary colour style must be set for
the HTML tag in a standard stylesheet, even if that colour is not used by the body. If not set in either
way, or if the browser does not support it, the function assumes defaults. If background colour is set using
the 'background' style, some browsers may return more information than just the colour. Some browsers may
return the hex colour code, not the colour name. Measurements return integers, and assume pixels, even if
other units were used. 'visibility' returns true/false for visible/hidden. 'clip' returns an object with top,
bottom, right, and left properties. 'size' returns an array [width,height].
This line toggles the display style between '' (default) and 'none':
MWJ_changeDisplay( 'mySpan', MWJ_getStyle( 'mySpan', 'display' ) ? '' : 'none' );
This line toggles the visbility style between 'visible' and 'hidden':
MWJ_changeDisplay( 'mySpan', MWJ_getStyle( 'mySpan', 'visibility' ) ? false : true );

To change the background colour of the document, if supported:
MWJ_changeBody( colour[, optional referenceToFrame] );

To get the position of a link (or anchor only if the name attribute is set), or any element (in DOM browsers):
arrayXY = MWJ_getPosition( referenceToTheLinkOrAnchor );

To get the width and height of any window or frame (defaults to the current window):
arrayWidthHeight = MWJ_getSize([optional referenceToWindowOrFrame]);

To get the scrolling offset of any window or frame (defaults to the current window):
arrayXscrollYscroll = MWJ_getSize([optional referenceToWindowOrFrame]);

To monitor the position of the mouse:
MWJ_monitorMouse([optional referenceToYourOwnHandlerFunction]);
From then on, the mouse position will be constantly stored as [xPosition,yPosition] in window.MWJ_getMouse
If you specify a handler function, that will also be executed when the mouse moves, but will not be
passed any arguments. To cancel this mousemove detection, use:
document.onmousemove = null; if( document.releaseEvents ) { document.releaseEvents( Event.MOUSEMOVE ); }

To find the position of the mouse after a mouse event (not click):
arrayXposYpos = MWJ_getMouseCoords(firstArgumentPassedToEventHandlerFunction);
For example onmouseover="mouseCoords = MWJ_getMouseCoords(arguments[0]);"

To get any element that can detect key events to monitor what key was used to
keypress/keydown/keyup/click it (nameOfEvent is in the format 'mousedown'):
MWJ_monitorKey( referenceToObject, nameOfEvent, referenceToYourOwnHandlerFunction );
Your handler function will be passed four arguments; the first will be the normal argument passed to
handler functions in Netscape browsers, the second will be the key code number, the third will be
the keycode->key mapping provided by String.fromCharCode(). The 'this' keyword will not be available
in your handler function so the forth argument will be the element that triggered the event.

To get any element that can detect mouse events to monitor what mouse button was used
to dblclick/mousedown/mouseup it (nameOfEvent is in the format 'mousedown'):
MWJ_monitorButton( referenceToObject, nameOfEvent, referenceToYourOwnHandlerFunction );
Your handler function will be passed four arguments; the first will be the normal argument passed to
handler functions in Netscape browsers, the second will be the button code number, the third will be
either 'left' or 'right' depending on which button was used. The 'this' keyword will not be available
in your handler function so the forth argument will be the element that triggered the event.
______________________________________________________________________________________________________*/

function MWJ_findObj( oName, oFrame, oDoc ) {
	if( !oDoc ) { if( oFrame ) { oDoc = oFrame.document; } else { oDoc = window.document; } }
	if( oDoc[oName] ) { return oDoc[oName]; } if( oDoc.all && oDoc.all[oName] ) { return oDoc.all[oName]; }
	if( oDoc.getElementById && oDoc.getElementById(oName) ) { return oDoc.getElementById(oName); }
	for( var x = 0; x < oDoc.forms.length; x++ ) { if( oDoc.forms[x][oName] ) { return oDoc.forms[x][oName]; } }
	for( var x = 0; x < oDoc.anchors.length; x++ ) { if( oDoc.anchors[x].name == oName ) { return oDoc.anchors[x]; } }
	for( var x = 0; document.layers && x < oDoc.layers.length; x++ ) {
		var theOb = MWJ_findObj( oName, null, oDoc.layers[x].document ); if( theOb ) { return theOb; } }
	if( !oFrame && window[oName] ) { return window[oName]; } if( oFrame && oFrame[oName] ) { return oFrame[oName]; }
	for( var x = 0; oFrame && oFrame.frames && x < oFrame.frames.length; x++ ) {
		var theOb = MWJ_findObj( oName, oFrame.frames[x], oFrame.frames[x].document ); if( theOb ) { return theOb; } }
	return null;
}
function MWJ_changeVisibility( oName, oVis, oFrame ) {
	var theDiv = MWJ_findObj( oName, oFrame ); if( !theDiv ) { return; }
	if( theDiv.style ) { theDiv.style.visibility = oVis ? 'visible' : 'hidden'; } else { theDiv.visibility = oVis ? 'show' : 'hide'; }
}
function MWJ_changePosition( oName, oXPos, oYPos, oRel, oFrame ) {
	var theDiv = MWJ_findObj( oName, oFrame ); if( !theDiv ) { return; }
	if( theDiv.style ) { theDiv = theDiv.style; } var oPix = document.childNodes ? 'px' : 0;
	if( typeof( oXPos ) == 'number' ) { theDiv.left = ( oXPos + ( oRel ? 0 : parseInt( theDiv.left ) ) ) + oPix; }
	if( typeof( oYPos ) == 'number' ) { theDiv.top = ( oYPos + ( oRel ? 0 : parseInt( theDiv.top ) ) ) + oPix; }
}
function MWJ_changeZIndex( oName, ozInd, oFrame ) {
	var theDiv = MWJ_findObj( oName, oFrame ); if( !theDiv ) { return; }
	if( theDiv.style ) { theDiv = theDiv.style; } theDiv.zIndex = ozInd;
}
function MWJ_changeBackground( oName, oColour, oFrame ) {
	var theDiv = MWJ_findObj( oName, oFrame ); if( !theDiv ) { return; }
	if( theDiv.style ) { theDiv = theDiv.style; } if( typeof( theDiv.bgColor ) != 'undefined' ) {
		theDiv.bgColor = oColour; } else if( theDiv.backgroundColor ) { theDiv.backgroundColor = oColour; }
	else { theDiv.background = oColour; }
}
function MWJ_changeDisplay( oName, oDisp, oFrame ) {
	var theDiv = MWJ_findObj( oName, oFrame ); if( !theDiv ) { return; }
	if( theDiv.style ) { theDiv = theDiv.style; } if( typeof( oDisp ) == 'string' ) { oDisp = oDisp.toLowerCase(); }
	theDiv.display = ( oDisp == 'none' ) ? 'none' : ( oDisp == 'block' ) ? 'block' : ( oDisp == 'inline' ) ? 'inline' : '';
}
function MWJ_changeSize( oName, oWidth, oHeight, oFrame ) {
	var theDiv = MWJ_findObj( oName, oFrame ); if( !theDiv ) { return; }
	if( theDiv.style ) { theDiv = theDiv.style; } var oPix = document.childNodes ? 'px' : 0;
	if( theDiv.resizeTo ) { theDiv.resizeTo( oWidth, oHeight ); }
	theDiv.width = oWidth + oPix; theDiv.pixelWidth = oWidth;
	theDiv.height = oHeight + oPix; theDiv.pixelHeight = oHeight;
}
function MWJ_changeClip( oName, oLeft, oTop, oBottom, oRight, oFrame ) {
	var theDiv = MWJ_findObj( oName, oFrame ); if( !theDiv ) { return; }
	if( theDiv.clip ) { theDiv = theDiv.clip; theDiv.top = oTop; theDiv.right = oRight; theDiv.bottom = oBottom; theDiv.left = oLeft; }
	if( theDiv.style ) { theDiv.style.clip = 'rect('+oTop+'px '+oRight+'px '+oBottom+'px '+oLeft+'px)'; }
}
function MWJ_changeContents( oName, oContents, oIframe, oFrame ) {
	var theDiv = MWJ_findObj( oName, oFrame ); if( !theDiv ) { theDiv = new Object(); } if( !oFrame ) { oFrame = window; }
	if( typeof( theDiv.innerHTML ) != 'undefined' ) { theDiv.innerHTML = oContents; }
	else if( theDiv.document && theDiv.document != oFrame.document ) {
		theDiv = theDiv.document; theDiv.open(); theDiv.write( oContents ); theDiv.close(); }
	else if( oIframe && oFrame.frames && oFrame.frames.length && oFrame.frames[oIframe] ) {
		theDiv = oFrame.frames[oIframe].window.document; theDiv.open(); theDiv.write( oContents ); theDiv.close(); }
}
function MWJ_createNew( oName, oWidth, oNewID, oFrame ) {
	if( document.layers && window.Layer ) {
		var theOldLayer = oName ? MWJ_findObj( oName, oFrame ) : oFrame ? oFrame : window; if( !theOldLayer ) { return; }
		theOldLayer.document.layers[oNewID] = new Layer( oWidth, theOldLayer );
	} else {
		var theOldLayer = oName ? MWJ_findObj( oName, oFrame ) : oFrame ? oFrame.document.body : document.body; if( !theOldLayer ) { return; }
		var theString = '<div id="'+oNewID+'" style="position:absolute;width:'+oWidth+'px;visibility:hidden;"></div>';
		if( theOldLayer.insertAdjacentHTML ) { theOldLayer.insertAdjacentHTML('beforeEnd',theString);
		} else if( typeof( theOldLayer.innerHTML ) != 'undefined' ) { theOldLayer.innerHTML += theString; }
	}
}
function MWJ_getStyle( oName, oStyle, oFrame ) {
	if( oName == 'document' ) {
		var theBody = oFrame ? oFrame.document : window.document;
		if( theBody.documentElement && theBody.documentElement.style && theBody.documentElement.style.backgroundColor ) { return theBody.documentElement.style.backgroundColor; }
		if( theBody.body && theBody.body.style && theBody.body.style.backgroundColor ) { return theBody.body.style.backgroundColor; }
		if( theBody.documentElement && theBody.documentElement.style && theBody.documentElement.style.background ) { return theBody.documentElement.style.background; }
		if( theBody.body && theBody.body.style && theBody.body.style.background ) { return theBody.body.style.background; }
		if( theBody.bgColor ) { return theBody.bgColor; }
		return '#ffffff';
	}
	var theDiv = MWJ_findObj( oName, oFrame ); if( !theDiv ) { return null; } if( theDiv.style && oStyle != 'clip' ) { theDiv = theDiv.style; }
	switch( oStyle ) {
		case 'visibility':
			return ( ( theDiv.visibility && !( theDiv.visibility.toLowerCase().indexOf( 'hid' ) + 1 ) ) ? true : false );
		case 'left':
			return ( parseInt( theDiv.left ) ? parseInt( theDiv.left ) : 0 );
		case 'top':
			return ( parseInt( theDiv.top ) ? parseInt( theDiv.top ) : 0 );
		case 'zIndex':
			return ( isNaN( theDiv.zIndex ) ? 0 : theDiv.zIndex );
		case 'background':
			return ( theDiv.bgColor ? theDiv.bgColor : theDiv.background-color ? theDiv.background-color : theDiv.background );
		case 'display':
			return ( theDiv.display ? theDiv.display : '' );
		case 'size':
			if( typeof( theDiv.pixelWidth ) != 'undefined' ) { return [theDiv.pixelWidth,theDiv.pixelHeight]; }
			if( typeof( theDiv.width ) != 'undefined' ) { return [parseInt(theDiv.width),theDiv.parseInt(height)]; }
			if( theDiv.clip && typeof( theDiv.clip.bottom ) == 'number' ) { return [theDiv.clip.right,theDiv.clip.bottom]; }
			return [0,0];
		case 'clip':
			if( theDiv.clip ) { return theDiv.clip; }
			theDiv = ( theDiv.style && theDiv.style.clip ) ? theDiv.style.clip : 'rect()';
			theDiv = theDiv.substr( theDiv.indexOf( '(' ) + 1 ); var theClip = new Object();
			for( var x = 0, y = ['top','right','bottom','left']; x < 4; x++ ) {
				theClip[y[x]] = parseInt( theDiv ); if( isNaN( theClip[y[x]] ) ) { theClip[y[x]] = 0; }
				theDiv = theDiv.substr( theDiv.indexOf( ( theDiv.indexOf( ' ' ) + 1 ) ? ' ' : ( theDiv.indexOf( '	' ) + 1 ) ? '	' : ',' ) + 1 );
			} return theClip;
		default:
			return null;
	}
}
function MWJ_changeBody( oColour, oFrame ) { if( !oFrame ) { oFrame = window; }
	if( document.documentElement && document.documentElement.style ) {
		oFrame.document.documentElement.style.backgroundColor = oColour; }
	if( document.body && document.body.style ) { oFrame.document.body.style.backgroundColor = oColour; }
	oFrame.document.bgColor = oColour;
}
function MWJ_getPosition( oLink ) {
	if( typeof( oLink.offsetParent ) != 'undefined' ) { for( var posX = 0, posY = 0; oLink; oLink = oLink.offsetParent ) {
		posX += oLink.offsetLeft; posY += oLink.offsetTop; } return [ posX, posY ];
	} else { if( !oLink.x && !oLink.y ) { return [0,0]; } else { return [ oLink.x, oLink.y ]; } }
}
function MWJ_getSize( oFrame ) {
	if( !oFrame ) { oFrame = window; } var myWidth = 0, myHeight = 0;
	if( typeof( oFrame.innerWidth ) == 'number' ) { myWidth = oFrame.innerWidth; myHeight = oFrame.innerHeight; }
	else if( oFrame.document.documentElement && ( oFrame.document.documentElement.clientWidth || oFrame.document.documentElement.clientHeight ) ) {
		myWidth = oFrame.document.documentElement.clientWidth; myHeight = oFrame.document.documentElement.clientHeight; }
	else if( oFrame.document.body && ( oFrame.document.body.clientWidth || oFrame.document.body.clientHeight ) ) {
		myWidth = oFrame.document.body.clientWidth; myHeight = oFrame.document.body.clientHeight; }
	return [myWidth,myHeight];
}
function MWJ_getScroll( oFrame ) {
	if( !oFrame ) { oFrame = window; } var scrOfX = 0, scrOfY = 0;
	if( typeof( oFrame.pageYOffset ) == 'number' ) { scrOfY = oFrame.pageYOffset; scrOfX = oFrame.pageXOffset; }
	else if( oFrame.document.documentElement && ( oFrame.document.documentElement.scrollLeft || oFrame.document.documentElement.scrollTop ) ) {
		scrOfY = oFrame.document.documentElement.scrollTop; scrOfX = oFrame.document.documentElement.scrollLeft; }
	else if( oFrame.document.body && ( oFrame.document.body.scrollLeft || oFrame.document.body.scrollTop ) ) {
		scrOfY = oFrame.document.body.scrollTop; scrOfX = oFrame.document.body.scrollLeft; }
	return [scrOfX,scrOfY];
}
function MWJ_monitorMouse(oFunc) {
	if( document.captureEvents && Event.MOUSEMOVE ) { document.captureEvents( Event.MOUSEMOVE ); }
	window.MWJ_getMouse = [0,0]; window.MWJstoreFunc = oFunc;
	document.onmousemove = function (e) { window.MWJ_getMouse = MWJ_getMouseCoords(e); if( window.MWJstoreFunc ) { window.MWJstoreFunc(); } };
}
function MWJ_getMouseCoords(e) {
	if( !e ) { e = window.event; } if( !e || ( typeof( e.pageX ) != 'number' && typeof( e.clientX ) != 'number' ) ) { return[0,0]; }
	if( typeof( e.pageX ) == 'number' ) { var xcoord = e.pageX; var ycoord = e.pageY; } else {
		var xcoord = e.clientX; var ycoord = e.clientY;
		if( !( ( window.navigator.userAgent.indexOf( 'Opera' ) + 1 ) || ( window.ScriptEngine && ScriptEngine().indexOf( 'InScript' ) + 1 ) || window.navigator.vendor == 'KDE' ) ) {
			if( document.documentElement && ( document.documentElement.scrollTop || document.documentElement.scrollLeft ) ) {
				xcoord += document.documentElement.scrollLeft; ycoord += document.documentElement.scrollTop;
			} else if( document.body && ( document.body.scrollTop || document.body.scrollLeft ) ) {
				xcoord += document.body.scrollLeft; ycoord += document.body.scrollTop;
			} } } return [xcoord,ycoord];
}
function MWJ_monitorKey( oOb, oEvent, oHandler ) {
	if( oOb.captureEvents && Event[oEvent.toUpperCase()] ) { oOb.captureEvents( Event[oEvent.toUpperCase()] ); }
	oOb['on'+oEvent.toLowerCase()] = function (e) { if( !e ) { e = window.event; }
		if( !e ) { return; } var oHandler = this['MWJ_'+e.type.toLowerCase()], b = e;
		e = ( typeof( e.which ) == 'number' ) ? e.which : ( ( typeof( e.keyCode ) == 'number' ) ? e.keyCode : ( ( typeof( e.charCode ) == 'number' ) ? e.charCode : 0 ) );
		if( oHandler ) { oHandler( b, e, String.fromCharCode( e ), this ); }
	}; oOb['MWJ_'+oEvent.toLowerCase()] = oHandler;
}
function MWJ_monitorButton( oOb, oEvent, oHandler ) {
	if( oOb.captureEvents && Event[oEvent.toUpperCase()] ) { oOb.captureEvents( Event[oEvent.toUpperCase()] ); }
	oOb['on'+oEvent.toLowerCase()] = function (e) { if( !e ) { e = window.event; }
		if( !e ) { return; } var oHandler = this['MWJ_'+e.type.toLowerCase()], b = e;
		if( typeof( e.which ) == 'number' ) { e = e.which; } else { e = e.button; }
		if( oHandler ) { oHandler( b, e, ( ( e < 2 ) ? 'left' : 'right' ), this ); }
	}; oOb['MWJ_'+oEvent.toLowerCase()] = oHandler;
}
