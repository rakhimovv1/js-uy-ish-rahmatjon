

let btn1 = document.getElementById('btn1')
let btn2 = document.getElementById('btn2')
let btn3 = document.getElementById('btn3')
let h1 = document.getElementById('h1')


btn2.onclick = function () {
  btn1 = h1
  h1.style.color = 'orange'
};
btn1.onclick = function () {
  btn2 = h1
  h1.style.color = 'blue'
};
btn3.onclick = function () {
  btn3 = h1
  h1.style.color = 'lime'
};


let btn4 = document.getElementById('btn4')
let btn5 = document.getElementById('btn5')
let btn6 = document.getElementById('btn6')

btn4.onclick = function () {
  h1.style.backgroundColor = 'aqua'
}
btn5.onclick = function () {
  h1.style.backgroundColor = 'yellow'
}
btn6.onclick = function () {
  h1.style.backgroundColor = 'green'
}


let btn7= document.getElementById('btn7')
let btn8 = document.getElementById('btn8')
let btn9 = document.getElementById('btn9')


btn7.onclick = function () {
  h1.style.fontSize = '40px'
}
btn8.onclick = function () {
   h1.style.fontSize = '60px'
}
btn9.onclick = function () {
   h1.style.fontSize = '80px'
}

let btn10= document.getElementById('btn10')
let btn11 = document.getElementById('btn11')
let btn12 = document.getElementById('btn12')


btn10.onclick = function () {
    h1.style.fontFamily = 'Arial, Helvetica, sans-serif'
  }
  btn11.onclick = function () {
     h1.style.fontFamily = 'Courier New', Courier, monospace
  }
  btn12.onclick = function () {
    h1.style.fontFamily = 'revert'
  }

