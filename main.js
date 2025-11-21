let s = document.querySelector('.s')
let m = document.querySelector('.m')
let h = document.querySelector('.h')



function clock() {
    let data = new Date()
    
    let sec = data.getSeconds()
    let min = data.getMinutes()
    let hour = data.getHours()

    s.style.transform = `rotate(${sec * 6}deg)`
    

  setTimeout(() => {
    clock()
  }, 1000);

}
clock()
