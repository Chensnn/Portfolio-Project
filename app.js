const text = document.querySelectorAll(".thPaths");

// console.log(text[0].getTotalLength());

for (let i = 0; i < text.length; i++) {
  console.log(`text number${i} length is ${text[i].getTotalLength()}`);
}

const lastWord = document.querySelector("#eleventh");
// console.log(lastWord);

const animation = document.querySelector("section.animation");
lastWord.addEventListener("animationend", () => {
  animation.style = "transition:all 1s ease; opacity:0; pointer-events:none;";
});
