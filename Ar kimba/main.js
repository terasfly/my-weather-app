let temperature = document.querySelector('.temperature');
let weatherPredictions = document.querySelector('.weather-predictions')

let text = document.querySelector('.text');
let container = document.querySelector('.container')
let reload = document.querySelector('.reload');
// let button = document.querySelectorAll('button');
const amPm = document.getElementById('ampm')




let monday = document.querySelector('.monday');
let tuesday = document.querySelector('.tuesday');
let wednesday = document.querySelector('.wednesday');
let thursday = document.querySelector('.thursday');
let friday = document.querySelector('.friday');
let saturday = document.querySelector('.saturday');
let sunday = document.querySelector('.sunday');
let vienaDiena = document.querySelector('.calendar-dates');

const hours = document.getElementById('hours')
const minutes = document.getElementById('minutes')
const seconds = document.getElementById('seconds')

let day = document.querySelectorAll('.day')
const btnE1 = document.querySelector('.day2')



btnE1.addEventListener('mouseover', (event) => {



    console.log(event.pageX)
    const x = event.pageX - btnE1.offsetLeft;
    const y = event.pageY - btnE1.offsetTop;

    btnE1.style.setProperty('--xPos', x + 'px')
    btnE1.style.setProperty('--yPos', y + 'px')
});

for (let i = 0; i < day.length; i++) {
    document.querySelectorAll('.day')[i].addEventListener('click', function() {
        this.style.visibility = 'hidden'



        let temp = Math.floor(Math.random() * 30) + 1;
        let prediction = Math.floor(Math.random() * 5) + 1;

        temperature.textContent = (`+${temp}`);
        weatherPredictions.src = `images/prediction-${prediction}.png`

        if (temp >= 10 && temp <= 22 && prediction >= 3) {
            text.textContent = 'Best time for fishing!'
            text.style.color = '#ffff'


        } else if (temp >= 1 && temp <= 13 && prediction <= 2) {
            text.textContent = 'Better stay at home';
            text.style.color = '#ffff'





        } else if (temp >= 1 && temp <= 9 && prediction >= 3) {
            text.textContent = 'Today cold , but not bad for fishing'
            text.style.fontSize = '35px';
            text.style.color = '#ffff'


        } else if (temp >= 24 && prediction >= 3) {
            text.textContent = 'TOO HOT for fishing'
            if (temp >= 25 && prediction >= 3 && prediction < 4) {
                text.style.color = '#ff2a00'
                    // temperature.value = '';
            }
        } else if (temp >= 23 && prediction <= 2) {
            text.textContent = 'Today very humanity and wet'


        } else if (temp >= 10 && prediction <= 2) {
            text.textContent = 'Better stay at home';
            text.style.color = '#ffff'

        }

    })
}
reload.addEventListener('click', function() {

    monday.style.visibility = 'visible'
    tuesday.style.visibility = 'visible'
    wednesday.style.visibility = 'visible'
    thursday.style.visibility = 'visible'
    friday.style.visibility = 'visible'
    saturday.style.visibility = 'visible'
    sunday.style.visibility = 'visible'
    temperature.textContent = 'Now +19'
    weatherPredictions.src = `images/prediction-${5}.png`
    text.textContent = 'GO GO FISHING!!'
    text.style.color = '#ffff'

})




// vienaDiena = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30]

vienaDiena.addEventListener('click', function() {
    let temp = Math.floor(Math.random() * 30) + 1;
    let prediction = Math.floor(Math.random() * 5) + 1;

    temperature.textContent = (`+${temp}`);
    weatherPredictions.src = `images/prediction-${prediction}.png`
    if (temp >= 10 && temp <= 22 && prediction >= 3) {
        text.textContent = 'Best time for fishing!'
        text.style.color = '#ffff'


    } else if (temp >= 1 && temp <= 13 && prediction <= 2) {
        text.textContent = 'Better stay at home';
        text.style.color = '#ffff'





    } else if (temp >= 1 && temp <= 9 && prediction >= 3) {
        text.textContent = 'Today cold , but not bad for fishing'
        text.style.fontSize = '35px';
        text.style.color = '#ffff'


    } else if (temp >= 24 && prediction >= 3) {
        text.textContent = 'TOO HOT for fishing'
        if (temp >= 25 && prediction >= 3 && prediction < 4) {
            text.style.color = '#ff2a00'
        }
    } else if (temp >= 23 && prediction <= 2) {
        text.textContent = 'Today very humanity and wet'


    } else if (temp >= 10 && prediction <= 2) {
        text.textContent = 'Better stay at home';
        text.style.color = '#ffff'

    }


})

function updateClock() {
    let h = new Date().getHours()
    let m = new Date().getMinutes()
    let s = new Date().getSeconds()
        // let amPm = 'AMl'

    if (h >= 12) {
        // h = h - 12;
        amPm.textContent = 'PM'
    }



    h = h < 10 ? '0' + h : h;
    m = m < 10 ? '0' + m : m;
    s = s < 10 ? '0' + s : s;





    hours.textContent = h;

    minutes.textContent = m;
    seconds.textContent = s;
    // amPm, (textContent = amPm)/

    setTimeout(() => {
        updateClock()
    }, 1000);



}
updateClock()