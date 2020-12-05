
function initPage() {
	var charPopup = document.getElementById("charPopup");
	var charPopupButton = document.getElementById("charPopupButton");

	// When the user clicks on the button, open the charPopup
	charPopupButton.onclick = function() {
	  charPopup.style.display = "block";
	}

	// When the user clicks on <span> (x), close the charPopup
	var span = document.getElementsByClassName("closePopup")[0];
	span.onclick = function() {
	  charPopup.style.display = "none";
	}

	// When the user clicks anywhere outside of the charPopup, close it
	window.onclick = function(event) {
	  if (event.target == charPopup) {
		charPopup.style.display = "none";
	  }
	}

	// Keep track of the last focused input or textarea in a variable
	window.lastFocusedInput = null;
	var inputs = document.getElementsByTagName('input');
	for (var i = 0; i < inputs.length; i += 1) {
		var thisInput = inputs[i];
		thisInput.onfocus = function(event) {
			window.lastFocusedInput = event.target;
		}
	}
	var textareas = document.getElementsByTagName('textarea');
	for (var j = 0; j < textareas.length; j += 1) {
		var ta = textareas[j];
		ta.onfocus = function(event) {
			window.lastFocusedInput = event.target;
		}
	}
	// Create the buttons and add them to the document
	//~example: <button class="charButton" onclick="pasteChar('ì');">ì</button>
	var chars = ['é', 'à', 'è', 'ì', 'ù', 'ǜ', 'ə', 'ø'];
	var buttonContainer = document.getElementById("buttonContainer");
	for (var k = 0; k < chars.length; k += 1) {
		var node = document.createElement("button");
		var textnode = document.createTextNode(chars[k]);
		node.appendChild(textnode);
		node.className = "charButton";
		node.onclick = function(event) {
			pasteChar(event.target.innerHTML);
		}
		buttonContainer.appendChild(node);
		buttonContainer.appendChild(document.createTextNode(" ")); // add a whitespace
	}

}
//~ add a string to an input or textarea at the current position of the caret
function insertAtCaret(elementId, s) {
	var e = document.getElementById(elementId); // txtarea or input
	var scrollPos = e.scrollTop;
	var caretPos = e.selectionStart;

	var front = (e.value).substring(0, caretPos);
	var back = (e.value).substring(e.selectionEnd, e.value.length);
	e.value = front + s + back;
	caretPos = caretPos + s.length;
	e.selectionStart = caretPos;
	e.selectionEnd = caretPos;
	e.focus();
	e.scrollTop = scrollPos;
}

function pasteChar(s) {
	if (window.lastFocusedInput !== null) insertAtCaret(window.lastFocusedInput.id, s);
	// we are done, so hide the popup
	document.getElementById("charPopup").style.display = "none";
} 

