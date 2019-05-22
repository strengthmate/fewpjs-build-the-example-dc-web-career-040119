const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

document.addEventListener('DOMContentLoaded', function() {
document.getElementById("modal").className = "hidden";
})

let likeButton = document.querySelectorAll("#like")
      likeButton.forEach((button) => {
        button.addEventListener('click', function() {
        mimicServerCall().then(function(a) {
          if (!button.classList.contains("activated-heart")) {
            button.innerText = FULL_HEART
            button.classList.add("activated-heart")
          } else if (button.classList.contains("activated-heart")) {
            button.innerText = EMPTY_HEART
            button.classList.remove("activated-heart")
          }
        }).catch(function(b) {
          document.getElementById("modal").innerText = `${b}`
          document.getElementById("modal").classList.remove("hidden")
          setTimeout(function() {
            document.getElementById("modal").classList.add("hidden")
          }, 5000);
        })
      })
    })

//Keep all your styling rules entirely in `style.css`. Do not manipulate any `.style` properties.
//Only manipulate the DOM once the server requests respond. Do not make the heart full until you're inside a successful `.then` block.

// Ignore after this point. Used only for demo purposes
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
