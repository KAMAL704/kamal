const words = ["Cybersecurity Enthusiast", "Web Developer", "Tech Learner"];
let i = 0;
let timer;

function typingEffect() {
  let word = words[i].split("");
  let loopTyping = function() {
    if (word.length > 0) {
      document.querySelector(".typing").innerHTML += word.shift();
    } else {
      deletingEffect();
      return false;
    }
    timer = setTimeout(loopTyping, 100);
  };
  loopTyping();
}

function deletingEffect() {
  let word = words[i].split("");
  let loopDeleting = function() {
    if (word.length > 0) {
      word.pop();
      document.querySelector(".typing").innerHTML = word.join("");
    } else {
      i = (i + 1) % words.length;
      typingEffect();
      return false;
    }
    timer = setTimeout(loopDeleting, 50);
  };
  setTimeout(loopDeleting, 1000);
}

typingEffect();