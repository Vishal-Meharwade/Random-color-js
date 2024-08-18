const hexBtn = document.querySelector(".hex-btn");

const hexColorValue = document.querySelector(".hex-color-value");

const hexColorContainer = document.querySelector(".hex-color-container");





hexBtn.addEventListener("click", () => {
  let characterSet = "0123456789ABCDEF";
  let hexColorOutput = "";

  for (let i = 0, charSetLength = characterSet.length; i < 6; ++i) {
    hexColorOutput += characterSet.charAt(
      Math.floor(Math.random() * charSetLength)
    );
  }

  hexColorValue.textContent = `#${hexColorOutput}`;

  hexColorContainer.style.backgroundColor = `#${hexColorOutput}`;

  hexBtn.style.color = `#${hexColorOutput}`; 

  console.log(hexColorOutput);
});


const rgbButton = document.querySelector(".rgb-btn");

const getRedInputRange = document.querySelector("#red");
const getGreenInputRange = document.querySelector("#green");
const getBlueInputRange = document.querySelector("#blue");

rgbButton.addEventListener("click", () => {
  let extractRedValue = getRedInputRange.value;
  let extractGreenValue = getGreenInputRange.value;
  let extractBlueValue = getBlueInputRange.value;

  let rgbColor = `rgb(${extractRedValue}, ${extractGreenValue}, ${extractBlueValue})`;

  const rgbColorContainer = document.querySelector(".rgb-color-generator");
  rgbColorContainer.style.backgroundColor = rgbColor;

  console.log(rgbColor);
});


const rgbCopyBtn = document.querySelector(".rgb-copy-color");
const hexCopyBtn = document.querySelector(".hex-copy-color");

function copyHexColorToClipBoard() {
    console.log(hexColorValue.textContent);
    navigator.clipboard.writeText(hexColorValue.textContent);
    alert("Copied to clipboard")
}

function copyRGBColorToClipBoard() {
  console.log(rgbColorValue.textContent);
  navigator.clipboard.writeText(rgbColorValue.textContent);
  alert("Copied to clipboard");
}

hexCopyBtn.addEventListener("click", copyHexColorToClipBoard);


