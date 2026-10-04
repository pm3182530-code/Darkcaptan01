```javascript
// Darkcaptan01 Website

console.log("Welcome to Darkcaptan01 Official Website!");


// Current year automatically update
const year = new Date().getFullYear();

const copyright = document.querySelector(".copyright");

if (copyright) {
    copyright.textContent =
        "© " + year + " Darkcaptan01. All Rights Reserved.";
}
```
