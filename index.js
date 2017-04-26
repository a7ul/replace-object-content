"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function replaceObjectContent(oldObject, newObject) {
  var oldKeys = Object.keys(oldObject);
  var newKeys = Object.keys(newObject);
  oldKeys.forEach(function (eachKey) {
    return delete oldObject[eachKey];
  });
  newKeys.forEach(function (eachKey) {
    oldObject[eachKey] = newObject[eachKey];
  });
  return oldObject;
};

module.exports = replaceObjectContent;
