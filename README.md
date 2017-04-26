# replace-object-content

The module mutates the contents of an object to match the contents of another object.

The references of the source and the object from which properties are copied remains untouched.

See `Usage` to understand more.

## Installation

`yarn add replace-object-content`

or

`npm install replace-object-content --save`

## Usage

```js

const original = {a:1,b:2,c:3};

const toCopyFromObject = {d:4,e:5,f:6};

const replaceObjectContent = require('replace-object-content');

const afterReplace = replaceObjectContent(original, toCopyFromObject);

console.log('original',original);
// original {d:4,e:5,f:6}   ----- notice the contents of the original object has been mutated to match the contents of the toCopyFromObject  object

console.log('toCopyFromObject',toCopyFromObject);
// toCopyFromObject {d:4,e:5,f:6}

console.log('afterReplace',afterReplace);
// afterReplace {d:4,e:5,f:6}

```

In short, the references of the `original` and `toCopyFromObject` remain as they were before.
Only the contents of `original` becomes exactly same as contents of `toCopyFromObject`

```js
// All of the bellow test cases pass

expect(original).toEqual(toCopyFrom); // content deep equal
expect(afterReplace).toEqual(toCopyFrom); // content deep equal
expect(afterReplace === original).toEqual(true); //making sure reference is equal
expect(original === toCopyFrom).toEqual(false); //making sure original and toCopyFrom references are not equal
expect(afterReplace === toCopyFrom).toEqual(false); //making sure afterReplace and toCopyFrom references are not equal

```
