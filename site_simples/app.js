'use strict';
const switcher = document.querySelector('.btn');
switcher.addEventListener(
    'click', function() {
        document.body.classList.toggle('dark-theme')
        
        var className = document.body.className;
        
        if(className == "dark-theme") {
            this.textContent = "Switch to Light Theme";
        } else {
            this.textContent = "Switch to Dark Theme";
        }
        console.log('current class name: ' + className);
    }
);