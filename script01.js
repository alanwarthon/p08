console.log("Hello");

const usernameField = document.getElementById("txt01");
const weightField = document.getElementById("txt02");
const heightField = document.getElementById("txt03");
const btnProcess = document.getElementById("btnCalculate");
const lblMessageField = document.getElementById("lblIMC");
const welcomeName = document.getElementById("welcomeName");
const img = document.getElementById("imgHuman");

btnProcess.addEventListener("click",calculateIMC);

function calculateIMC(){
  console.log("Works!");
  let userName = usernameField.value;
  let weight = weightField.value;
  let height = heightField.value;

  let IMC = (weight/(height*height))
  console.log(IMC);

  let finalMsg = `IMC = ${IMC.toFixed(2)}`;
  lblMessageField.textContent = finalMsg;
  welcomeName.textContent = `Welcome ${userName}`;

  if(IMC > 30.0){
    img.src="images/obesidad.png";
  } else if(IMC > 25.0 && IMC < 29.9){
    img.src="images/supNormal.png";
  }else if(IMC > 18.5 && IMC < 24.9){
    img.src="images/normal.png";
  }else if(IMC < 18.5){
    img.src="images/infNormal.png";
  }
}
