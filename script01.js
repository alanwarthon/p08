console.log("Hello");

const usernameField = document.getElementById("txt01");
const weightField = document.getElementById("txt02");
const heightField = document.getElementById("txt03");
const btnProcess = document.getElementById("btnCalculate");
const txtMessageField = document.getElementById("txtS");

btnProcess.addEventListener("click",calculateIMC);

function calculateIMC(){
  console.log("Works!");
  let userName = usernameField.value;
  let weight = weightField.value;
  let height = heightField.value;

  let IMC = (weight/(height*height))
  console.log(IMC);

  let finalMsg = `Welcome ${userName}, your IMC is ${IMC.toFixed(2)}`;
  txtMessageField.textContent = finalMsg;
}
