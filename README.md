capbar
=======
[project page](shash7.github.io/capbar).

Let your users know when that input field text is too long. Requires jquery.

Dependencies :
* jquery


### 1. Markup
Add capbar to your page

	<link rel="stylesheet" href="capbar.css">
	<script src="capbar.js"></script>

### 2. Javascript
Running this code will start capbar.

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
		element  : '.bar'    // Default : Checks if .bar class is present. If not then it will create and append an element in body.
		selector : '.capbar' // Default : uses data-target="capbar'.
		top      : true      // Default : false. Set it to true to set capbar at the top of the page.
	});

### Issues
capbar won't display above the keyboard in ios devices. To remedy this, set top to true(see parameters).


**Credits & license**

Created by shash7
Licensed under MIT license

Patches welcome.