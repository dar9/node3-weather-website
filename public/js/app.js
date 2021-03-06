fetch('http://puzzle.mead.io/puzzle').then((response)=>{
    response.json().then((data)=>{
        console.log(data)
    })
})


const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#p1')
const messageTwo = document.querySelector('#p2')

messageOne.textContent='This is where the weather will be displayed.'
messageTwo.textContent='hello'

weatherForm.addEventListener('submit',(e)=>{
    e.preventDefault()
    const location = search.value
    console.log(location)

    messageOne.textContent='loading'
    messageTwo.textContent=''

    fetch('/weather?address='+location).then((response)=>{
    response.json().then((data)=>{
        if(data.error){
            messageOne.textContent=data.error
        }
        else{
        messageOne.textContent=data.location
        messageTwo.textContent=data.forecast
        console.log(data.forecast)
        }
    })
})

})
