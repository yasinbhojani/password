const input = document.querySelector('#pass')
const btn = document.querySelector('#btn')
const submit = document.querySelector('#submit')
const content = document.querySelector('#content')
const clear = document.querySelector('#clear')

btn.addEventListener('click', () => {
    if (input.getAttribute('type') === 'password') {
        input.setAttribute('type', 'text')
        btn.textContent = 'Hide'
    } else if (input.getAttribute('type') === 'text') {
        input.setAttribute('type', 'password')
        btn.textContent = 'View'
    }
})

submit.addEventListener('click', () => {
    if (input.value === 'javascript') {
        content.textContent = 'Correct Password'
        content.style.color = 'green'
    } else {
        content.textContent = 'Incorrect Password'
        content.style.color = 'red'
    }
    setTimeout(() => {
        content.textContent = ''
    }, 6000)
})

clear.addEventListener('click', () => {
    content.textContent = ''
})