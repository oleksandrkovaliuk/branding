const monthBtn = document.querySelector('#monthly');
const annualBtn = document.querySelector('#annualy');
const money = document.querySelector('#money');
const liteBox = document.querySelector('#lite-box');
const growthBox = document.querySelector('#growth-box');
const proBox = document.querySelector('#pro-box');
const showBlockDown = document.querySelector('#show-section');
const blockDown = document.querySelector('#show-info-block');
const closeShowblockBtn = document.querySelector('#close-show-block');

monthBtn.addEventListener('click' , () => {
    monthBtn.classList.add('show');
    annualBtn.classList.remove('show');
    liteBox.querySelector('.money').innerHTML = "17";
    growthBox.querySelector('.money').innerHTML = "53";
    proBox.querySelector('.money').innerHTML = "125"
})
annualBtn.addEventListener('click' , () => {
    monthBtn.classList.remove('show');
    annualBtn.classList.add('show');
    liteBox.querySelector('.money').innerHTML = "53";
    growthBox.querySelector('.money').innerHTML = "115";
    proBox.querySelector('.money').innerHTML = "250";
})
showBlockDown.addEventListener('click' , () => {
    blockDown.classList.toggle('show');
    closeShowblockBtn.classList.toggle('show');
})