'use strict';
const switcher = document.querySelector('.btn');
switcher.addEventListener('click',() => {
        document.body.classList.toggle('dark-theme')
        var className = document.body.className;
        (className == "dark-theme") ? (this.textContent = "Turn on lights") : (this.textContent = "Turn off lights");
    }
);

const TARGET = "_blank";
const historyButton = document.querySelector('#history');
historyButton.addEventListener('click', () => {
    const linkHistory = "https://livramento.pb.gov.br/a_cidade/historia";
    window.open(linkHistory, TARGET);
});

const anthemButton = document.querySelector('#anthem');
anthemButton.addEventListener('click', () => {
    const linkAnthem = "https://livramento.pb.gov.br/a_cidade/hino";
    window.open(linkAnthem, TARGET);
});

const newsButton = document.querySelector('#news');
newsButton.addEventListener('click', () => {
    const linkNews = "https://livramento.pb.gov.br/noticias";
    window.open(linkNews, TARGET);
});

const localizationButton = document.querySelector('#localization');
localizationButton.addEventListener('click', () => {
    const linkLocalization = "https://pt.wikipedia.org/wiki/Livramento_%28Para%C3%ADba%29#/map/0";
    window.open(linkLocalization, TARGET);
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