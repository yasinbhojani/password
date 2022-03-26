const input = document.querySelector('#pass')
const btn = document.querySelector('#btn')
const submit = document.querySelector('#submit')
const content = document.querySelector('#content')
const clear = document.querySelector('#clear')
const btnImg = document.querySelector('#btn-icon')

btn.addEventListener('click', () => {
    if (input.getAttribute('type') === 'password') {
        input.setAttribute('type', 'text')
        btnImg.setAttribute('src', './src/show.png')
    } else if (input.getAttribute('type') === 'text') {
        input.setAttribute('type', 'password')
        btnImg.setAttribute('src', './src/hide.png')
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