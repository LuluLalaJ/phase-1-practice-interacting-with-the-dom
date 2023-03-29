/*
As a user, I can:


Timer Hints
If you're not sure how to create or pause a timer, look into:

setTimeout
setInterval
clearinterval
*/ 
let counter = document.getElementById('counter')
const plusBtn = document.getElementById('plus')
const minusBtn = document.getElementById('minus')
const likeBtn = document.getElementById('heart')
const pauseBtn = document.getElementById('pause')
const submitBtn = document.getElementById('submit')
const commentForm = document.getElementById('comment-form')

//See the timer increment every second once the page has loaded.

function runInterval(condition) {
        const counterInterval = setInterval(() => {
        let currentNum = Number(counter.textContent)
        let newNum = currentNum + 1 
        counter.textContent = newNum
        }, 1000)

        if (condition === "pause") { 
            clearInterval(counterInterval)
        }
}

runInterval()

//Manually increment and decrement the counter using the plus and minus buttons.
plusBtn.onclick = () => {
    let currentNum = Number(counter.textContent)
    let newNum = currentNum + 1 
    counter.textContent = newNum
}

minusBtn.onclick = () => {
    let currentNum = Number(counter.textContent)
    let newNum = currentNum - 1 
    counter.textContent = newNum
}

//"Like" an individual number of the counter. 
//I should see the count of the number of "likes" associated with that number displayed.
likeBtn.onclick = () => {
    let currentNum = Number(counter.textContent)
    let likes = document.getElementById('like-list')
    let liCurrentLike = document.createElement('li')
    liCurrentLike.textContent = `${currentNum} has been liked 1 time`
    //HOW TO MAKE THIS ABOVE CODE MORE DYNAMIC 
    liCurrentLike.setAttribute('data-num', currentNum)
    likes.appendChild(liCurrentLike)
}

//Pause the counter, which should:
//pause the counter
//disable all buttons except the pause button
//switch the label on the button from "pause" to "resume"

pauseBtn.onclick = () => {

    // if (pauseBtn.textContent === "pause") {
    //     plusBtn.disabled = true 
    //     minusBtn.disabled = true 
    //     likeBtn.disabled = true 
    //     submitBtn.disabled = true 
    //     pauseBtn.textContent = "resume"
    //     runInterval("pause")
    // } else {
    //     //Click the "restart" button to restart the counter and re-enable the buttons.
    //     plusBtn.disabled = false
    //     minusBtn.disabled = false 
    //     likeBtn.disabled = false 
    //     submitBtn.disabled = false 
    //     pauseBtn.textContent = "pause"
    // }
}

//Leave comments on my gameplay, such as: "Wow, what a fun game this is."
commentForm.onsubmit = (e) => {
    e.preventDefault()
    const comment = document.getElementById('comment-input').value 
    const commentLi = document.createElement('li')
    const commentWall = document.getElementById('list')
    
    commentLi.textContent = comment 

    commentWall.appendChild(commentLi)
    commentForm.reset()
}

//why does my click addEventListener doesn't work anymore 
// plusBtn.addEventListener = ('click', (event) => {
//     console.log('click')
// })

