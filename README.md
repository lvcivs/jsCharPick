# jsCharPick
A simple HTML/Javascript character picker

![Screenshot of the jsCharPick popup](screenshot.png)

## What is it?
This is a minimalist implementation of a HTML/Javascript special character picker. It uses plain Javascript (no dependencies).

Imagine that you have a webpage with a number of text input fields and that you want to offer your users an easy way to input certain special characters which they might not have available on their keyboards. They would therefore appreciate to be able to pick them from a list. That is what jsCharPick does. On pressing a button, it slides in a list of special characters from the top of the page and inserts the character picked by the user into the last used input or textarea field at the position of the caret. The list of available special characters can easily be changed or expanded by editing the Javascript code.

Note that you need to click on one of the input fields to give it focus first, otherwise the script will not know where to insert the character and will do nothing.

A note on the origin of the code: Some of the markup and code is adapted from online tutorials and from stackexchange answers.

## Demo
https://swanrad.ch/jsCharPick/jsCharPick.html - live demo
