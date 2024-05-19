'use strict';
const switcher = document.querySelector('#lights');
switcher.addEventListener('click',() => {
        document.body.classList.toggle('dark-theme')
        var className = document.body.className;
        (className == "dark-theme") ? (this.textContent = "Turn on lights") : (this.textContent = "Turn off lights");
    }
);

const TARGET = "_blank";
const elements = ["#history", "#anthem", "#news", "#localization"];

elements.forEach(selector => {
  const button = document.querySelector(selector);
  if (button) {
    button.addEventListener('click', () => {
      const link = 
                  (selector === "#history") ? "https://livramento.pb.gov.br/a_cidade/historia" :
                  (selector === "#anthem") ? "https://livramento.pb.gov.br/a_cidade/hino" :
                  (selector === "#news") ? "https://livramento.pb.gov.br/noticias" :
                  (selector === "#localization") ? "https://pt.wikipedia.org/wiki/Livramento_%28Para%C3%ADba%29#/map/0" :
                  null;
      window.open(link, TARGET);
    });
  }
});

const backToTop = document.querySelector('#backToTop');
backToTop.addEventListener('click', () => {
    window.scrollTo(0, 0);
});

function updateTime() {
    const now = new Date();
    let hours = now.getHours();
    const minutes = now.getMinutes();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; 
    const timeString = `${hours}:${minutes.toString().padStart(2, '0')} ${ampm}`;
    document.getElementById('time').textContent = timeString;
};
setInterval(updateTime, 1000);
  
function updateDate() {
    const now = new Date();
    const year = now.getFullYear();
    const month = now.toLocaleString('default', { month: 'long' });
    const day = now.getDate();
    const dayOfWeek = now.toLocaleString('default', { weekday: 'long' });
    const dateString = `${dayOfWeek} ${month} ${day}, ${year}`;
    document.getElementById('date').textContent = dateString;
};
updateDate();
  
function updateGreeting() {
    const now = new Date();
    const hours = now.getHours();
    let greeting;
    if (hours < 6) {
      greeting = 'Good night!';
    } else if (hours < 12) {
      greeting = 'Good morning!';
    } else if (hours < 14) {
      greeting = 'Good afternoon!';
    } else {
      greeting = 'Good evening!';
    }
    document.getElementById('greeting').textContent = greeting;
  };
updateGreeting();