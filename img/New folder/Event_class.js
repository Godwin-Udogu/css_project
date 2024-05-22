/*
Syntax:
element.addEventListener(eventType, eventHandler, useCapture);

or

element.addEventListener(eventHandler, useCapture);

usecapture value can either be true or false, if then the option is 
to use event bubbling

You can control event propagation usind
event.stopPropagation()
or
event.preventDefault()


SOME BROWSER EVENTS:
1. click: Triggered when a mouse click occurs.
2. mouseover: Fired when the mouse cursor enters an element.
3. keydown: Fired when a key is pressed down.
4. keup: Fired when a key is unpressd.
5. load: Triggered when a webpage and its resources finish loading.
6. submit: Fired when a form is submitted.
7.. scroll: Trieggered when scrolling occurs.
*/

let element = document.getElementById('myButton')
// document.getElementById('myButton').addEventListener('click', function() {})
element.addEventListener('mousedown', function(){
    console.log('Button clicked');
    // alert('Button clicked);
});

document.getElementById('myInput').addEventListener('keyup', function() {
    console.log(`${this.value}`);
    // alert('Button clicked);
});


let myElement = document.getElementById('myDiv')
console.log('myElement', myElement)
myElement.innerHTML = 'New content';
// myElement.innerHTML = '<p>New content</p>';
// myElement.innerText = 'New content';
// myElement.innerText = '<p>New content</p>';

myElement.style.background = "blue"
myElement.style.color = "red"