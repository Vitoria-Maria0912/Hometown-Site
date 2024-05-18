'use strict';
const switcher = document.querySelector('.btn');
switcher.addEventListener('click',() => {
        document.body.classList.toggle('dark-theme')
        var className = document.body.className;
        if(className == "dark-theme") {
            this.textContent = "Turn on lights";
        } else {
            this.textContent = "Turn off lights";
        }
    }
);

const historyButton = document.querySelector('#history');
const TARGET = "_blank";
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