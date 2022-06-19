# JavaScript-waitFor
Wait for Object function and wait for Element function


##Usage

- Wait For Element Parameters:
1. `Selector` - Element searched for by `querySelector`
2. `Timeout` - Will error if element is not available before timeout is over
3. `Interval` - if `0` will run every frame until element is found or timeout is reached. Otherwise, this value specifies the interval that the function will check for the element.

- Wait for Object Parameters
1. `Object` - target Object
2. `Key` - Specific Property on Object
3. `Once` - Event listener will be removed after Object property is set the first time
4. `Callback` - Callback function that will run after the event is fired

```js
// Wait for Element Usage
waitForElement('.test-element', 3000, 0).then((element) => {
	console.log({ element });
});

//Wait for Object Usage
waitForObject(window, 'testObj', false, (value) => {
	console.log({ value });
});
```
