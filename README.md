capbarjs
=======

Let your users know when that input field text is too long. Requires jquery.

Dependencies :
* jquery


### 1. Markup
Add modaljs to your page

	<link rel="stylesheet" href="capbar.css">
	<script src="capbar.js"></script>

### 2. Javascript
Running this code will create and show a modal window.

	var capbar = new Capbar();
	capbar.start();
	
To unbind all event listners and cleanly stop capbar, use the stop() method

	capbar.stop();

### 3. Linking input tags
Add data-target="capbar" and data-maxchars=(max characters) to your input field. See the code below.

	<input type="text" data-target="capbar" data-maxchars="12">

### 4. Css
The dafault css should be adequate. However, you can customize the bar by modifying the .bar class

### Parameters

	var capbar = new Capbar({
		element : '.bar'     / /Default : Checks if .bar class is present. If not then it will create and append an element in body.
		selector : '.capbar' // Default : uses data-target="capbar'.
	});


**Credits & license**

Created by shash7
Licensed under MIT license