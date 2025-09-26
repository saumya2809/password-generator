let inputSlider = document.getElementById("inputSlider");
let sliderValue = document.getElementById("slidervalue");
let passBox = document.getElementById("passBox");

let lowercase = document.getElementById("lowercase");
let uppercase = document.getElementById("uppercase");
let numbers = document.getElementById("numbers");
let symbols = document.getElementById("symbols");
let genBtn = document.getElementById("genBtn");

// Show initial slider value
sliderValue.textContent = inputSlider.value;

// Update value when slider changes
inputSlider.addEventListener('input', () => {
  sliderValue.textContent = inputSlider.value;
});

// Characters to choose from
let lowerchars = "abcdefghijklmnopqrstuvwxyz";
let upperchars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let allNumbers = "0123456789";
let allsymbols = "~!@#$%^&*";

// Generate password when button clicked
genBtn.addEventListener('click', () => {
  passBox.value = generatePassword();
});

// Function to generate password
function generatePassword() {
  let genPassword = "";
  let allChars = "";

  allChars += lowercase.checked ? lowerchars : "";
  allChars += uppercase.checked ? upperchars : "";
  allChars += numbers.checked ? allNumbers : "";
  allChars += symbols.checked ? allsymbols : "";

  if (allChars.length === 0) {
    alert("Please select at least one character type.");
    return "";
  }

  let passLength = parseInt(inputSlider.value);

  for (let i = 0; i < passLength; i++) {
    let randomIndex = Math.floor(Math.random() * allChars.length);
    genPassword += allChars.charAt(randomIndex);
  }

  return genPassword;
}
