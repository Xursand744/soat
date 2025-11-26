let s = document.querySelector('.s')
let m = document.querySelector('.m')
let h = document.querySelector('.h')
let hours = document.querySelector('.hours')
let minutes = document.querySelector('.minutes')


function clock() {
  let data = new Date()

  let sec = data.getSeconds()
  let min = data.getMinutes()
  let hour = data.getHours()

  s.style.transform = `rotate(${sec * 6}deg)`
  m.style.transform = `rotate(${min * 6}deg)`
  h.style.transform = `rotate(${hour * 30}deg)`


  setTimeout(() => {
    clock()
  }, 1000);


  hours.innerHTML = data.getHours() < 10 ? '0' + data.getHours() : data.getHours()
  minutes.innerHTML = data.getMinutes() < 10 ? '0' + data.getMinutes() : data.getMinutes()

}
clock()


let tabsItem = document.querySelectorAll('.tabsItem')
let tabsContentItem  = document.querySelectorAll('.tabsContentItem ')

for (let i = 0; i < tabsItem.length; i++) {

  tabsItem[i].addEventListener('click', function () {
    for (let k = 0; k < tabsItem.length; k++) {
      tabsItem[k].classList.remove('active')
      tabsContentItem[k].classList.remove('active')

    }
    
    tabsItem[i].classList.add('active')
    tabsContentItem[i].classList.add('active')

  })


}

let stopwatchBtn = document.querySelector('.stopwatch__btn')


function sec() {
 
  stopwatchBtn.addEventListener('click', () => {

    if (stopwatchBtn.innerText == 'START') {
      stopwatchBtn.innerText = 'STOP'
    }

    else if(stopwatchBtn.innerText == 'STOP'){
      stopwatchBtn.innerText = 'CLEAR'
    }
    
    else{
      stopwatchBtn.innerText = 'START'
    }

  })
  
}

sec()