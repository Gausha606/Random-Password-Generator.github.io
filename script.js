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

let allChars =
  uppercaseCharacters +
  lowerCaseCharacters +
  numbersCharacters +
  symbolCharacters;
passLength.innerText = passwordRange.value;

passwordRange.addEventListener("input", () => {
  passLength.innerText = passwordRange.value;
});

function generatePassword(final) {
  let password = "";
  let upperChecked = uppercase.checked;
  let lowerChecked = lowerCase.checked;
  let numberChecked = numberCase.checked;
  let symbolChecked = symbolCase.checked;
  if (upperChecked) {
    password +=
      uppercaseCharacters[
        Math.floor(Math.random() * uppercaseCharacters.length)
      ];
  }
  if (lowerChecked) {
    password +=
      lowerCaseCharacters[
        Math.floor(Math.random() * lowerCaseCharacters.length)
      ];
  }
  if (numberChecked) {
    password += numbers[Math.floor(Math.random() * numbers.length)];
  }
  if (symbolChecked) {
    password += symbolChar[Math.floor(Math.random() * symbolChar.length)];
  }

  while (password.length < final) {
    password += allChars[Math.floor(Math.random() * allChars.length)];
  }
  passInput.value = password;
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
