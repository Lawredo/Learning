let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/ff01.png') {
        myImage.setAttribute('src', 'images/ff02.png');
    } else {
        myImage.setAttribute('src', 'images/ff01.png');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('Please enter your name.');
    if(!myName) {
      setUserName();
      setCustomTitle();
    } else {
      localStorage.setItem('name', myName);
      myHeading.innerHTML = 'Mozilla is cool, ' + myName;
    }
  }

  function setCustomTitle() {
    let myName = localStorage.getItem('name');
    myTitle = 'Your name is: ' + myName;
    document.title = myTitle;    
}

if(!localStorage.getItem('name')) {
    setUserName();
    setCustomTitle();
} else {
    let storedName = localStorage.getItem('name');
    myTitle = 'Your name is: ' + storedName;
    document.title = myTitle;
    myHeading.textContent = 'Mozilla is cool, ' + storedName;
}

myButton.onclick = function() {
    setUserName();
    setCustomTitle();
}




