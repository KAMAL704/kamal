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
AOS.init();

particlesJS("particles-js", {
  particles: {
    number: { value: 60 },
    size: { value: 3 },
    move: { speed: 2 },
    line_linked: { enable: true },
  }
});
// Theme Toggle
const toggleBtn = document.getElementById("themeToggle");

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  if(document.body.classList.contains("dark-mode")){
    toggleBtn.innerText = "☀️";
  } else {
    toggleBtn.innerText = "🌙";
  }
});
// Visitor Counter
if(localStorage.getItem("visits")){
  localStorage.setItem("visits",
  Number(localStorage.getItem("visits")) + 1);
}else{
  localStorage.setItem("visits", 1);
}

document.getElementById("visitorCount").innerText =
localStorage.getItem("visits");
const chatInput = document.getElementById("chatInput");
const chatBody = document.getElementById("chatBody");

chatInput.addEventListener("keypress", function(e){
  if(e.key === "Enter"){
    const msg = chatInput.value;
    chatBody.innerHTML += "<p><strong>You:</strong> " + msg + "</p>";

    let reply = "Thanks for visiting Kamal's portfolio!";

    if(msg.toLowerCase().includes("skills")){
      reply = "Kamal has skills in Cybersecurity, Python and Kali Linux.";
    }

    chatBody.innerHTML += "<p><strong>Bot:</strong> " + reply + "</p>";
    chatInput.value = "";
  }
});