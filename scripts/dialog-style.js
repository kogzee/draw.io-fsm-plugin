var sheet = (function() {
	// Create the <style> tag
	var style = document.createElement("style");

	// Add a media (and/or media query) here if you'd like!
	// style.setAttribute("media", "screen")
	// style.setAttribute("media", "only screen and (max-width : 1024px)")

	// WebKit hack :(
	style.appendChild(document.createTextNode(""));

	// Add the <style> element to the page
	document.head.appendChild(style);

	return style.sheet;
})();


sheet.insertRule("dialog.fsm { text-align: center; bottom: 50px;}", 0);
sheet.insertRule("dialog.fsm button { font-size: 20pt; cursor: pointer; margin: 2px; border-radius: 7px; }", 0);
sheet.insertRule("dialog.fsm button.close { position: absolute; top: 0; right: 0; }", 0);



