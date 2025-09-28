const weightField = document.getElementById("txt02");
const heightField = document.getElementById("txt03");
const btnProcess = document.getElementById("btnCalculate");
const lblMessageField = document.getElementById("lblIMC");
const lblMessageReport = document.getElementById("lblMessage");
const triangule = document.getElementById("triangule");

btnProcess.addEventListener("click",calculateIMC);

function calculateIMC(){
  console.log("Works!");
  
  let weight = weightField.value;
  let height = heightField.value;

  let IMC = (weight/(height*height))
  console.log(IMC);

  let finalMsg = `IMC = ${IMC.toFixed(2)}`;
  lblMessageField.textContent = finalMsg;

  // Calculamos la posición del triángulo según IMC
  let position;
  if (IMC < 0) {
    position = 0;
  } else if (IMC < 18.5) {
    position = 10.54 * IMC; // tramo 0-18.5
  } else if (IMC < 24.5) {
    position = 195 + 33.33 * (IMC - 18.5); // tramo 18.5-24.5
  } else if (IMC <= 29.5) {
    position = 395 + 40 * (IMC - 24.5); // tramo 24.5-29.5
  } else { 
    // Para IMC mayores a 29.5 seguimos la pendiente del último tramo
    position = 395 + 40 * (IMC - 24.5); 
    // Opcional: limitar a un máximo para que no se salga de la pantalla
    if (position > 791) position = 791;
  }
  
  triangule.style.left = position + 'px';
  console.log("position:", position);

  if(IMC > 30.0){
    lblMessageReport.textContent = "Obesity";
    
  } else if(IMC > 25.0 && IMC < 29.9){
    lblMessageReport.textContent = "Above normal";
  }else if(IMC > 18.5 && IMC < 24.9){
    lblMessageReport.textContent = "Normal";
  }else if(IMC < 18.5){
    lblMessageReport.textContent = "Below normal";
  }
}
