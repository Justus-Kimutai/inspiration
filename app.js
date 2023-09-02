let textDiv = document.querySelector('.text')
const stringText = 'Hello There, kimutai here wishing you a goodnight'

const arrString = stringText.split("")

console.log(arrString)

let index = 0

let timeOut = setInterval(() => {
    textDiv.textContent += arrString[index]
    index++
    if(index === arrString.length){
        clearInterval(timeOut)
    }
}, 200);

