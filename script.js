const text = document.querySelector(".scroll-text");
let str = "Try scrolling!;
text.textContent = "";

function updateText() {
  str = str === "Welcome to leonels wellbeing" ? "wellbeing is looking after your self you should medatate and rest alot when stressed" : "also dont code thats a mistake look where I am also I get to write funny messages on my site that breaks the fourth wall kinda like a joke";";
  text.textContent = "";

  for (let i = 0; i < str.length; i++) {
    const span = document.createElement("span");
    span.textContent = str[i];
    span.style.transitionDelay = i * 0.05 + "s";
    text.appendChild(span);
  }
}

window.addEventListener('scroll', () => {
  if (window.scrollY > 100) {
    updateText();
  }
});

updateText();