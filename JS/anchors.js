const AnchorCurse = document.getElementById('curse')
const AnchorLearn = document.getElementById('learn')
const AnchorAuthor = document.getElementById('author')
const AnchorProgram = document.getElementById('program')
const AnchorQuestion = document.getElementById('question')
const AnchorForm = document.getElementById('fromToForm')
const AnchorFirst = document.getElementById('anchor1')
const AnchorSecond = document.getElementById('anchor2')


const curse = document.querySelector('.content__curse')
const learn = document.querySelector('.content__learn')
const author = document.querySelector('.content__author')
const program = document.querySelector('.content__program')
const question = document.querySelector('.content__question')
const form = document.querySelector('.content__form')


AnchorCurse.addEventListener('click', () => {
    curse.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    })
})

AnchorLearn.addEventListener('click', () => {
    learn.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    })
})

AnchorAuthor.addEventListener('click', () => {
    author.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    })
})

AnchorProgram.addEventListener('click', () => {
    program.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    })
})

AnchorQuestion.addEventListener('click', () => {
    question.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    })
})

AnchorForm.addEventListener('click', () => {
    form.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    })
})

AnchorFirst.addEventListener('click', () => {
    form.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    })
})

AnchorSecond.addEventListener('click', () => {
    form.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    })
})