let form = document.querySelector(".passwordForm");
let passInput = document.querySelector("#password");
let passwordRange = document.querySelector("#passwordRange");
let passLength = document.querySelector(".passLength");
let uppercase = document.querySelector("#uppercase");
let lowerCase = document.querySelector("#lowercase");
let numberCase = document.querySelector("#numbercase");
let symbolCase = document.querySelector("#symbolcase");
let copyBtn = document.querySelector(".copyBtn");
let generateBtn = document.querySelector(".generateBtn");

let uppercaseCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lowerCaseCharacters = "abcdefghijklmnopqrstuvwxyz";
let numbersCharacters = "1234567890";
let symbolCharacters = "~@!#$%^&*()_+-><.,?/':;{]}[|";
let final;

passwordRange.addEventListener("input", () => {
  passLength.innerText = passwordRange.value;
});

function ShufflePasswordString(str) {
  let arr = str.split("");
  for (let i = arr.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr.join("");
}

function generatePassword(final) {
  let password = "";
  let allowedChar = "";
  let upperChecked = uppercase.checked;
  let lowerChecked = lowerCase.checked;
  let numberChecked = numberCase.checked;
  let symbolChecked = symbolCase.checked;
  if (upperChecked) {
    allowedChar += uppercaseCharacters;
    password +=
      uppercaseCharacters[
        Math.floor(Math.random() * uppercaseCharacters.length)
      ];
  }
  if (lowerChecked) {
    allowedChar += lowerCaseCharacters;
    password +=
      lowerCaseCharacters[
        Math.floor(Math.random() * lowerCaseCharacters.length)
      ];
  }
  if (numberChecked) {
    allowedChar += numbersCharacters;
    password +=
      numbersCharacters[Math.floor(Math.random() * numbersCharacters.length)];
  }
  if (symbolChecked) {
    allowedChar += symbolCharacters;
    password +=
      symbolCharacters[Math.floor(Math.random() * symbolCharacters.length)];
  }

  if (allowedChar === "") return alert("Please select at least one option");

  while (password.length < final) {
    password += allowedChar[Math.floor(Math.random() * allowedChar.length)];
  }
  let finalPassword = ShufflePasswordString(password);
  passInput.value = finalPassword;
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  final = passwordRange.value;
  generatePassword(final);
});

copyBtn.addEventListener("click", () => {
  passInput.select();
  navigator.clipboard.writeText(passInput.value);
});
