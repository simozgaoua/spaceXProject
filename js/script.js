const btn = document.getElementById('menu-btn');
const overlay = document.getElementById('overlay');
const menu = document.getElementById('mobile-menu');
const counters = document.querySelectorAll('.counter');
let scrollStarted = false;

btn.addEventListener('click',navToggle);

document.addEventListener('scroll',scrollPage);

function navToggle(){
    btn.classList.toggle('open');
    overlay.classList.toggle('overlay-show');
    document.body.classList.toggle('stop-scrolling');
    menu.classList.toggle('show-menu');
}

function scrollPage(){
    const scrollPosition = scrollY;
    if(scrollPosition > 100 && !scrollStarted){
        countUp();
        scrollStarted = true;
    } else if(scrollPosition < 100 && scrollStarted){
        reset();
        scrollStarted = false;
    } 

}

function countUp(){
   counters.forEach( (counter) => {
    counter.innerText = '0';

    const updateCounter = () => {
        //get count target
        const target = +counter.getAttribute('data-target');
        //get the courint counetr value
        const c = +counter.innerText;

        //creat an incremnet
        const incremnet = target /100;

        //if counter is less than the target , add increment
        if(c < target){
            //round up and set the counter value
            counter.innerText = `${Math.ceil(c + incremnet)}`;
            //repeat
            setTimeout(updateCounter,75);
        } else {
            counter.innerText = target;
        }
    }
    updateCounter();
   });
   
}

function reset(){
    counters.forEach( (counter) => counter.innerHTML = '0');
}

