
const calculator = document.querySelector('.calculator')
const keys = calculator.querySelector('.calculator__keys')
const display = document.querySelector('.calculator__display')
const previousKeyType = calculator.dataset.previousKeyType


keys.addEventListener('click', e => {
    if (e.target.matches('button')) {
    
const key = e.target
const action =key.dataset.action
const keyContent = key.textContent
const displayedNum = display.textContent
        // 

if (!action) {
    console.log('number key!')
    if (displayedNum === '0' || previousKeyType === 'operator') {
        display.textContent = keyContent
    } else {
        display.textContent = displayedNum + keyContent
    }
}

if (
    action === 'add' || 
    action === 'subtract'||
    action === 'multiply' ||
    action === 'divide' 
) {
    console.log('operator key!')
    {
        key.classList.add('.is-depressed')
        // Add custom attribute to get previous Operator 
        calculator.dataset.previousKeyType = 'operator'
    }    
        Array.from(key.parentNode.children)
        .forEach(k => k.classList.remove('is-depressed'))

        calculator.dataset.firstValue = displayedNum
        calculator.dataset.operator = action 
}

if (action === 'decimal') {
    console.log('decimal key!')
}

if (action === 'clear') {
    console.log('clear key!')
}

if (action === 'calculate') {
    console.log('equal key!')
    const firstValue = calculator.dataset.firstValue
    const operator = calculator.dataset.operator
    const secondValue = displayedNum
    const calculate = (n1, operator, n2) => {
        
        let result = ''

        if (operator === 'add') {
            result = parseFloat(n1) + parseFloat(n2)
        } else if (operator === 'substract') {
            result = parseFloat(n1) - parseFloat(n2)
        } else if (operator === 'multiply') {
            result = parseFloat(n1) * parseFloat(n2)
        } else if (operator === 'divide') {
            result = parseFloat(n1) / parseFloat(n2)
        }

        return result
    }

    display.textContent = calculate(firstValue, operator, secondValue)
}

    }
})

// Getting the key clicked


// keys.addEventListener('click', e => {
//     if (e.target.matches('button')) {
//         const key = e.target
//         const action =key.dataset.action
//         const keyContent = key.textContent
//         const displayedNum = display.textContent
//         // 
//         if (!action) {
//             if (displayedNum === '0') {
//                 display.textContent = keyContent
//             } else {
//                 display.textContent = displayedNum + keyContent
//             }
//         }

//         if (action === 'decimal') {
//             display.textContent = displayedNum + '.'
//         }

//         if (
//             action === 'add' ||
//             action === 'subtract' ||
//             action === 'multiply' ||
//             action === 'divide'
//         ) {
//             key.classList.add('is-depressed')
//             // Add custome attribute to get previous operator
//             calculator .dataset.previouskeyType = 'operator'
//         }

//         Array.from(key.parentNode.children)
//         .forEach(k => k.classList.remove('is-depressed'))

//     }

// })

// keys.addEventListener('click', e => {
//     if (e.target.matches('button')) {
//         const key = e.target
//         // 


//         Array.from(key.parentNode.children)
//         .forEach(k => k.classList.remove('is-depressed'))
//     }
// })


