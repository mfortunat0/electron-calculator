const input = document.querySelector("input")
const equalButton = document.querySelector(".equal")
const buttons = document.querySelectorAll("button")
let dotUsed = false

const operatorHandle = () => {
    if (input.value.length > 0)
        input.value = eval(input.value)
}

buttons.forEach(value => {
    value.addEventListener('click', () => {
        if (value.innerHTML === "C")
            input.value = ""
        else if (value.innerHTML === "=")
            operatorHandle()
        else {
            if (input.value.length > 5) {
                input.style.fontSize = input.value.length > 10 ? "6vh" : "8vh"
            }
            if (value.innerHTML === '.' && dotUsed === false) {
                input.value = `${input.value}${value.innerHTML}`
                dotUsed = true
            }
            else {
                if (value.innerHTML !== ".") {
                    input.value = `${input.value}${value.innerHTML}`
                    if (isNaN(value.innerHTML)) {
                        dotUsed = false
                    }
                }
            }
        }
    })
})


input.addEventListener('keypress', (event) => {
    if (input.value.length > 5) {
        input.style.fontSize = input.value.length > 10 ? "6vh" : "8vh"
    }
    const key = event.key
    if (key === '+' || key === '.' || key === '-' || key === '/' || key === '*' || !isNaN(key)) {
        if (input.value.length > 0) {
            if (isNaN(key)) {
                if (isNaN(input.value[input.value.length - 1])) {
                    event.preventDefault()
                }
                if (key === '.' && dotUsed === true) {
                    event.preventDefault()
                }
                else {
                    dotUsed = true
                }
            }
        }
        else if (isNaN(key)) {
            event.preventDefault()
        }
    }
    else {
        event.preventDefault()
    }
})


