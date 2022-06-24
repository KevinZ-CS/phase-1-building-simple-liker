// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const selectHeart = document.getElementsByClassName('like-glyph');

for (const heart of selectHeart) {
    function heartStatus() {
      let currentStatus = heart.textContent;
      if (currentStatus === EMPTY_HEART) 
      {heart.textContent = FULL_HEART
        heart.className = 'activated-heart'
      }
      else {heart.textContent = EMPTY_HEART
          heart.classList.remove('activated-heart')};
    }

    heart.addEventListener('click', function eventHandler() {
      mimicServerCall()
      .then(element => heartStatus())
      .catch(function(error) {
        errorMessage(); 
      })
    }) 
}

function errorMessage () {
  const errorMsg = document.querySelector('div');
  errorMsg.removeAttribute('class'); 
  function hide() {errorMsg.setAttribute('class', 'hidden')};
  setTimeout(hide, 3000)
}





//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
